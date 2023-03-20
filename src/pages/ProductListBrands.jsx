import styled from "styled-components";
import "./CategoryPage.css"
import Announcement from "../components/Announcement";
import ProductsBrands from "../components/ProductsBrands";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Container = styled.div`
background-color: #C9ADA7;
`;

const Title = styled.h1`
  
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fcf5f5;
background-color: #C9ADA7;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
color: #fcf5f5;
background-color: #C9ADA7;
border: 2px solid #fcf5f5;
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductListBrands = () => {
    const { brend } = useParams();
    
  
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
     
                

      <Title><div className="cat-page-container">
        <div className="header">
       
            <img src={`./images/${brend}.jpg`} className="images"/>
                <h1 className="text">{brend.charAt(0).toUpperCase() + brend.slice(1)}</h1>
          </div>
            </div></Title>
      
      <FilterContainer>
        <Filter>
          <FilterText>Фильтр товаров:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Цвет
            </Option>
            <Option>белый</Option>
            <Option>чёрный</Option>
            <Option>красный</Option>
            <Option>синий</Option>
            <Option>оранжевый</Option>
            <Option>коричневый</Option>
            <Option>розовый</Option>
            <Option>пятнистый</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Размер
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Сортировать:</FilterText>
         <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">новые</Option>
            <Option value="asc">Цена (увл)</Option>
            <Option value="desc">Цена (умен)</Option>
             </Select>
        </Filter>
      </FilterContainer>
       <ProductsBrands brend={brend}  filters={filters} sort={sort} />
       
      <Newsletter />
      <Footer />
    
    </Container>
    
    
  );
};

export default ProductListBrands;
