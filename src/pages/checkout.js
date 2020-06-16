import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components/macro';
import axios from 'axios';
import LoadingOverlay from '../components/loadingOverlay'
import {
  AddressDetails,
  ContactDetails,
  OrderSummary,
  Header,
  ButtonElement,
} from '../components';
import { deletePizzas } from '../store/actions/actions';
import { Layout } from '../styles/common';
import { mainSectionWidth } from '../styles/variables';

export const Form = styled.form`
  width: ${mainSectionWidth}px;
`;

const dataPostReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const initialData = {};

const Checkout = ({ match }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.selectedPizzas);
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [contactState, setContactDetails] = useState({fullName: '', phoneNumber: ''});
  const [addressState, setAddressDetails] = useState({street: '', houseNumber: '', zipCode: ''});

  const [postState, localDispatch] = useReducer(dataPostReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  const handleContactChange = e => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactState,
      [name]: value,
    });
  };

  const handleAddressChange = e => {
    const { name, value } = e.target;
    setAddressDetails({
      ...addressState,
      [name]: value,
    });
  };

  const isContactValid =
    contactState.fullName.length > 0 && 
    contactState.phoneNumber.length > 0;

  const isAddressValid =
    addressState.street.length > 0 &&
    addressState.houseNumber.length > 0 &&
    addressState.zipCode.length > 0;

  const handleSubmit = e => {
    e.preventDefault();

   if (!isContactValid) {
      setContactError(true);
      return;
    }
    setContactError(false);
    
    if (!isAddressValid) {
      setAddressError(true);
      return;
    }
    setAddressError(false);
    let _pizzas=[];

    
    for(let i=0; i<pizzas.length;i++)
    {
      let myPizza = {};
      myPizza.idPizza = pizzas[i].type.type;
      myPizza.idSize = pizzas[i].size.size;
      myPizza.quantity = pizzas[i].quantity;
      _pizzas.push(myPizza);
    }

    const order = {
      orderDetail: _pizzas,
      orderContact: {
        fullAddress: addressState.street + " " + addressState.houseNumber,
        ...contactState,
        ...addressState,
      }
    };


    localDispatch({ type: 'FETCH_INIT' });
    axios.post("order", { order })
    .then(function (response) {
      localDispatch({ type: 'FETCH_SUCCESS' });
      dispatch(deletePizzas());
      setOrderPlaced(true);
    })
    .catch(function (error) {
      localDispatch({ type: 'FETCH_FAILURE' });
    });
  };

  return (
    <>
      <Header {...match} />
      <Layout>
        <main>
          {orderPlaced && <Redirect to="/order-confirmation" />}

          <Form onSubmit={handleSubmit}>
            <ContactDetails
              handleContactChange={handleContactChange}
              contactState={contactState}
              contactError={contactError}
            />

            <AddressDetails
              handleAddressChange={handleAddressChange}
              addressState={addressState}
              addressError={addressError}
            />

            <ButtonElement type="submit">Place Order</ButtonElement>
          </Form>
        </main>

        <OrderSummary readOnly={true} {...match} />
      </Layout>
      <LoadingOverlay visible={postState.isLoading} />
    </>
  );
};

export default Checkout;
