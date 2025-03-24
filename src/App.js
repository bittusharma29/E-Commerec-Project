import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cart from './Pages/cart'; // Updated import statement
import ProductDetails from './Pages/ProductDetails';
import SignIn from './Components/SignIn';


const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setselectedCountry] = useState('');
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  
  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, []);
  
  const getCountry = async (url) => {
     await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  
  const values = {
    countryList, setselectedCountry, selectCountry, isHeaderFooterShow, setIsHeaderFooterShow
  };
  
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="/product/:id" element={<ProductDetails />} />
          <Route exact={true} path='/SignIn' element={<SignIn />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
