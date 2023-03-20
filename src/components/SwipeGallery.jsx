/*
import axios from "../axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/scrollbar";
import {Pagination, FreeMode, Scrollbar } from "swiper";

const SwipeGallery = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    
  useEffect(() => {
        axios.get("/products/").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    
const handleDragStart = (e) => e.preventDefault();


  return (
    <Swiper 
  
    
    freeMode={true}
    scrollbar={{hide: true}}
    modules={[Scrollbar]}
      spaceBetween={50}
      slidesPerView={1.5}
      breakpoints={{
        "@0.00": {
         spaceBetween:50,
         slidesPerView:1.5,
        },
        "@0.75": {
         spaceBetween:50,
         slidesPerView:2.5,
        },
        "@1.00": {
         spaceBetween:50,
         slidesPerView:3.5,
        },
        "@1.5": {
         spaceBetween:50,
         slidesPerView:4.5,
        },
      }}
        
      pagination={{
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '"><img class="pagination-bullet"/></span>'
        },
        }}
        
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {products.map((product, idx) => (
      <SwiperSlide> 
        <div className="item" data-value={idx}>
          <ProductPreview {...product} />
            </div> 
            </SwiperSlide>
                    ))}
    </Swiper>
    );
}

export default SwipeGallery;


home    
<Swiper 
  
    
    freeMode={true}
    scrollbar={{hide: true}}
    modules={[Scrollbar]}
      spaceBetween={50}
      slidesPerView={1.5}
      breakpoints={{
        "@0.00": {
         spaceBetween:50,
         slidesPerView:1.5,
        },
        "@0.75": {
         spaceBetween:50,
         slidesPerView:2.5,
        },
        "@1.00": {
         spaceBetween:50,
         slidesPerView:3.5,
        },
        "@1.5": {
         spaceBetween:50,
         slidesPerView:4.5,
        },
      }}
        
      pagination={{
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '"><img class="pagination-bullet"/></span>'
        },
        }}
        
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {products.map((product, idx) => (
      <SwiperSlide> 
        <div className="item" data-value={idx}>
          <ProductPreview {...product} />
            </div> 
            </SwiperSlide>
                    ))}
    </Swiper>
    
    
    product page 
    
    
                  
                  <Swiper 
  style={{zIndex:0}}
    
    freeMode={true}
    scrollbar={{hide: true}}
    modules={[Scrollbar]}
      spaceBetween={50}
      slidesPerView={1.5}
      breakpoints={{
        "@0.00": {
         spaceBetween:50,
         slidesPerView:1.5,
        },
        "@0.75": {
         spaceBetween:50,
         slidesPerView:2.5,
        },
        "@1.00": {
         spaceBetween:50,
         slidesPerView:3.5,
        },
        "@1.5": {
         spaceBetween:50,
         slidesPerView:4.5,
        },
      }}
        
      pagination={{
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '"><img class="pagination-bullet"/></span>'
        },
        }}
        
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   {similar.map((product, idx) => (
      <SwiperSlide> 
        
            <div className="item" data-value={idx}>
                <ProductPreview {...product} />
            </div>
            </SwiperSlide>
                    ))}
    </Swiper>
    */