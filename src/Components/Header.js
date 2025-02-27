



function Header(){

    return(
        <>
      
      <header className="bg-[#ff5200] font-serif">
        <div className="flex justify-between container mx-auto py-8">
  <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
  <div className="font-serif text-white text-base font-bold flex gap-15 items-center">
    <a target="_blank"href="https://www.swiggy.com/corporate/">Swigy Corporate</a>
    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
    <a className="border border-white py-3 px-4"target="_blank" href="https://www.swiggy.com/corporate/">Get app</a>
    <a className="border border-white py-3 px-4 bg-black" target="_blank" href="">Sign in</a>
  </div>
        </div>

        <div className="pt-16 pb-8 relativ" >
            <img className="h-110 w-60 absolute top-8 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            <img className="h-110 w-60 absolute top-7 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            <div className="text-5xl text-white max-w-[60%] container mx-auto text-center">
                Order food & groceries.Discover best restaurent
            </div>
            <div className="max-w-[70%] container mx-auto text-base  mt-10">
<input className="bg-white w-[40%] gap-5 px-6 py-4 rounded-2xl" placeholder="Delhi,India"></input>
<input className="bg-white w-[40%] gap-5 px-6 py-4 rounded-2xl" placeholder="Search for reasturant"></input>
            </div>
        </div>

        <div className="max-w-[80%] container mx-auto flex">
   <a href="https://www.swiggy.com/restaurants"> 
     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png">
     </img>
     </a>
     <a href="https://www.swiggy.com/dineout"> 
     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png">
     </img>
     </a>
     <a href="https://www.swiggy.com/genie"> 
     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png">
     </img>
     </a>
    
        </div>
      </header>
        </>
    )
}

export default Header;