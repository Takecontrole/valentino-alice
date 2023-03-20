import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductListBrands from "./pages/ProductListBrands";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Consultation from "./pages/Consultation";
import BrandsDescription from "./pages/BrandsDescription";
import { useDispatch, useSelector } from "react-redux";
import NewProduct from "./pages/NewProduct";
import ScrollToTop from "./components/ScrollToTop";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import AdminDashboard from "./pages/AdminDashboard";
import EditProductPage from "./pages/EditProductPage";


import { useEffect } from "react";
import { io } from "socket.io-client";
import { addNotification } from "./features/userSlice";
import OrdersList from "./pages/ordersList/OrderList";
import UserList from "./pages/userList/UserList";
import ViewProductList from "./pages/productList/ProductList";


function App() {
  const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const socket = io("ws://localhost:8080/");
        socket.off("notification").on("notification", (msgObj, user_id) => {
            // logic for notification
            if (user_id === user._id) {
                dispatch(addNotification(msgObj));
            }
        });

        socket.off("new-order").on("new-order", (msgObj) => {
            if (user.isAdmin) {
                dispatch(addNotification(msgObj));
            }
        });
    }, []);
  return (
        <div className="App">
            <HashRouter>
                <ScrollToTop />
             
               
               
                
                <Routes>
                    <Route index element={<Home />} />

                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/consultation" element={<Consultation />} />

                    
                     {user && user.isAdmin && (
                        <>
                            <Route path="/admin" element={<AdminDashboard />} />
                           
                            <Route path="/product/:id/edit" element={<EditProductPage />} />
                    <Route path="/new-product" element={<NewProduct />} />
             <Route path="/users"
          element={<UserList />} />
         
          <Route path="/view-orders" element={
            <OrdersList />}/>
          
          <Route path="/view-products" 
           element={ <ViewProductList />}/>
          
          
         
                        </>
                    )}
                    {user && (
                        <>
                            <Route path="/cart" element={<CartPage />} />
                             <Route path="/orders" element={<OrdersPage />} />
                        </>
                    )}
                    <Route path="/brandsDescription" element={<BrandsDescription />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                   <Route path="/products/:category"
                   element={<ProductList />}/>
                   <Route path="/products/brands/:brend"
                   element={<ProductListBrands />}/>
                 
                 
                 


                  
                </Routes>
                
            
            </HashRouter>
        </div>
    );
}

export default App;
