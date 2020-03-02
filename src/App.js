import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
       hola
      </Container>
    </div>
  );
}

export default App;
