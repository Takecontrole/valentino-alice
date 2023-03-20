import axios from "../axios";
import React, { useRef, useState } from "react";
import {
   
  ShoppingCartOutlined
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import { resetNotifications } from "../features/userSlice";


import { Link } from "react-router-dom";



function Menu({menuOpen, setMenuOpen, accountOpen, setAccountOpen, brandsOpen, setBrandsOpen, collectionsOpen, setCollectionsOpen}) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const bellRef = useRef(null);
    const notificationRef = useRef(null);
    const [bellPos, setBellPos] = useState({});

    
    const unreadNotifications = user?.notifications?.reduce((acc, current) => {
        if (current.status == "unread") return acc + 1;
        return acc;
    }, 0);

    function handleToggleNotifications() {
        const position = bellRef.current.getBoundingClientRect();
        setBellPos(position);
        notificationRef.current.style.display = notificationRef.current.style.display === "block" ? "none" : "block";
        dispatch(resetNotifications());
        if (unreadNotifications > 0) axios.post(`/users/${user._id}/updateNotifications`);
    }
    return (
       <div className="menu ">
      <ul>
                   <li >
 
  {user  && !user.isAdmin && (
                                <li>
                            <Link style={{textDecoration:"none", color:"white"}} to="/cart">
                                 <ShoppingCartOutlined/>
                                    {user?.cart.count > 0 && (
                                       <span className="badge badge-warning" id="cartcount">
                                            {user.cart.count}
                                        </span>
                                   
                                    )}
                            </Link >
                                       <span style={{fontSize:"20px", marginLeft:"10px", position: "relative" }} onClick={handleToggleNotifications}>
                                    <i className="fas fa-bell" ref={bellRef} data-count={unreadNotifications || null}></i>
                                </span>    
                                </li>
                        )}
                                </li>

<li>
                               {/* if no user */}
                        {!user && (
                            <Link Link style={{textDecoration:"none",color:"white"}}to="/login">
                                <li>Войти</li>
                            </Link>
                        )}
</li>
                        {user && (          
        <li 
           onClick={
           ()=>setAccountOpen(true)}>
          Личный кабинет
        </li>
        )}
        <li 
           onClick={
           ()=>setBrandsOpen(true)}>
          Бренды
        </li>
      
        <li onClick={()=>setCollectionsOpen(true)}>
          Коллекции
        </li>
      </ul>

    </div>
  );
}
    

export default Menu;
