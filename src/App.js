import React from 'react';
import Alerts from './Alerts.js';
import { Navbar, Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="app">
      <Container fluid>
        <>
          <Navbar className="bg-light justify-content-between">
            <Navbar.Brand href="#home">
              <img
                src="https://i.postimg.cc/jqccGZJH/epiroc.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Epiroc Agent)</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </>
        <h3>Alerts App</h3>
        <Alerts name='epiroc agent'/>
      </Container>
    </div>
  );
};

export default App;
