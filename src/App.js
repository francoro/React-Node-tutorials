import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Content from './components/Content'


function App() {
  return (
    <React.Fragment>
      <Header />
        <Content />
    </React.Fragment>
  );
}

export default App;
