
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
background-color: #C9ADA7;

font-weight: 100;
color:gray;
  
  margin: 5px;
  min-width: 280px;
  width: 400px;
  height: 790px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  position: relative;
 padding-bottom: 100px;
 overflow: hidden;
  &:hover ${Info}{
    opacity: 1;
  }
  ${mobile({ height: "630px",})}
`;

const Expl = styled.div`
color: #fcf5f5;
position: absolute;
flex-direction: column;
bottom: 70px;
font-size: 14px;

text-align: center;
align-items: center;
justify-content: center;

`; 
const Top = styled.div`
height: 50px;
padding-bottom: 30px;
`; 



const Size = styled.div`
position: absolute;
bottom: 10px;
`; 
const Span = styled.span`
color: #fcf5f5;
border: 1px solid #fcf5f5;
padding: 5px;
margin: 5px;
width: 20px;

`; 

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({ item }) => {
  const images = item.pictures.map((picture) => <img className="product__carousel--image" src={picture.url}  />);
  return (
    <Container >
         <AliceCarousel mouseTracking 
     autoPlay={true}
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        disableDotsControls
        disableButtonsControls
        touchTracking={false}
     items={images}
                      infinite 
                     controlsStrategy="alternate" />
      
    
      
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        
      </Info>
      <Expl className="product-information">
    <Top>
      <p style={{fontWeight:"600",fontSize:"18px",margin:"0"}} >{item.name} // {item.color}</p>
      <p style={{fontWeight:"400",margin:"0"}} >{item.brend}</p>
      <p style={{fontWeight:"400",margin:"0"}}>{item.price} ₽</p>
    </Top>
      
      </Expl>
     { item.size.map((s) =>
      <Size>
      <Span>{s}</Span>
      </Size>
      )}
    </Container>
  );
};

export default Product;
