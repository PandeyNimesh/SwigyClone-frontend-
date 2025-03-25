import { GrocerGridCard } from "../Utils/GroceryData"
import GroceryCard from "./GroceryCard"
export default function GroceryOption(){
   
     return(

        <>
       <div className="mt-20 width-[80%] container mx-auto">

       <h1 className="text-2xl font-bold">Shop Grocery on Instamart</h1>
         <div className="wcontainer mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                {GrocerGridCard.map((GroceryData) => (
                    <GroceryCard key={GroceryData.id} GroceryData={GroceryData} />
                ))}
                </div>
       </div>
        
        </>
     )
}