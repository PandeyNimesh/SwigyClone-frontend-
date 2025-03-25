import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import FoodOption from "./component/FoodOption";
import GroceryOption from "./component/GroceryOption";
import DineOption from "./component/DineOption";
import Restaurant from "./component/Restaurant";
import Home from "./component/Home";
import { BrowserRouter,Routes,Route } from "react-router";



// Header section: Let's build it

function App(){
    
    return(
       <>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/restaurent" element={<Restaurant></Restaurant>}></Route>
    </Routes>
     </BrowserRouter>
   
       
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://cors-anywhere.herokuapp.com/"; 


