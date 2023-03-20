import React from "react";
import { Badge, Card } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

function SimilarProduct({ _id, name, category, price, pictures }) {
    return (
        <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "13rem", margin: "10px" }}>
             <Card style={{ justifyContent:"center",alignItems:"center",textAlign:"center",width: "20rem", margin: "10px" }}>
                <Card.Img variant="top" className="product-preview-img" src={pictures[0].url} style={{ height: "70%",width:"70%", objectFit: "cover" }} />
                <Card.Body style={{ width:"11rem"}}>
                    <h6 style={{ fontSize:"12px"}} className="card-title">{name}</h6>
                    <Card.Title style={{ fontSize:"12px"}}>{price}</Card.Title>
                   
                </Card.Body>
            </Card>
        </LinkContainer>
    );
}

export default SimilarProduct;
