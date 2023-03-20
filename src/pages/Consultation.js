import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useConsultationMutation } from "../services/appApi";

function Consultation() {
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [consultation, { error, isLoading, isError , isSuccess}] = useConsultationMutation();

    function handleConsultation(e) {
        e.preventDefault();
        consultation({ number, name, message});
    }

    return (
        <Container style={{backgroundColor:"#0c101b",color:"#e0e0e0", height:"100vh"}}>
            <Row>
                <Col md={12} className="signup__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleConsultation}>
                        <h1>Запишитесь на консультацию</h1>
                                                {isSuccess && <Alert variant="success">Заявка отправлена! Обычно мы отвечаем в течении одного рабочего часа.</Alert>}
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control 
                            style={{backgroundColor: "#1F2A40", border:"none", borderBottom:"1px solid #e0e0e0"}} type="text" placeholder="Ваше имя" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control style={{backgroundColor: "#1F2A40", border:"none", borderBottom:"1px solid #e0e0e0"}} type="text" placeholder="Ваш номер" value={number} required onChange={(e) => setNumber(e.target.value)} />
                        </Form.Group>

                        

                        <Form.Group className="mb-3">
                            <Form.Label>Примечания</Form.Label>
                            <Form.Control style={{backgroundColor: "#1F2A40", border:"none", borderBottom:"1px solid #e0e0e0"}} placeholder="Сообщение специалисту" value={message} required onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button style={{backgroundColor: "#4cceac", border:"none" }}type="submit" disabled={isLoading || isSuccess}>
                                Отправить
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                 </Row>
        </Container>
    );
}

export default Consultation;
