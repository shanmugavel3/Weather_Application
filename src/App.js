import React, { useState } from "react";
// import logo from './logo.svg';
import Image from  "./img/search_icon.png";
// import { all } from "axios";
// import Rightside_content from './Rightside_content';
import './App.css';

import City from "./City";
import Weather from "./Weather_Tab";
import Weather_Table from "./Weather_Table";
// import Background from "./img/background_imageCloud.png";
import Header  from './Rightside_content';
import './Background_image.css';
import ApexChart from './Apex_Chart';
import Api_call from './Api_call';


function App() {

    
  var [name ,setName]=  useState("");
  var mysearch  = (event) =>{
      event.preventDefault();
      var city = document.getElementById("search_city").value;
       setName(city);

  }
  

return(
   <>
      {/* left side content..... */}
    <div className='lg:flex grid  font_style '>
      <div className=' bg-[#f2fbff] p-12  w-full'>
      <>
            {/* <Rightside_content  value={name}/> */}
            <div className="flex items-center gap-8 ">

                <div class="pt-2 relative  text-gray-600">
                    <form id="search_form">
                    <input className="border-2 border-white bg-white h-10 px-5 pr-16 rounded-lg text-sm  shadow-md"
                    type="search" name="search" id="search_city" placeholder="Search Your Place" />
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4" id="search_button" onClick={mysearch}>
                    <img src={Image} className="w-4 h-4"/>
                    </button>
                    </form>
                </div>
                
                <div className="mt-3  border-[#f2fbff]">
                    <select className="h-10 bg-[#f2fbff] text-center outline-none text-md font-light">
                        <option>All Places</option>
                    </select>
                </div>
                
            </div>
            
            <div className="mt-10">
                <h1 className="text-3xl font-light ">Weather<span className="font-bold text-[#151f52] outline-[#f6f6f6]">ForeCast</span></h1>
            </div>

      </>
        <City />
        <Weather/>
        <Weather_Table/>
   
      </div>
      {/* Right side Content........ */}
      <div className='background_image ' id="background_image">
        <Header value={name} />
        < ApexChart  className=""/>
        <Api_call />
      </div>

    </div>
   </>
  );
}

export default App;
