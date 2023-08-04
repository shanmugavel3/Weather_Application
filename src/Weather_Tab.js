import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCircle } from '@fortawesome/free-solid-svg-icons'
import Dot from "./img/cloud.png";
import "./Tab_content.css";
import { useState } from "react";

export default  function  Weather() {
    
           const [toggleState, setToggleState] = useState(1);
            
           const  Weather_choose =  (index) => {   
            setToggleState(index);
        }
        
        return(
            <>
              <ul className="flex  gap-10 mt-10 cursor-pointer">
                <li className={toggleState === 1 ? "active_tab text-2xl":"text-2xl text-[#c7cfdd]"}onClick={()=>Weather_choose(1) }>Week
                   <img src={Dot} className= {toggleState === 1? "active_content " :"content"}/> 
                
                 </li>
                <li className={toggleState === 2 ? "active_tab text-2xl":"text-2xl text-[#c7cfdd]"} onClick={()=>Weather_choose(2) }>Month
                   <img src={Dot} className= {toggleState === 2? "active_content " :"content"} /> 
                
                </li>
                <li className={toggleState === 3 ? "active_tab text-2xl":"text-2xl text-[#c7cfdd]"} onClick={()=>Weather_choose(3) }>3 month
                   <img src={Dot} className= {toggleState === 3? "active_content" :"content"} /> 
                
                </li>
                <li className={toggleState === 4 ? "active_tab text-2xl":"text-2xl text-[#c7cfdd]"} onClick={()=>Weather_choose(4) }>6 month
                
                   <img src={Dot} className= {toggleState === 4? "active_content " :"content"} /> 
                </li>
              </ul>
            </>
        );
    
}