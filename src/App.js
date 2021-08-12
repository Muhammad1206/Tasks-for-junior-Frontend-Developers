import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import Table from './components/Tables/Table';
import './App.css';
import Sidebar from './components/Navbar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "./redux/Reducer/products-reducer";
import Loader from './components/Loader/Loader';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [])
  const productsData = useSelector(state => state.tablesPage);

  const routesData = productsData.products.map(item => <Route
    key={item.rid}
    path={`/${item.urlalias}`}
    render={() => <Table products={item.goods} id={item.rid} />}
  />);
 
  const loading = productsData.loading;

  return (
    <div className = "container">
    {loading ? 
    <Loader className = "loader"/> : 
    <div className="content">
      <div>
      <Sidebar productsData={productsData.products} />
      </div>
      <div>
        {routesData}
      </div>
    </div>}
    </div>
  );
}

export default App;
