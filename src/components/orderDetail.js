import React from 'react'
import { useSelector } from 'react-redux';
import { staticCurrency } from '../helpers';

export default function OrderDetail({order}) {
    const selectedCurrency = useSelector(state => state.currency);
    const menuData = useSelector(state => state.menuData);
    const pizzas=menuData.pizzas;
    const sizes=menuData.sizes;
    return (
      <>

        <h5>Order Contact</h5>
        <div class="container">
            <div class="row" style={{textAlign:"center", backgroundColor: "rgb(218, 218, 218)", padding: "7px"}}>
                <div class="col">
                    <b>Full Name</b>
                </div>
                <div class="col">
                    <b>Phone Number</b>
                </div>
                <div class="col">
                    <b>Full Address</b>
                </div>
                <div class="col">
                    <b>Zip Code</b>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row" style={{textAlign:"center", marginTop:"10px"}}>
                <div class="col">
                {order.order_contact.full_name}
                </div>
                <div class="col">
                {order.order_contact.phone_number}
                </div>
                <div class="col">
                {order.order_contact.full_address}
                </div>
                <div class="col">
                {order.order_contact.zip_code}
                </div>
            </div>
        </div>
        <div>
        <br></br>
        <h5>Order Detail</h5>
        <table className="table table-hover" style={{marginTop: "3%"}}>
            <thead>
                <tr className="table-active">
                    <th scope="col">Pizza</th>
                    <th scope="col">Size</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Single Price</th>
                    <th scope="col">Sub Total</th>
                </tr>
            </thead>
            <tbody>
            {   
                order.order_details.map((detail, i)=>
                    (
                        <tr>
                            <td>{pizzas.find(el => el.id === detail.pizza_id).name}</td> 
                            <td>{sizes.find(el => el.id === detail.size_id).name} </td> 
                            <td>{detail.quantity} </td> 
                            <td>{staticCurrency(detail.single_price, selectedCurrency)}</td> 
                            <td>{staticCurrency(detail.total_price, selectedCurrency)}</td> 
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
        </div>
      </>
    );
  }