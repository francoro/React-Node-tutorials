import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Content from './components/Content'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { SignUp }  from './components/SignUp'
import { Login }  from './components/Login'
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
          <Route path="/" exact component={Content} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
        </BrowserRouter>
    </Provider>
    </React.Fragment>
  );
}

export default App;
