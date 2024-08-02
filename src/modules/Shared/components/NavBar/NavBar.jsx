import React from 'react'
import {  Navbar } from 'react-bootstrap'
import Stylenavbar from "./navbar.module.css"
export default function NavBar() {
    return (
        <div className={Stylenavbar.contaner} >
            {/* <h1>Hello World From NavBar </h1> */}

            <nav className={Stylenavbar.navebar}>

                <ul className={Stylenavbar.mainList}>
                    <li><input type="search" placeholder='search...' className={Stylenavbar.searching} /></li>
                    <li></li>
                    <li><box-icon type='solid' name='bell-ring'></box-icon></li>
                </ul>
             
            </nav>
        </div>
    )
}
