import React from "react";
import Berlin from "./img/berlin.png";
import Usa from "./img/usa.png";
import Paris from "./img/paris.png";
export default class City extends React.Component{
    render(){
        return(
               <>
                   <div className="flex mt-5 gap-10">
                        <div className="">
                            <img src={Paris} className="w-32 h-44 object-cover rounded-xl" />
                            <p className="mt-2 text-sm font-medium text-center">Paris,France</p>
                        </div>
                        <div className="">
                            <img src={Berlin} className="w-32 h-44 object-cover rounded-xl" />
                            <p className="mt-2 text-sm font-medium text-center">Berlin,Germany</p>
                        </div>
                        <div className="">
                            <img src={Usa} className="w-32 h-44 object-cover rounded-xl" />
                            <p className="mt-2 text-sm font-medium text-center">New York,USA</p>
                        </div>
                        <div className="border w-32 h-44 object-cover rounded-xl border-[#9fa5b8] shadow-sm">
                            <p className="text-2xl font-bold text-[#9fa5b8] text-center mt-14">+</p>
                            <h4 className="text-md  font-medium text-[#9fa5b8] text-center mt-2">Add City</h4>
                        </div>
                   </div>
               </>
        );
    }
}
