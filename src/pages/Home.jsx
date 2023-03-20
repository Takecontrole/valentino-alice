import axios from "../axios";
import { useDispatch, useSelector} from "react-redux";
import {
   
  ShoppingCartOutlined
} from "@material-ui/icons";
import React, {useState, useEffect } from "react";
import categories from "../data/categories";
import "./Home.css";
import Announcement from "../components/Announcement";
import ShopName from "../components/ShopName";
import Loading from "../components/Loading";
import Gallery from "../components/Gallery";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import Info from "../components/Info";
import Main from "../components/Main";
import Brends from "../components/Brends";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import Menu from "../components/Menu";
import Accountmenu from "../components/Accountmenu";
import Brandsmenu from "../components/Brandsmenu";
import Collectionsmenu from "../components/Collectionsmenu";

import SingleProduct from "../components/SingleProduct";
import MainCollection from "../components/MainCollection";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';
import Modal from '../components/Modal';
import styled from "styled-components"
import { Link } from "react-router-dom"
import { mobile } from "../responsive";
/*
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/scrollbar";
import {Pagination, FreeMode, Scrollbar } from "swiper";
*/

const Container = styled.div`
  background-color:#C9ADA7 ;
`;
const Wrapper = styled.div`
  
`;
const ModalContainer = styled.div`
  width: 65%;
  position: fixed;
  bottom: 0;
  right: 0;
  
  display: flex;
  background-color: #ffffff;
  border: 1px solid black;
  z-index: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${mobile({ flexDirection: "column",
    bottom: "0",
    
    transform: "none",
    width: "100%",
    height: "35vh", })}
`;
const Stickymassage = styled.div`
  border:none;
  width: 100px;
  height: 40px;
  background-color: black;
  bottom:450px;
  right: -37px;
  position: fixed;
  float:left;
  display: flex;
  z-index: 10000;
  rotate: 270deg;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

const Stickychat = styled.div`
  border :none;
  width: 70px;
  height: 70px;
  background-color: white;
  bottom:5px;
  left: 0;
  position: fixed;
  float:left;
  display: flex;
  z-index: 1;
  border-radius: 50%;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  -moz-box-shadow: 0 0 6px #ccc;
-webkit-box-shadow: 0 0 6px #ccc;
box-shadow: 0 0 6px #ccc;
  cursor: pointer;
`;
const GalleryContainer = styled.div`
  
    

`;


const GalleryTittle = styled.div`
padding-top: 50px;
  font-size: 30px;
  font-weight: 700;
  color: white;
    

`;
const Intro = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 30px;
  ${mobile({ marginBottom:"0" })}
`;
const CategoryContainer = styled.div`
  overflow: hidden;
  display: flex;
    justify-content: center;
    align-items: center;
  background-color:white;
  ${mobile({ paddingTop: "70px",display:"flex", flexDirection:"column" })}
`;
const CategoryTile = styled.div`
  height: 350px;
  width: 350px;
  margin: 20px;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: all 0.3s;
    margin-top: 50px;
    margin-bottom: 50px;
    &:hover {
      transform: scale(1.05);
    }
   ${mobile({margin:"15px",  })}
`;
const Text = styled.h1`
  color: white;
  font-size: 35px;
  position: absolute;
  
`;
const Line = styled.h1`
  height: 350px;
  width: 350px;
  position: relative;
  &:after {
  content: '';
  position: absolute;
  
  transform: scaleX(0);
  height: 2px;
  bottom: 42%;
  left: 10px;
  right: 10px ;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
&:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`;



const Home = () => {
const user = useSelector((state) => state.user);
const [loading, setLoading] = useState(false)
const dispatch = useDispatch();
const products = useSelector((state) => state.products);
  const [openModal, setOpenModal] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false)
  const [accountOpen,setAccountOpen] = useState(false)
  const [brandsOpen,setBrandsOpen] = useState(false)
  const [collectionsOpen,setCollectionsOpen] = useState(false)
    useEffect(() => {
      setLoading(true);
        axios.get("/products").then(({ data }) => { dispatch(updateProducts(data));
        setTimeout(() => {
                    setLoading(false);
                }, 1500);
        
        });
    }, []);
    
const handleDragStart = (e) => e.preventDefault();

  return (
    <Container>

    <div>
 {
     loading ?
     <Loading/>
    : 
        <Wrapper >
        
      <Announcement/>

   <Fade >    
      <ShopName/>
 <MainCollection/>
          <Info/>  
     

        
                                                    { openModal ?     
        <div className="modalContainer" open={openModal} onClose={() => setOpenModal(false)}  >
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
        </div>   
                        :     
                            <div className="stickymassage">
  <button onClick={() => setOpenModal(true)}  >получи награду</button>
        </div>  }
        
        {menuOpen ?

     <div className="stickymenu"> 
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}
          accountOpen={accountOpen} setAccountOpen={setAccountOpen}
          brandsOpen={brandsOpen} setBrandsOpen={setBrandsOpen}
          collectionsOpen={collectionsOpen} setCollectionsOpen={setCollectionsOpen}/>
   
   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
           
            <span className="active-line1"></span>
            <span className="active-line2"></span>
            <span className="active-line3"></span>
          </div> 
</div>
        :
         
 <div className="stickymenu"> 
  
  {user  && !user.isAdmin && (
                                <span>
                            <Link style={{textDecoration:"none", color:"#15023a", marginRight:"15px"}} to="/cart">
                                 <ShoppingCartOutlined/>
                                    {user?.cart.count > 0 && (
                                       <span className="badge badge-warning" id="cartcount">
                                            {user.cart.count}
                                        </span>
                                   
                                    )}
                            </Link >
   
                                </span>
                        )}
   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
           
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div> 
     
          
         
</div>
}

        {accountOpen ? 
      <div className="stickymenu"> 
        

          <Accountmenu
          accountOpen={accountOpen} setAccountOpen={setAccountOpen}/>
   
               <div className="hamburger" onClick={()=>setAccountOpen(false)} >
           
            <span className="active-line1"></span>
            <span className="active-line2"></span>
            <span className="active-line3"></span>
          </div> 
          
</div>
   :
    <div > 
   
</div>

        }
        {brandsOpen ? 
      <div className="stickymenu"> 
        

          <Brandsmenu 
          brandsOpen={brandsOpen} setBrandsOpen={setBrandsOpen}/>
   
               <div className="hamburger" onClick={()=>setBrandsOpen(false)} >
           
            <span className="active-line1"></span>
            <span className="active-line2"></span>
            <span className="active-line3"></span>
          </div> 
          
</div>
   :
    <div > 
   
</div>

        }
        
        {collectionsOpen ?
        

      <div className="stickymenu"> 
          <Collectionsmenu 
        collectionsOpen={collectionsOpen} setCollectionsOpen={setCollectionsOpen}/>
   
               <div className="hamburger" onClick={()=>setCollectionsOpen(false)} >
           
            <span className="active-line1"></span>
            <span className="active-line2"></span>
            <span className="active-line3"></span>
          </div> 
</div> 

   :
    <div > 
   
</div>
        }
 

    <div className="stickychat"> 
              <Link style={{textDecoration:"none", color:"white"}}to="/consultation">
Напиши нам
    </Link>
</div>
   

          <GalleryContainer>
            <GalleryTittle>
              <h4>Вещи которые должны быть.</h4>
            </GalleryTittle>
          </GalleryContainer>
     <Gallery/>
      <Main/>
      <Brends/>
     <SingleProduct/>
     
    
     <Collection/>
     
     
          </Fade>
     
             
  <CategoryContainer>
              
                
                  {categories.map((category) => (
                        <Link to={`/products/${category.name}`}  style={{textDecoration: 'none' }}>
                           
  <Fade>
                                <CategoryTile style={{ backgroundImage: ` url(${category.img})`, gap: "10px" }} className="categoryTile">
                              <Text>  {category.name}
                                     </Text>
                                     <Line>  </Line>
                                </CategoryTile>
                                
                        </Fade>
                            
                        </Link>
                    ))}
                    
                        
            </CategoryContainer>
            
                 
        
     
               
               
      
 
                        
                 <Fade>
              
               <Newsletter/>
                <Footer />

                </Fade>
            </Wrapper>
 }
    </div>
    
    </Container>
       
    )
}
export default Home;