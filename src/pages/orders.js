
import React,  {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import { Layout } from '../styles/common';
import {Header, OrderDetail } from '../components';
import { Button, Modal} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { staticCurrency } from '../helpers';

const Orders = (props) => {
    const selectedCurrency = useSelector(state => state.currency);
    const [orders, setOrders] = useState([]);
    const [objModalShow, setObjModalShow] = useState({
        modalShow: false,
        id: 0
      });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('order',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }}
            );
            //console.log(result);
            setOrders(result.data);
            };
        
            fetchData();
    },[]);

    //var detailOrder;
    const handleClick =(id)=>
    {
        //detailOrder=<div>{orders[id].total}</div>
        //console.log(detailOrder)
        
        //id
        setObjModalShow({
            ...objModalShow,
            modalShow: true,
            id: id
          });
    }
    
    return (
        <>
        <Header />
        <h3>Orders</h3>
        <Layout>
        <table className="table table-hover alumnos" style={{marginTop: "3%"}}>
            <thead>
                <tr className="table-active">
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Direction</th>
                    <th scope="col">Delivery Cost</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="alumnos">
            {   
                orders.map((order, i)=>
                    (
                        <tr>
                            <td>{order.datetime}</td> 
                            <td>{order.order_contact.full_name} </td> 
                            <td>{order.order_contact.full_address} </td> 
                            <td>{staticCurrency(order.ship_price, selectedCurrency)}</td> 
                            <td>{staticCurrency(order.total, selectedCurrency)}</td> 
                            <td>
                                <button onClick={()=>handleClick(i)} className="float-right btn btn-outline-primary">Detail</button>
                            </td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
        </Layout>
        <Modal show={objModalShow.modalShow}>
          <Modal.Header closeButton>
            <Modal.Title>Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {objModalShow.modalShow ? 
                <OrderDetail order={orders[objModalShow.id]}></OrderDetail>
                : 
                <div></div>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>setObjModalShow({...objModalShow,modalShow: false})}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </>

    );
}

export default Orders

