import React from "react";
import Header from "./Component/Header";
import MyFooter from "./Component/Footer";
import Restaurant from "./Restaurants/Restaurant";
import SearchData from "./search/SearchData";


import { BrowserRouter, Routes, Route } from "react-router-dom";





const App = () => {
  return (
    <>


    <BrowserRouter>
     <Header/>
      <Routes>
       <Route path="/" element={<Restaurant/>}/>
       <Route path="/search" element={<SearchData/>}></Route>
      </Routes>
      <MyFooter/>
    </BrowserRouter>
    
 
    
     
      
    </>
  )
};

export default App;
