import { Link } from "react-router-dom"
import React from "react";


function Brandsmenu({brandsOpen, setBrandsOpen}) {
 

    return (
       <div className="menu ">
      <ul>
        <li 
           onClick={()=>setBrandsOpen(false)}>
          <Link to="/products/brands/Contra la contra"  style={{color:"white",textDecoration: 'none' }}>
          Contra la contra </Link>
        </li>
      
        <li onClick={()=>setBrandsOpen(false)}>
          <Link to="/products/brands/Beastie girls"  style={{color:"white",textDecoration: 'none' }}>
          Beastie girls
          </Link>
        </li>
        <li onClick={()=>setBrandsOpen(false)}
            >
              <Link to="/products/brands/Bad brains"  style={{color:"white",textDecoration: 'none' }}>
          Bad brains
          </Link>
        </li>
        <li onClick={()=>setBrandsOpen(false)}>
          <Link to="/products/brands/Acrostix"  style={{color:"white",textDecoration: 'none' }}>
          Acrostix
          </Link>
        </li>
        <li 
        onClick={()=>setBrandsOpen(false)}>
        <Link to="/products/brands/CROSS"  style={{color:"white",textDecoration: 'none' }}>
          CROSS</Link>
        </li>
      </ul>
    </div>
  );
}
    

export default Brandsmenu;
