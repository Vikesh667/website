import React from 'react'
import {NavLink} from "react-router-dom"
import style from "../Header.module.css"
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
  return (
    <>
    <nav className={style.header}>
        <ul>
        {navbar.map((item)=>{
            return (
                <li>
                <NavLink to={item.link}>{item.text}</NavLink>
                </li>
            )
        })}
        </ul>
        <p className={style.menu}>menu</p>
    </nav>
      
    </>
  )
}

export default Header