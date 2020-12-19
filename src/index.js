import React from "react";
import ReactDOM from "react-dom";

import {
  Button,
  Row,
  Col,
  Container,
  Alert,
  Tabs,
  Tab,
  Navbar,
  Nav,
  NavDropdown,
  Breadcrumb
} from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import SearchTab from "./components/SearchTab";
//import BotTab from "./components/BotTab";
import { assetsJson, userJson, relatedAssetsJson } from "./data/data";

export default function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          <img
            src="https://logosvector.net/wp-content/uploads/2013/07/3d-vector-logo.png"
            width="30"
            height="30"
            alt=""
          />
          SGGame Asset Center
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Links</Nav.Link>
            <NavDropdown title="Assets" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Unity</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">3D Models</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Animations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container style={{ marginTop: "55px" }}>
        <SearchTab assets={assetsJson} relatedAssets={relatedAssetsJson} />
      </Container>
      <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" title="Search"></Tab>
        {/* <Tab eventKey="profile" title="Profile"> */}
        {/* <Tab eventKey="bot" title="Bot">
          <BotTab workOrderJson={workOrderJson} userJson={userJson} />
        </Tab> */}
      </Tabs>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
