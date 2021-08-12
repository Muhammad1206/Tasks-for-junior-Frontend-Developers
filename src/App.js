import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import Table from './components/Tables/Table';
import './App.css';
import Sidebar from './components/Navbar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "./redux/Reducer/products-reducer";
import Outcome from './components/Outcome/Outcome';
import Loader from './components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [])
  const productsData = useSelector(state => state.tablesPage);
  const loading = productsData.loading;

  const routesData = productsData.products.map(item => <Route
    key={item.rid}
    path={`/${item.urlalias}`}
    render={() => <Table products={item.goods} id={item.rid} />}
  />);
  
  
  return (
    <div className="content">
      <div>
        {loading ? <Loader/> : <Sidebar productsData={productsData.products} />}
      </div>
      <div>
        {routesData}
      </div>
    </div>
  );
}

export default App;
