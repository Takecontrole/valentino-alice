import axios from "../axios";
import React, { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logout, resetNotifications } from "../features/userSlice";
import "./Navigation.css"

function Accountmenu({accountOpen, setAccountOpen}) {
 
const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const bellRef = useRef(null);
    const notificationRef = useRef(null);
    const [bellPos, setBellPos] = useState({});

    function handleLogout() {
        dispatch(logout());
    }
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
       <div className="menu" >
      <ul >
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

                        {/* if user */}
                        {user && (
                            <>
                              
                                <li> <li>{`${user.email}`} </li>
                                    {user.isAdmin && (
                                        <>
                                          <li>
                                            <a style={{textDecoration:"none", color:"white"}} href="https://takecontrole.github.io/AdminDashboard/" target="_blank">
                                              Панель управления
                                            </a >
                                            </li>
                                            <Link style={{textDecoration:"none", color:"white"}} to="/new-product">
                                                <li>Создать товар</li>
                                            </Link >
                                        </>
                                    )}
                                    {!user.isAdmin && (
                                        <>
                                        
                                            <Link style={{textDecoration:"none", color:"white"}} to="/orders">
                                                <li>История заказов</li>
                                            </Link >
                                        </>
                                    )}

                                    
                                    <button  onClick={handleLogout} className="logout-btn">
                                        Выйти
                                    </button>
                                </li>
                            </>
                        )}
        </li>
       
      </ul>
                {/* notifications */}
            <div className="notifications-container" ref={notificationRef} style={{ position: "absolute",  display: "none" }}>
                {user?.notifications.length > 0 ? (
                    user?.notifications.map((notification) => (
                        <p className={`notification-${notification.status}`}>
                            {notification.message}
                            <br />
                            <span>{notification.time.split("T")[0] + " " + notification.time.split("T")[1]}</span>
                        </p>
                    ))
                ) : (
                    <p>Нет уведомлений</p>
                )}
            </div>
    </div>
  );
}
    

export default Accountmenu;
