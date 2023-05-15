import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

function Main() {
  const [textField, setTextField] = useState();
  const [data, setData] = useState();

  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`textField: `, textField);
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
                  console.log(`textField: `, textField);
                }}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{data}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
