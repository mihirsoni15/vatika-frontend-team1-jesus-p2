import React from 'react'
import { Button } from "antd";
import {ArrowRightOutlined, DownOutlined, ClockCircleFilled} from "@ant-design/icons";
import "./OrderHistory.css"
import plant from "../../assets/plant-1.png"

const OrderHistory = () => {
  return (
    <>
    <div className="bg-color"></div>
    <div className='orderHistoryhead'>
        <h1 className='historyText'>Order History</h1>
        <Button type="primary" className='csButton'>Continue Shopping <ArrowRightOutlined/></Button>
        <div className='bgcolor1'></div>
        <div className='productHistory'>
            <h2 className='dispatchedtext'><ClockCircleFilled className='orangeicon'/> Dispatched</h2>
            <img src={plant} className="plant-image"/>
            <img src={plant} className="plant-image"/>
            <img src={plant} className="plant-image"/>
            <p className='quantityText'>Quantity: 04</p>
            <Button type="primary" className='trackButton'>Track Order</Button>
            <Button type="primary" className='viewButton'>View Order</Button>
            <Button type="primary" className='invoiceButton'>Get Invoice</Button>
    </div>
    <div className='bgcolor2'></div>
        <div className='productHistory2'>
            <h2 className='deliveredtext'><ClockCircleFilled/> Delivered on 12 september, 2022</h2>
            <img src={plant} className="plant-image"/>
            <img src={plant} className="plant-image"/>
            <img src={plant} className="plant-image"/>
            <p className='quantityText'>Quantity: 04</p>
            <Button type="primary" className='trackButton'>Track Order</Button>
            <Button type="primary" className='viewButton'>View Order</Button>
            <Button type="primary" className='invoiceButton'>Get Invoice</Button>
            <Button type="primary" className='loadButton'>Load More<DownOutlined/></Button>
    </div>

    </div>
    </>
  )
}

export default OrderHistory;