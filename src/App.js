import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './fonts/Geomanist-Regular.otf'
import { Header } from './components/Header'
import Content from './components/Content'
import { MyAnimals } from './components/MyAnimals'
import { NewAnimal } from './components/NewAnimal'
import { Switch, BrowserRouter } from 'react-router-dom'
import { Login } from './components/Login'
//import { Provider } from 'react-redux'
// import { configureStore } from "@reduxjs/toolkit"
// import rootReducer from '../src/store/reducer'
import { AuthenticatedRoute } from './components/AuthenticatedRoute'
// const store = configureStore({
//   reducer: rootReducer,
// })
function App() {
  return (
    <React.Fragment>
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Header />
          <Switch>
            <AuthenticatedRoute path="/login">
              <Login />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/">
              <Content />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/my-animals">
              <MyAnimals />
            </AuthenticatedRoute>
            <AuthenticatedRoute path="/new-animal">
              <NewAnimal />
            </AuthenticatedRoute>
          </Switch>
        </BrowserRouter>
      {/* </Provider> */}
    </React.Fragment>
  );
}

export default App;
