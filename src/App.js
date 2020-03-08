import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'


function App() {
  return (
    <React.Fragment>
      <Header />
        <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
