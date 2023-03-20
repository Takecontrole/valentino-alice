
import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
font-family: 'Roboto', sans-serif;
font-weight: 100;
color:gray;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  width: 280px;
  height: 550px;
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
const Image = styled.img`
height: 75%;

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
function ProductPreview({ _id, category, name, color, price, brend, size, pictures }) {
  
    
  

  
    return (
        <Container >
      <Image src={pictures[0].url}/>
             
     
       
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${_id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        
      </Info>
      <Expl className="product-information">
    <Top>
      <p style={{fontWeight:"600",fontSize:"18px",margin:"0"}} >{name} // {color}</p>
      <p style={{fontWeight:"400",margin:"0"}} >{brend}</p>
      <p style={{fontWeight:"400",margin:"0"}}>{price} ₽</p>
    </Top>
      
      </Expl>
     { size.map((s) =>
      <Size>
      <Span>{s}</Span>
      </Size>
      )}
    </Container>
    );
}

export default ProductPreview;
