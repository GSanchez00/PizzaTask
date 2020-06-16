
import React,  {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import { Layout } from '../styles/common';
import {Header, OrderDetail } from '../components';
import { Button, Modal} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { staticCurrency } from '../helpers';
import { Accordion, Card} from 'react-bootstrap';
import PaginationBasic from '../components/paginationBasic';

const AccordionGrid = (props) => {
    const selectedCurrency = useSelector(state => state.currency);
    const [orders, setOrders] = useState([]);
    const [objModalShow, setObjModalShow] = useState({
        modalShow: false,
        id: 0
      });

      const changePage=async (page)=>{
        const result = await axios('order?page=' + page,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }}
        );
        setOrders(result.data);
      }

      useEffect(() => {
        const fetchData = async () => {
            const result = await axios('order',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }}
            );
            setOrders(result.data);
            };
        
            fetchData();
    },[]);
    
    return (
        <>
        <Header />
        <h3 style={{width:"100%", margin:"1%", textAlign:"center"}}>Orders</h3>
        <Layout style={{marginBottom: "20px"}}  >
        <Accordion defaultActiveKey="0" style={{width: "100%"}}>
            <div class="container" style={{width: "100%", marginTop:"3%", textAlign:"center"}}>
                <div class="row">
                    <div class="col">
                        <h5>Date</h5>
                    </div>
                    <div class="col">
                        <h5>Name</h5>
                    </div>
                    <div class="col">
                        <h5>Address</h5>
                    </div>
                    <div class="col">
                        <h5>Delivery Cost</h5>
                    </div>
                    <div class="col">
                        <h5>Total</h5>
                    </div>
                </div>
            </div>
            {   orders.data &&
                orders.data.map((order, i)=>
                    (
                    <Card key={i} style={{width: "100%"}}>
                        <Card.Header style={{width: "100%"}}>
                        <Accordion.Toggle as={Card.Header}  variant="link" eventKey={i} style={{width: "100%"}}>
                        <div class="container">
                            <div class="row" style={{textAlign:"center"}}>
                                <div class="col">
                                {order.datetime}
                                </div>
                                <div class="col">
                                {order.order_contact.full_name}
                                </div>
                                <div class="col">
                                {order.order_contact.full_address}
                                </div>
                                <div class="col">
                                {staticCurrency(order.ship_price, selectedCurrency)}
                                </div>
                                <div class="col">
                                {staticCurrency(order.total, selectedCurrency)}
                                </div>
                            </div>
                        </div>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={i}>
                            <div style={{width: "90%", margin: "5%"}}>
                            <OrderDetail order={order}></OrderDetail>
                            </div>
                        </Accordion.Collapse>
                    </Card>
                    
                    )
                )
            }
            
        </Accordion>
        </Layout>
        <PaginationBasic changePage={changePage} total={orders.total} itemsPerPage={orders.per_page}></PaginationBasic>

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

export default AccordionGrid

