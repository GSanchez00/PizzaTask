import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCurrency } from '../store/actions';

import { Nav, Navbar} from 'react-bootstrap'

import { colors } from '../styles/variables';


const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  &:hover {
    color: grey; // <Thing> when hovered
    text-decoration: none;
  }
`;

const Currency = styled.select`
  left: 0;
  top: 0;
  width: 6em;
  text-align: left;
  position: relative;
  padding-left: .5rem;
  border: 1;
  border-radius: 15px;
  background: transparent;

  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;

  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1024' height='640'><path d='M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z'></path></svg>") 90%/12px 6px no-repeat;

  font-family: inherit;
  color: grey;

  &:focus
  {
    outline: none;
  }
`;


const Header = ({ path, isExact }) => {
  const dispatch = useDispatch();

  //Esta funcion coloca el label en el Store
  const handleCurrencySelection = (currency) => {
    dispatch(setCurrency({currency}));
  };
  
  
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={require(`../assets/img/Logo_.png`)}
          width="125"
          height="58"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <StyledLink to="/">Home</StyledLink>
          </Nav.Link>
        </Nav>
        <Nav>
          <Currency defaultValue="USD" onChange={(e) => handleCurrencySelection(e.target.value)}>
            <option data-symbol="$" value="USD">USD</option>
            <option data-symbol="€" value="EUR">EUR</option>
          </Currency>
          {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
