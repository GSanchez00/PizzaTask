import React,{useEffect} from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import { NotFound, Login, PrivateRoute } from './components';
import { Checkout, Menu, OrderConfirmation } from './pages';
import GlobalStyle from './styles/global';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './store/actions/actions';
import AccordionGrid from './pages/accordionGrid';
import {fetchPizzas} from './store/actions/pizzaAction'
import {fetchSizes} from './store/actions/sizeAction'
import {fetchParameters} from './store/actions/parameterAction'
import Loading from './components/loading'

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const menuData = useSelector(state => state.menuData);
  axios.defaults.baseURL=`http://127.0.0.1:8000/api/`;
  
  axios.interceptors.response.use(
    response => response,
    error => errorHandler(error)
  )
  
  useEffect(() => {
      dispatch(fetchPizzas());
      dispatch(fetchSizes());
      dispatch(fetchParameters());
  },[]);

  const errorHandler = (error) => {
    if (error.response && error.response.status === 401) {
      dispatch(setCurrentUser({}));     //store.dispatch(logoutUser());
      localStorage.setItem('token', "");
    }
    if (error.response && error.response.status === 404) {}
    return Promise.reject({ ...error })
  }

  const authenticate =async (user)=> {
    //let data=JSON.stringify(user);
    let res = await axios.post('login', user);
    localStorage.setItem('token', res.data.data.api_token);
    dispatch(setCurrentUser(res.data.data));  
  }

  /*
  const signout = (cb) => {
    dispatch(setCurrentUser({}));
    localStorage.setItem('token', '');
    //UserProfile.setName("");
  }
  */
  
  if (menuData.isFetching) {
    return <Loading />
  }
  if (menuData.errorMessage) {
    console.log(menuData);
    return <div style={{color: 'red'}}>ERROR: {menuData.errorMessage}</div>
  }

  return(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Menu pizzas={menuData.pizzas} sizes={menuData.sizes} parameters={menuData.parameters}/>
        </Route>
        <Route exact path="/login">
          <Login authenticate={authenticate}  isAuthenticated={auth && auth.isAuthenticated}/>
        </Route>
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/order-confirmation" component={OrderConfirmation} />
        <PrivateRoute path="/orders" isAuthenticated={auth && auth.isAuthenticated}>
          <AccordionGrid />
        </PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
)};


export default App;
