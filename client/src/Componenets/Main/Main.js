import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

function Main() {
  const [textField, setTextField] = useState("");
  const [data, setData] = useState({});

  const getMessages = async () => {
    setData({ message: "Hello there! How can I assist you today?" });
    // const options = {
    //   method: "POST",
    //   body: JSON.stringify({ message: textField }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // try {
    //   const response = await fetch(
    //     `http://localhost:3001/completions`,
    //     options
    //   );
    //   const data = await response.json();
    //   console.log(data);
    //   console.log(`textField: `, textField);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();
    getMessages();
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={textField}
                onChange={(e) => {
                  setTextField(e.target.value);
                }}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{data.message}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
