import react from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 30px;
  
  `;
const Brand = styled.div`
font-size: 35px;
padding-top: 10px;
padding-bottom: 30px;
`; 
const Brands = () => {
  return (
    <Container className="Brands">
    
    <Brand> 
     <h5>Наши бренды</h5>
    </Brand>
    <Brand> 
     <h1>Contra la Contra</h1>
    </Brand>
    <Brand> 
     <p className="Beastie">Beastie Girls</p>
      </Brand>
      <Brand> 
     <p className="brains">Bad Brains</p>
      </Brand>
      
      <Brand> 
     <p className="cross">CROSS</p>
      </Brand>

      <Brand> 
     <p >AcrostiX</p>
      </Brand>
        </Container>
    
  )
}

export default Brands;