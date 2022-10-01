import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./Signup.css";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import logo from "../../assets/vatikalg.png";
import vatikabg from "../../assets/leaves.png";
import mobileleaf from "../../assets/leafbgmobile.png";
import {Link} from "react-router-dom"
import {useState, useNavigate} from "react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    username:"",
    email:"",
    password:""
  })

  const [error, setError] = useState("")

  // const navigate = useNavigate()

  const handleChange = ({ currentTarget: input}) => {
    setData({ ...data, [input.name]: input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const {data:res} = await axios.post(url, data);
      // navigate("/login")
      console.log(res.message)
    } catch (error) {
      if(error.response && error.response.status >= 400 && error.response <= 500 ) {
          setError(error.response.data.message)
      }
    }
  }
  return (
    <>
       <div className="bg-color"></div>
       <form>
    <input type="text" name="name" placeholder="Username" />
    <br />
    <input type="email" name="email" placeholder="Email" />
    <br />
    <input type="password" name="password" placeholder="Password" />
    <br />
  <input type="submit" value="Submit"/>
</form>
      </>
  //   <>
  //     <div>
  //       {/* <img src={mobileleaf} className="mobile-leaf" /> */}
  //     </div>
  //     <div>
  //       {/* <img src={vatikabg} alt="Vatika Backgroound" className="vatikaleaf" /> */}
  //     </div>
  //     {/* <div className="square"></div> */}
  //     <div className="Signup">
  //       <img src={logo} alt="Vatika Logo" className="logo" />
  //       <h1 className="SignupH1">Sign Up</h1>
  //       <Form
  //         autoComplete="off"
  //         name="basic"
  //         onSubmit={handleSubmit}
  //         labelCol={{
  //           span: 8,
  //         }}
  //         wrapperCol={{
  //           span: 16,
  //         }}
  //         initialValues={{
  //           remember: true,
  //         }}
  //       >
  //         <Form.Item
  //           className="UnFld"
  //           name="username"
  //           value={data.username}
  //           onChange={handleChange}
  //           rules={[
  //             {
  //               required: true,
  //               message: "Please input your username",
  //             },
  //             { whitespace: true, message: "Username cannot be empty" },
  //             { min: 5, message: "Username must be at least 5 characters" },
  //           ]}
  //         >
  //           <UserOutlined className="unameicon" />
  //           <Input placeholder="     Username" className="unamefld" />
  //         </Form.Item>

  //         <Form.Item
  //           className="EmailForm"
  //           name="email"
  //           value={data.email}
  //           onChange={handleChange}
  //           rules={[
  //             {
  //               required: true,
  //               message: " Please input your email",
  //             },
  //             { type: "email", message: "Please enter a valid email" },
  //           ]}
  //           // hasFeedback
  //         >
  //           <MailOutlined className="mailicon" />
  //           <Input placeholder="     Email" className="emailfld" />
  //         </Form.Item>

  //         <Form.Item
  //           className="pwdform"
  //           name="password"
  //           value={data.password}
  //           onChange={handleChange}
  //           rules={[
  //             {
  //               required: true,
  //               message: "Please input your password",
  //             },
  //             { whitespace: true, message: "Password cannot be empty" },
  //             {
  //               min: 9,
  //               message: "Password must be at least 8 characters long",
  //             },
  //           ]}
  //         >
  //           <LockOutlined className="pwdicon" />
  //           <Input placeholder="     Password" className="pwdfld" />
  //         </Form.Item>

  //         <Form.Item
  //           className="paraform"
  //           name="agreement"
  //           rules={[
  //             {
  //               required: true,
  //               message:
  //                 "To proceed, you need to agree with our terms and conditions",
  //             },
  //           ]}
  //           valuePropName="checked"
  //           wrapperCol={{
  //             offset: 8,
  //             span: 16,
  //           }}
  //         >
  //           <p className="ParaSignup">
  //             Your personal data will be used to support your experience
  //             throughout the website, to manage access to your account, and for
  //             other purposes described in our privacy policy.
  //           </p>
  //           <Checkbox className="CheckboxButton">
  //             I agree to Terms and Conditions
  //           </Checkbox>
  //         </Form.Item>

  //         <Form.Item
  //           wrapperCol={{
  //             offset: 8,
  //             span: 16,
  //           }}
  //         >
  //           {error && <div>{error}</div>}
  //           <Button className="SignupButton" type="primary" htmlType="submit">
  //             SIGN UP
  //           </Button>
  //         </Form.Item>
  //       </Form>
  //       <h1 className="H1Login">Have an Account?</h1>
  //       <button className="LoginButton">LOGIN</button>
  //       <CloseOutlined className="crossMark" />
  //     </div>
  //     <div className="circle"></div>
      /* <form><input>cjhbsdcjkb</input></form> */
  
  );
}
export default Signup;
