
import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../services/appApi";
import "./productList.css";
import Pagination from "../../components/Pagination";

export default function ViewProductList() {
  
    const products = useSelector((state) => state.products);
    const user = useSelector((state) => state.user);
    // removing the product
    const [deletProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
    function handleDeleteProduct(id) {
        // logic here
        if (window.confirm("Точно?")) deletProduct({ product_id: id, user_id: user._id });
    }

    function TableRow({ pictures, _id, name, price }) {
        return (
            <tr>
                <td>
                    <img src={pictures[0].url} className="dashboard-product-preview" />
                </td>
                <td>{_id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <button onClick={() => handleDeleteProduct(_id, user._id)} disabled={isLoading} className="productListDelete">
                        Удалить
                    </button>
                    <button className="productListEdit">
                    <Link style={{textDecoration:" none",color:"#e0e0e0"}}to={`/product/${_id}/edit`} >
                        Редакт.
                    </Link>
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <Table style={{backgroundColor: "#141b2d",color:"#e0e0e0"}} bordered hover responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>Товар ID</th>
                    <th>Название</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                <Pagination data={products} RenderComponent={TableRow} pageLimit={1} dataLimit={5} tablePagination={true} />
            </tbody>
        </Table>
    );
}


