export default function GroceryCard({ GroceryData }) {
    return ( 
        <div className="flex-none">
           <a href={GroceryData?.action?.link}>
               <img 
                   className="h-40 w-50 object-cover" 
                   src={`https://media-assets.swiggy.com/swiggy/image/upload/${GroceryData?.imageId}`}
                   alt="Grocery Image"
               />
           </a>
           <h2>{GroceryData?.action?.text}</h2>
        </div>
    );
}
