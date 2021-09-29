import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductList from "./containers/ProductList";
import Header from './containers/Header'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <CssBaseline/>
      <ProductList/>
    </React.Fragment>
  );
}

export default App;
