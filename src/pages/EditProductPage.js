import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateProductMutation } from "../services/appApi";
import axios from "../axios";
import "./NewProduct.css";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useLocation } from "react-router-dom";
import Chart from "../components/chart/Chart";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { productData } from "../dummyData";
const Form = styled.form`
background-color: #0c101b;
  width: 100%;
  height: 100%;
  color: #e0e0e0;
`;
const Input = styled.input`
  flex: 1;
  width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: #1F2A40;
  color: #e0e0e0;
`;
const Select = styled.select`
margin: 20px 10px 0px 0px;
  padding: 10px;
background:white;
width:80%;
  background-color: #1F2A40;
  color: #e0e0e0;
`;
const Button = styled.button`
  width: 200px;
  border: none;
  margin-top: 20px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Option = styled.option``;
function EditProductPage() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [brend, setBrend] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const navigate = useNavigate();
    const [updateProduct, { isError, error, isLoading, isSuccess }] = useUpdateProductMutation();
    const [pStats, setPStats] = useState([]);
  const [userStats, setUserStats] = useState([]);
const MONTHS = useMemo(
    () => [
         "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    []
  );
useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`orders/income?pid=${id}` );
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [id, MONTHS]);


    useEffect(() => {
        axios
            .get("/products/" + id)
            .then(({ data }) => {
                const product = data.product;
                setName(product.name);
                setDescription(product.description);
                setCategory(product.category);
                setImages(product.pictures);
                setPrice(product.price);
                setBrend(product.brend);
                setSize(product.size);
                setColor(product.color);
            })
            .catch((e) => console.log(e));
    }, [id]);

    function handleRemoveImg(imgObj) {
        setImgToRemove(imgObj.public_id);
        axios
            .delete(`/images/${imgObj.public_id}/`)
            .then((res) => {
                setImgToRemove(null);
                setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
            })
            .catch((e) => console.log(e));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !description || !price || !category || !images.length) {
            return alert("Please fill out all the fields");
        }
        updateProduct({ id, name, description, price, brend, category, size, color, images }).then(({ data }) => {
            if (data.length > 0) {
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        });
    }

    function showWidget() {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "your-cloudname",
                uploadPreset: "your-preset",
            },
            (error, result) => {
                if (!error && result.event === "success") {
                    setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
                }
            }
        );
        widget.open();
    }

    return (
   
                    <Form onSubmit={handleSubmit}>
                        <h1 className="mt-4">Редактируйте</h1>
                        {isSuccess && <Alert variant="success">Успешно</Alert>}
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        
                            
                         <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Эффективность продаж" />
            <Chart data={productData} dataKey="Sales" title="Пример" />
        </div>
         
                        
                        <Input
          type="text" placeholder="введите имя" value={name} required onChange={(e) => setName(e.target.value)}
        />

                            
                        <Input as="textarea" placeholder="описание" style={{ height: "100px" }} value={description} required onChange={(e) => setDescription(e.target.value)}/>

                        
                                      <Input type="number" placeholder="цена" value={price} required onChange={(e) => setPrice(e.target.value)} />
                        
                                                  
                                 <Select onChange={(e) => setBrend(e.target.value)}>
           <Option disabled selected>
                                    -- бренд --
                                </Option>
                                <Option value="Contra la contra">Contra la contra</Option>
                                <Option value="Lik">Lik</Option>
                                <Option value="Beastie girls">Beastie girls</Option>
                                <Option value="Bad brains">Bad brains</Option>
                                <Option value="Cross">Cross</Option>
                                <Option value="Acrostix">Acrostix</Option>
          </Select>
                                 <Select onChange={(e) => setCategory(e.target.value)}>
           <Option disabled selected>
                                    -- категория --
                                </Option>
                                <Option value="Клуб украденных невест">Клуб украденных невест</Option>
                                <Option value="Новые поступления">Новые поступления</Option>
                                <Option value="Распродажа">Распродажа</Option>
                                <Option value="Тренд">Тренд</Option>
                                <Option value="Осенняя коллекция">Осенняя коллекция</Option>
                                
          </Select>

                     
                        
               <Select onChange={(e) => setSize(e.target.value)}>
  
                                <Option disabled selected>
                                    -- размер —
                                </Option>
                                <Option value="XS">XS</Option>
                                <Option value="S">S</Option>
                                <Option value="M">M</Option>
                                <Option value="L">L</Option>
                                <Option value="XL">XL</Option>
                                
                         </Select>     
                
               <Select  onChange={(e) => setColor(e.target.value)}>

                                <Option disabled selected>
                                    -- цвет —
                                </Option>
                                <Option value="чёрный">чёрный</Option>
                                <Option value="белый">белый</Option>
                                <Option value="коричневый">коричневый</Option>
                                <Option value="синий">синий</Option>
                                <Option value="красный">красный</Option>
                                <Option value="розовый">розовый</Option>
                                
                        </Select>
                         
                        
                
                        
                        
                        
                            <Button type="button" onClick={showWidget}>
                                Загрузить изображения
                            </Button>
                            <div className="images-preview-container">
                                {images.map((image) => (
                                    <div className="image-preview">
                                        <img src={image.url} />
                                        {imgToRemove != image.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                    </div>
                                ))}
                            </div>
                        

                       
                            <Button type="submit" disabled={isLoading || isSuccess}>
                                Обновить
                            </Button>
                       
                    </Form>
                
    );
}

export default EditProductPage;
