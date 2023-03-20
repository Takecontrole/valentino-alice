import axios from "../axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {  Row, Col, Badge, ButtonGroup, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProductPreview from "../components/ProductPreview";
import SimilarProduct from "../components/SimilarProduct";
import "./ProductPage.css";
import { useAddToCartMutation } from "../services/appApi";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import ToastMessage from "../components/ToastMessage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  ArrowLeft
} from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from "../responsive";
import { HashLink } from 'react-router-hash-link';
import Menu from "../components/Menu";
import Accountmenu from "../components/Accountmenu";
import Brandsmenu from "../components/Brandsmenu";
import Collectionsmenu from "../components/Collectionsmenu";
import {
   
  ShoppingCartOutlined
} from "@material-ui/icons";
/*
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/scrollbar";
import {Pagination, FreeMode, Scrollbar } from "swiper";
*/
const Container = styled.div`
  display: flex;
 //${mobile({ flexDirection: "column" })} 
`;

const FilterContainer = styled.div`
  margin-top: 40px;
  justify-content: space-between;
 // ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
padding-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FilterTitle = styled.span`
  font-size: 10px;
  font-weight: 200;
`;

const FilterColor = styled.div`
margin: 5px;
border: 2px solid #fcf5f5;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  
  cursor: pointer;
`;

const FilterSize = styled.select`
background-color:  #C9ADA7;
border: 2px solid #fcf5f5;
border-radius: 30%;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const MobileImageContainer = styled.div`
  display: none;
${mobile({ 
  display: "flex",
  flex: "1",
  margin: "5px",
  minWidth: "280px",
  height: "550px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "none",
  position: "relative",
 paddingBottom: "100px",
 overflow: "hidden",
  })} 
  
`;
const ImageContainer = styled.div`
  
  width:40%;
  // ${mobile({ display: "none" })} 
`;
  
const PaginationContainer = styled.div`
  width: 100px;
  height: 800px;
  margin-left: 20px;
  margin-right: 20px;
  top:120px;
  left: 0;
  display: relative;
  position: sticky;
//  ${mobile({   display: "none" })}
`;
const Info = styled.div`
width:45%;
height:800px;
display: relative;
  position: sticky;
  top:120px;
  right: 0;
  color: white;
  padding: 30px;
 // ${mobile({ width: "100%", height:"900px", fontSize:"12px"})}
`;

const Button = styled.button`
width: 90%;
margin-left: 15px;
color: #C9ADA7;
border: 2px solid #fcf5f5;
  padding: 15px;
  background-color: #fcf5f5;
  cursor: pointer;
  font-weight: 500;
margin-bottom: 30px;
  &:hover{
      background-color: #C9ADA7;
      color: white;
  }
`;


function ProductPage() {
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    const [product, setProduct] = useState(null);
    const [similar, setSimilar] = useState(null);
    const [addToCart, { isSuccess }] = useAddToCartMutation();
    const [bgcolor, setBgcolor] = useState(null);
    const [psize, setPsize] = useState("");
      const [openModal, setOpenModal] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false)
  const [accountOpen,setAccountOpen] = useState(false)
  const [brandsOpen,setBrandsOpen] = useState(false)
  const [collectionsOpen,setCollectionsOpen] = useState(false)

    useEffect(() => {
        axios.get(`/products/${id}`).then(({ data }) => {
            setProduct(data.product);
            setSimilar(data.similar);
            setBgcolor(data.product.color)
        });
    }, [id]);
    
    const handleDragStart = (e) => e.preventDefault();
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };
    
  let similarProducts = [];
    if (similar) {
        similarProducts = similar.map((product, idx) => (
            <div className="item" data-value={idx}>
                <ProductPreview {...product} />
            </div>
        ));
    }
    
 if (!product) {
        return <Loading />;
    }
if (bgcolor == "розовый") {
  return setBgcolor("pink");
}
if (bgcolor == "чёрный") {
  return setBgcolor("black");
}
if (bgcolor == "синий") {
  return setBgcolor("blue");
}
if (bgcolor == "серебро") {
  return setBgcolor("gray");
}

    
    const images = product.pictures.map((picture) => <img className="product__carousel--image" src={picture.url} onDragStart={handleDragStart} />);
 const handleClick = () => { addToCart({ userId: user._id, productId: id, price: product.price, color: product.color, 
                          size: psize,
                          image: product.pictures[0].url })}
    return (
        <div>
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
        <Container>


  <PaginationContainer>
  {product.pictures.map((picture) => 
  <HashLink  smooth to={`#${picture.public_id}`} >  <img id="testjump" style={{width:"100px", margin:"5px"}} src={picture.url}/> </HashLink>
  )}
 
  </PaginationContainer>
    <ImageContainer >
   {product.pictures.map((picture) => <img id={picture.public_id} src={picture.url}  style={{width:"400px"}}/>
   )}
    </ImageContainer>
    <MobileImageContainer>
     <AliceCarousel mouseTracking items={images}
                      infinite 
                      
                     autoPlay={true}
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
                     controlsStrategy="alternate" />
    </MobileImageContainer>
    
    <Info >
    <p style={{textAlign: "start"}}>{product.brend}</p>
    
    <h1>{product.name} // {product.color}</h1>
     <p>
       {product.category}
                    </p>
    <p>₽{product.price}</p>
          <FilterContainer>
           <Filter>
              <FilterTitle>Цвет</FilterTitle>
              
              <FilterColor color={bgcolor} />
            
            </Filter>
            <Filter>
              
            <FilterSize onChange={(e) => setPsize(e.target.value)}>
                  <FilterSizeOption disabled selected>-</FilterSizeOption>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
             
              </FilterSize>
            </Filter>
          </FilterContainer>
          
                    {user && !user.isAdmin && (
                        <ButtonGroup style={{ width: "90%" }}>
                           
                           <Button className="addButton" onClick={handleClick}>
                                Добавить в корзину
                            </Button> 
                        </ButtonGroup>
                    )}
                    {user && user.isAdmin && (
                        <LinkContainer to={`/product/${product._id}/edit`}>
                            <Button className="addButton">Редактировать</Button>
                        </LinkContainer>
                    )}
                  {isSuccess && <ToastMessage bg="white" title="Добавлено" body={`${product.name} в корзине`} />} 
   
<Tabs style={{textAlign: "start"}}>
    <TabList>
      <Tab style={{border:"transparent",backgroundColor:"transparent", color:"white"}}>Описание</Tab>
      <Tab style={{border:"transparent",backgroundColor:"transparent", color:"white"}}>Доставка</Tab>
      <Tab style={{border:"transparent",backgroundColor:"transparent", color:"white"}}>Возврат</Tab>
    </TabList>

    <TabPanel>
      <p>{product.description}</p>

      
    </TabPanel>
    <TabPanel >
      
      <p>Наш бутик сотрудничает с GoToDoor, который гарантирует, что вы получите самую безопасную и эффективную доставку, включая доставку в субботу и в ночное время. Большинство курьеров, которых мы используем, доставляют в течение ночи по всей стране, ура! Все клиенты, совершившие онлайн-транзакцию на сумму более 200 долларов, получают БЕСПЛАТНУЮ доставку! Мы взимаем фиксированную ставку в размере 6 долларов США за упаковку (на основе средних расчетов) за любую покупку одежды, независимо от того, совершается ли она на ночь, в субботу или в сельской местности. К вашему сведению, сельские посылки могут стоить около 15 долларов, поэтому наша цель — сделать их доступными для всех. За любую покупку ювелирных изделий или аксессуаров (солнцезащитных очков, часов и т. д.) взимается плата в размере 4 долларов США. Доставка в Австралию взимается плата за доставку в размере 10 долларов США. 5-15 рабочих дней (исключая праздничные дни) без отслеживания. Если вы хотите получить расценки на отслеживание, напишите нам. Международный взимается плата за доставку в размере 20 долларов США. 5-15 рабочих дней без отслеживания. Если вы хотите получить расценки на отслеживание, напишите нам.</p>
    </TabPanel>
    <TabPanel>
    <p>Не переживайте, мы хотим сделать это проще! Следуйте приведенным ниже условиям, и вы сможете вернуть нам свой товар для обмена или возврата денег. Напишите нам по адресу takecontrole@mail.com или позвоните нам по телефону +64 (6) 378 8924, чтобы сообщить нам, что вы что-то возвращаете. Вы должны вернуть товар в течение 7 рабочих дней (по всей стране) и 10 дней (по всему миру) с момента его получения. Мы рекомендуем отслеживать ваш возврат, чтобы исключить риск его потери. Мы не сможем обработать ваш возврат, если не получим его. Вы знаете, что все теги прикреплены, включая квитанцию ​​​​и контактные данные, и товар должен быть в совершенно новом, неношеном состоянии. Если возмещение будет произведено, вы будете возвращены с помощью вашего первоначального метода оплаты или на указанный банковский счет после утверждения вашего возврата. Аспекты доставки вашего заказа не подлежат возврату. Возврат курьерских сборов также осуществляется за счет клиента. Из-за гигиенических соображений мы не можем принять возврат ювелирных изделий, нижнего белья или очков в связи с изменением мнения - эти условия также передаются нам поставщиком, и мы не можем вернуть им эти предметы, если они не неисправны. Товары со скидкой не подлежат возврату, все транзакции по продаже являются окончательными и не могут быть приняты.</p>
    
     
    </TabPanel>
  </Tabs>
    </Info>
  </Container>  
                <LinkContainer to="/">
                          <div> 
                          <p style={{ fontSize:"20px", margin:"50px"}}><span><ArrowLeft/></span>Вернуться обратно</p>
                          </div>
                        </LinkContainer>
           
            
                <h2>Вам может так-же понравиться</h2>
                
                <AliceCarousel
        mouseTracking
        items={similarProducts}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        disableButtonsControls
        infinite
    />
           
        </div>
    );
}
export default ProductPage;