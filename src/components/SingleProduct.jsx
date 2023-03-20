import axios from "../axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import SimilarProduct from "./SimilarProduct";
import {mobile} from "../responsive";
import { useAddToCartMutation } from "../services/appApi";
import {Link} from "react-router-dom"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
  display: flex;
 //${mobile({ flexDirection: "column" })} 
`;
const Filter = styled.div`

padding-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FilterColor = styled.div`

margin: 5px;
border: 2px solid #fcf5f5;
  width: 40px;
  height: 40px;
  border-radius: 50%;
   display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
`;
const Color = styled.div`


  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  
  
`;
const MobileImageContainer = styled.div`
  display: none;
${mobile({ 
  flex: "1",
  margin: "5px",
  minWidth: "280px",
  height: "550px",
  display: "flex",
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
  
const Pagination = styled.div`
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
function SingleProduct() {
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    const [product, setProduct] = useState(null);
    
    const handleDragStart = (e) => e.preventDefault();
    useEffect(() => {
        axios.get("/products/63f49f1046b4f73ba37a44ce").then(({ data }) => {
            setProduct(data.product);
            
        });
    }, [id]);
if(!product) 
  return (
    <Loading/>)

    
    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5 },
    };

    const images = product.pictures.map((picture) => <img className="product__carousel--image" src={picture.url} onDragStart={handleDragStart} />);

    

    return (
<Container>


  <Pagination>
  {product.pictures.map((picture) => 
  <HashLink  smooth to={`#${picture.public_id}`} >  <img id="testjump" style={{width:"100px", margin:"5px"}} src={picture.url}/> </HashLink>
  )}
 
  </Pagination>
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
    <Filter>
    <h1>{product.name} // чёрная</h1>
     <p>
       Новое поступление
                    </p>
    <p>{product.price} рублей</p>
    <FilterColor>
    <Color></Color>
    </FilterColor>
    </Filter>
     <Link to={`/product/${product._id}`}>
          
     <Button >
         Перейти к покупке     </Button> 
          </Link>
   
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
    );
}

export default SingleProduct;
