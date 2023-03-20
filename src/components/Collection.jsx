import react from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";
const Collect = styled.div`
  background-color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  ${mobile({ padding:"0px",flexDirection:"column" })}
  
  `;
const Left = styled.div`

width:30%;
height: 100px;
font-size: 14px;
padding-right: 50px;
position: relative;
top: -150px;
 ${mobile({ display:"none" })}
`; 
const Bottom = styled.div`
display:none;
 ${mobile({ display:"block", })}



`; 
const Button = styled.button`
font-size: 20px;
border: 1px solid black;
background-color: black;
color: white;
width: 180px;
height: 50px;

`; 

const Right = styled.div`
margin-top: 100px;
margin-bottom: 100px;
right: 30px;
width:60%;
height: 800px;
  background: url("./images/collections.jpg")
      center;
  background-size: cover;
 // ${mobile({ width:"100%" })}
`; 
const Collection = () => {
  return (
     <Collect>
    <Left> 
    <p>Мы любим все наши красивые бренды здесь, в Valentino, но есть бренды, которые занимают особое место в нашем сердце. Мы упростили для вас поиск информации о каждом из этих удивительных брендов. Перейдите на нашу страницу Heartgrown, где мы дадим вам небольшое представление о том, что делает каждый из этих брендов таким особенным.</p>
    <Button>Узнать больше</Button>
    </Left>
    
    <Right> </Right>
    <Bottom> 
    <p>Мы любим все наши красивые бренды здесь, в Valentino, но есть бренды, которые занимают особое место в нашем сердце. Мы упростили для вас поиск информации о каждом из этих удивительных брендов. Перейдите на нашу страницу Heartgrown, где мы дадим вам небольшое представление о том, что делает каждый из этих брендов таким особенным.</p>
    <Button>
    <Link style={{textDecoration:"none", color:"white"}} to="/brandsDescription">
    Узнать больше 
    </Link>
    </Button>
    </Bottom>
     </Collect>
  )
}

export default Collection;