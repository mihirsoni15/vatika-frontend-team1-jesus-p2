import React from 'react'
// import "./Login.css"
import leaf from '../../assets/leaves.png';
import logo from '../../assets/vatikalg.png';
import {CloseOutlined, UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import mobileleaf from '../../assets/leafbgmobile.png'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <>
    <div className="bg-color"></div>
    <div> < img src={mobileleaf} className="mobileleaf"/> </div>
      <div className="loginmain">
        <img src={leaf} className="leaf" />
        <div className="square"></div>
        <img src={logo} className="logo" />
        <h1 className="loginText">Login</h1>
        <h1 className="createtext">Create Account</h1>
      </div>
      <CloseOutlined className="crossmarkicon" />

      <Form
        className="loginForm"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          className="form-login"
          name="email"
          rules={[
            { required: true, message: "Please input your email" },
            { type: "email", message: "Please enter a valid email" },
            { whitespace: true, message: "Email cannot be empty" },
          ]}
          // hasFeedback
        >
          <MailOutlined className="emailIcon"/>
          <Input
            placeholder="       Email Address"
            className="email-input"
            size="large"
          />
        </Form.Item>
        <br />
        <Form.Item
          name="password"
          className='pwdform'
          rules={[
            { required: true, message: "Please input your password" },
            {
              whitespace: true,
              message: "Password cannot be empty",
              type: "password",
            },
            { min: 9, message: "Password must be at least 8 characters long" },
            // {validator:(_,value) => value && value.includes('A') ? Promise.resolve():Promise.reject('Password does not match criteria')}
          ]}
        >
          <LockOutlined className='pwdicon'/>
          <Input placeholder="       Password" className="pwd-input" />
        </Form.Item>

        <p className="forgot-pwd">Forgot Password?</p>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox className="remember-checkbox">Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="login-button">
            LOGIN
          </Button>
        </Form.Item>
      </Form>


          <Link to="/signup">
      <Button type="primary" htmlType="submit" className="signup-button">
        SIGN UP
      </Button>
      </Link>
    </>
  )
}


export default Login;