import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Main from "./Componenets/Main/Main";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          <h1>
            <p>ChatME-PT</p>
          </h1>
        </Col>
        <Row>
          <Col>
            <Main />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
