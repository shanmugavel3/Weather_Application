import React, { useEffect, useState } from "react";
import axios from 'axios';

export default  function Api_call(){
    const [data ,setData] = useState([]);
    useEffect(()=>{
        var store_data = 'chennai';
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${store_data}&appid=d8d2a88a1dcdbb3d43f43c850f1c561b`)
        .then(res=> console.log(setData(res.data)))
        .catch((error) =>console.log("Error", error));
    },[])

  for( let x in  data){
    var sun_set =data.sys.sunset;
  }



}

