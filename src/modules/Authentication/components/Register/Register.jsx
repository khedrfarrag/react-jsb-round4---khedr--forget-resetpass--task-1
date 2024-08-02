import React from 'react'
import Styleregiter from "./register.module.css"
import { Button } from 'react-bootstrap'
import imglogin from "../../../../assets/74297541930ad229a0eda19379889be7.png"

export default function Register() {
  return (
    <div className={Styleregiter.contaner}>

      <div className={Styleregiter.bookingform}>
        <img src={imglogin} alt="login-logo" className={Styleregiter.imgLogo} />
        <div className={Styleregiter.LoginTitle}>
          <h1>log in</h1>
          <p>welcome back! please enter your details</p>
        </div>
        <form id="data-form" action="./data-form.html" className={Styleregiter.MainForm}>
          <div className={Styleregiter.contanerForms}>
            <div className={Styleregiter.RegisterLeft}>
              <div className={Styleregiter.mainEmail}>
              <box-icon name='mobile-alt'></box-icon>
                <input type="text" name="name" placeholder="username" />
              </div>
              <div className={Styleregiter.mainOtp}>
                <box-icon name='lock-alt' size="30px" ></box-icon>
                <input type="text" name="country" placeholder="country" />

              </div>
              <div className={Styleregiter.mainNpassword}>
                <box-icon name='lock-alt' size="30px" ></box-icon>
                <input type="text" name="password" placeholder="password" />

              </div>
            </div>
            <div className={Styleregiter.RegisterRight}>
              <div className={Styleregiter.mainCpassword}>
                <box-icon name='lock-alt' size="30px" ></box-icon>
                <input type="text" name="email" placeholder="enter your email" />

              </div>
              <div className={Styleregiter.mainCpassword}>
                <box-icon name='lock-alt' size="30px" ></box-icon>
                <input type="text" name="phone" placeholder="phone number" />

              </div>
              <div className={Styleregiter.mainCpassword}>
                <box-icon name='lock-alt' size="30px" ></box-icon>
                <input type="text" name="Cpassword" placeholder="confirm password" />

              </div>
            </div>

          </div>



          <Button type='submit' className={Styleregiter.btn1}>login</Button>
          {/* <a href="#" type="submit" className={StyleLogin.btn1}>log in</a> */}
        </form>
      </div>
    </div>
  )
}
