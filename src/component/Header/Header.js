import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import style from "./Header.module.css"
const Header = () => {
    const navbar=[
        {
            text:"Home",
            link:"/"
        },
        {
            text:"About",
            link:"/About"
        },
        {
            text:"Service",
            link:"/Service"
        },
        {
            text:"Course",
            link:"/Course"
        },
        {
            text:"ContactUs",
            link:"/ContactUs"
        },
        
    ]
    const[toggle,setToggle]=useState(false)
    const toggleNavBar=()=>{
        setToggle(!toggle)
    }
  
  return (
    <nav className={style.navbar}>
        <div>
            <h1>Vikesh Kumar</h1>
        </div>
    <div className={style.header}>
        <ul>
        { navbar.map((item)=>{
            return (
                <li>
                <NavLink to={item.link}>{item.text}</NavLink>
                </li>
            )
        })}
        </ul>
     </div>
    { toggle ?  <div className={style.header2}>
        <ul>
        {  navbar.map((item)=>{
            return (
                <li>
                <NavLink to={item.link}>{item.text}</NavLink>
                </li>
            )
        })}
        </ul>
       
    </div>:null}

    <div className={style.btn}>
        <button onClick={toggleNavBar} className={style.menu}>menu</button>
    </div> 
    </nav>
  )
}

export default Header