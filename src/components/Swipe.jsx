

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import styled from "styled-components";
import ProductImagesSlider from './product-images-slider';
import { productImages } from '../assets'


  
function Swipe() {
  return (
    
    <div style={{
    width: '100%',
     position: 'relative',
      height: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     overflow: 'hidden',
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        
        padding: '20px'
      }}>
        <ProductImagesSlider images={productImages} />
      </div>
    </div>
     
  );
}

export default Swipe;
