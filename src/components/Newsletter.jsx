import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 200px;
  background-color: #C9ADA7;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
`;
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 18px;
  margin-right: 40px;
  margin-left: 40px;
  font-weight: 300;
  margin-bottom: 20px;
   ${mobile({fontSize:"12px",  textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #C9ADA7;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
background-color: #C9ADA7;
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #C9ADA7;
  color: white;
`;
// join us. We will let you know when we have new arrivals, events and promo's don't worry we send them infrequently, just a friendly hi now and again!
const Newsletter = () => {
  return (
    <Container>
      <Title className="info">Присоединяйся к нам!</Title>
      <Desc className="info">Мы сообщим вам, когда у нас появятся новые поступления, события и акции, не волнуйтесь, мы присылаем их нечасто, просто дружеский привет время от времени!</Desc>
      <InputContainer>
        <Input placeholder="Ваш email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
