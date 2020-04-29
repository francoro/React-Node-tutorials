import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Content from './components/Content'
import { MyAnimals } from './components/MyAnimals'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Login } from './components/Login'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from '../src/store/reducer'
const store = configureStore({
  reducer: rootReducer,
})
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Content />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/my-animals">
              <MyAnimals />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
