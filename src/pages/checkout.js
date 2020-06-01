import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components/macro';
import axios from 'axios';

import {
  AddressDetails,
  ContactDetails,
  OrderSummary,
  Header,
  ButtonElement,
} from '../components';
//import { cardRegex, expDateRegex, cvvRegex } from '../helpers';
import { deletePizzas } from '../store/actions';
import { Layout } from '../styles/common';
import { mainSectionWidth } from '../styles/variables';

export const Form = styled.form`
  width: ${mainSectionWidth}px;
`;

const Checkout = ({ match }) => {
  //const apiUrl="http://127.0.0.1:8000/api/";
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.selectedPizzas);
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const [contactState, setContactDetails] = useState({
    fullName: '',
    phoneNumber: '',
  });

  const [addressState, setAddressDetails] = useState({
    street: '',
    houseNumber: '',
    zipCode: '',
  });

  /*
  const [paymentState, setPaymentDetails] = useState({
    cardNumber: '',
    expDate: '',
    cvvNumber: '',
  });
  */

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

  /*
  const handlePaymentChange = e => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentState,
      [name]: value,
    });
  };
  */
  /*
  const isCardValid =
    cardRegex(paymentState.cardNumber) &&
    cvvRegex(paymentState.cvvNumber) &&
    expDateRegex(paymentState.expDate);
  */

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
      //,
      //paymentInfo: { ...paymentState },
    };

    
    axios.post("order", {
      //headers: {
      // 'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      //},
      order
    })
    .then(function (response) {
      setOrderPlaced(true);
      dispatch(deletePizzas());
    })
    .catch(function (error) {
      //console.log(error);
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

            {/*
            <PaymentDetails
              cardError={cardError}
              handlePaymentChange={handlePaymentChange}
              paymentState={paymentState}
            />
            */
            }

            <ButtonElement type="submit">Place Order</ButtonElement>
          </Form>
        </main>

        <OrderSummary readOnly={true} {...match} />
      </Layout>
    </>
  );
};

export default Checkout;
