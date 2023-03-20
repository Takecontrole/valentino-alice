import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
  background-color: #fcf5f5;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
color: black;
font-size: 24px;
font-weight: 500;
margin: 10px;
position: absolute;
text-align: center;
${mobile({ fontSize: "16px"})}

`;
const Desc = styled.div`
margin: 10px;
margin-left: 40px;
margin-right: 40px;
${mobile({ marginLeft: "0px",
marginRight: "0px"})}
`;
const Info = () => {
  return (
    <Container>
    
            <Title>
            
            <Desc className="short-massage">
            
            Привет, мы Valentino. Мы любим нашу планету. Мы также любим выглядеть хорошо и не понимаем почему кому-то приходится выбирать что-то одно.
           </Desc>
           <Desc className="short-massage">
           Вот почему мы используем только биоразлагающиеся и перерабатываемые материалы, чтобы сделать высококачественную и стильную одежду. Для вас и вашей планеты!
           </Desc>
          
            <Desc className="short-massage">
            1% процент от суммы покупки идёт в фонд поддержки экосистемы и спасения вымирающих видов.
            </Desc>
           
</Title>
    </Container>
    );
};
    export default Info;