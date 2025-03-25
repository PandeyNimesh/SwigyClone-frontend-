import react from "react";
import Header from "./Header";
import FoodOption from "./FoodOption";      
import GroceryOption from "./GroceryOption";
import DineOption from "./DineOption";
function Home(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        </>
    )
}
export default Home;    