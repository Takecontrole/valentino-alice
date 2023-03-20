import { Link } from "react-router-dom"
import React from "react";


function Collectionsmenu({collectionsOpen, setCollectionsOpen}) {
 

    return (
       <div className="menu" >
      <ul >
        <li 
        onClick={()=>setCollectionsOpen(false)}>
             <Link to="/products/Клуб украденных невест"  style={{color:"white",textDecoration: 'none' }}> Клуб украденных невест
             </Link>
        </li>
        <li 
           onClick={()=>setCollectionsOpen(false)}>
      <Link to="/products/Новые поступления"  style={{color:"white",textDecoration: 'none' }}>
          Новые поступления
          </Link>
        </li>
      
        <li onClick={()=>setCollectionsOpen(false)}>
        <Link to="/products/Скоро в продаже"  style={{color:"white",textDecoration: 'none' }}>
          Скоро в продаже
          </Link>
        </li>
        <li onClick={()=>setCollectionsOpen(false)}>
        <Link to="/products/Распродажа"  style={{color:"white",textDecoration: 'none' }}>
          Распродажа
          </Link>
        </li>
        <li 
           onClick={()=>setCollectionsOpen(false)}>
     <Link to="/products/Тренд"  style={{color:"white",textDecoration: 'none' }}>
          В тренде
          </Link>
        </li>
       
      </ul>
    </div>
  );
}
    

export default Collectionsmenu;
