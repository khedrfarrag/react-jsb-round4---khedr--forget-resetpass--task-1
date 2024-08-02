import React from 'react'
import Stylesidebar from "./sidebar.module.css"
export default function SideBar() {
    return (
        <div className={Stylesidebar.contaner}>
            <h1>Hello World From SideBar </h1>
            <div className={Stylesidebar.Sidebar}>
            <ul className={Stylesidebar.MainList}>
                <li>home</li>
                <li>users</li>
                <li>recipes</li>
                <li>category</li>
                <li>change password</li>
                <li>logout</li>
            </ul>
            </div>
        </div>
    )
}
