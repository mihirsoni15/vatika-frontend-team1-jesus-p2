import React from "react";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  AlipayCircleOutlined,
  CheckCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import "./checkout.css";
import { Button, Checkbox, Form, Input } from "antd";
import coin from "../../assets/coin-icon.png";
import right from "../../assets/right-tick-icon.png";
import upi from "../../assets/upi.png"
import card from "../../assets/creditcard.png"
import cash from "../../assets/cashIcon.png"

const { Step } = Steps;

const Checkout = () => {
  return (
    <>
      <div className="bg-color"></div>
      <div className="cart">
        <div className="back">
          {" "}
          <ArrowLeftOutlined /> Back
          <Steps className="steps">
            <Step
              status="process"
              title="Cart"
              icon={<ShoppingCartOutlined />}
            />
            <Step
              status="wait"
              title="Payment"
              icon={
                <AlipayCircleOutlined
                  style={{ color: "#52ACFF" }}
                  className="paymentstep"
                />
              }
            />
            <Step
              status="wait"
              title="Confirmation"
              icon={<CheckCircleOutlined />}
            />
          </Steps>
          <div className="addressCard">
            <h2 className="addressText">Address</h2>
            <hr className="line" />
            <div className="locationcards">
              <div className="kavishCard">
                <h2 className="kavishText">Kavish Garg</h2>
                <p className="kavishAddress">
                  215 Revenue Nagar , Mhow Naka, Indore MP, 452009
                </p>
                <Button className="kavishButton">Selected</Button>
                {/* <Button type="primary" className='buttontest'>Primary Button</Button> */}
                <EditOutlined className="editIcon" style={{ color: "white" }} />
                <DeleteOutlined
                  className="deleteIcon"
                  style={{ color: "white" }}
                />
              </div>
              <div className="mihirCard">
                <h2 className="kavishText">Mihir Soni</h2>
                <p className="kavishAddress">
                  215 Revenue Nagar , Mhow Naka, Indore MP, 452009
                </p>
                <Button className="mihirButton">Select</Button>
                {/* <Button type="primary" className='buttontest'>Primary Button</Button> */}
                <EditOutlined className="editIcon" style={{ color: "white" }} />
                <DeleteOutlined
                  className="deleteIcon"
                  style={{ color: "white" }}
                />
              </div>
              <div className="leadDetails">
                <h3 className="newaddressText" style={{ color: "black" }}>
                  or Add new address
                </h3>
                <Form name="basic" className="checkoutForm">
                  <Form.Item className="formss">
                    <Input
                      placeholder=" First Name"
                      className="firstName"
                      size="large"
                      style={{ color: "black" }}
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      placeholder=" Last Name"
                      className="lastName"
                      size="large"
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      placeholder=" Address"
                      className="addressfld"
                      size="large"
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      placeholder=" Apartment / Suite Number"
                      className="aptfld"
                      size="large"
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      placeholder=" City"
                      className="cityfld"
                      size="large"
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      placeholder=" State"
                      className="statefld"
                      size="large"
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      placeholder=" Pincode"
                      className="pincodefld"
                      size="large"
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Checkbox className="save-checkbox">
                      Save this information for next time
                    </Checkbox>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="save-button"
                    >
                      Save
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="sidepanel">
                <h1 className="paymentText">Payment</h1>
                <p className="balanceText">
                  <img src={coin} alt="coin icon" className="coin-image" />{" "}
                  Super Coin Balance: <span className="amount">Rs. 60 <img src={right} className="right-tick"/></span>
                </p>
                <h2 className="paymentmode-text">Choose your payment method</h2>
                {/* <Radio className="radioButton" title="sjkcb"></Radio> */}
                <Input type="radio" className="radioUpi" style={{border: "none"}}/><lable className="labelText">UPI Payment <img src={upi} className="radioUPI"/></lable>
                <Input type="radio" className="radioUpi" /><lable className="labelText">Debit/Credit Card <img src={card} className="radioicons"/></lable>
                <Input type="radio" className="radioUpi" /><lable className="labelText">Cash On Delivery <img src={cash} className="radioicons"/></lable>
                <hr className="horizontalLine"/>
                <h3 className="totalText">Total</h3>
                <h3 className="totalamountText">Rs. 970</h3>
                <h3 className="discountText">Super Coin Discount</h3>
                <h3 className="discountamountText">- Rs. 60</h3>
                <hr className="horizontalLine2"/>
                <h3 className="finalAmount">Rs. 910</h3>
                <Button className="proceedButton">Proceed</Button>
                <p className="protectedText"><LockOutlined /> Your data will be protected and everything will be private</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
