import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: white;
  color: #C9ADA7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container className="Announcement">Экспресс курьер 500руб. Бессплатная доставка при заказе на сумму выше 10000руб! Особая упаковка для покупок от 5000р.</Container>;
};

export default Announcement;
