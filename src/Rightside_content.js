import React, { useEffect, useState } from "react";
import User from "./img/user.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Rain from './img/rain.png';
// import ApexCharts from 'apexcharts';
// import Api_call from "./Api_call";
import axios from 'axios';

export default function Header(props) {
    const date = new Date();

    const options = {
        weekday: 'short', // Short weekday name (e.g., "Sat")
        day: 'numeric',   // Numeric day of the month (e.g., "3")
        month: 'short',   // Short month name (e.g., "Aug")
    };

    var formattedDate = date.toLocaleString('en-US', options);

    const [data, setData] = useState(null);
    

    var place = props.value;
    useEffect(() => {
        // console.log(place);
        if (place) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=3cf453d98288dd315c951ac461a63083
            `)
                .then(res => setData(res.data))
                .catch(error => console.log("Error", error));
        }
    }, [props.value]);

    for( let x in  data){
        console.log(data);
        var sun_set =data.sys.sunset;
        var feels_like = Math.round(data.main.feels_like);
        var name =  data.name;
        
        var country = data.sys.country;
        var Weather = data.weather;
        // var c_id = data.sys.id;
        var temperature = Math.round(data.main.temp);
        // var temperature = Math.trunc(data.main.temp);
        let fahrenheit = temperature; 
        let celsius = fahrenheit - 273.15;

        // var temp_c =Math.round(celsius);
        var temp_c =Math.trunc(celsius);

        Weather.forEach(val =>{
           
            // var status = val.main;
        })

        // var lat = data.coord.lat;
        // var lon = data.coord.lon;
        

     
     
        }

        var name1 = name == null  ? 'chennai' : name ;
        // console.log(name1);

        var country1 = country == null ? 'IN' :country;
        // console.log(country1);
         
       
       var feels_like1 = feels_like == null ? '316' :feels_like;

       var temp_c1 = temp_c == null ? '26': temp_c;

        const sunsetTimestamp = sun_set;
        const sunsetTime = new Date(sunsetTimestamp * 1000);
        const hours = sunsetTime.getHours().toString().padStart(2, '0');
        const minutes = sunsetTime.getMinutes().toString().padStart(2, '0');
        var sunsetTimeFormatted = `${hours}:${minutes}`;
        var sunsetTimeFormatted1 = sunsetTimeFormatted === 'NaN:NaN' ? '18:30': sunsetTimeFormatted;
        // var [lat_lon , setLonLOT] = useState(null);
        // console.log("vanthuta");
       
        //     useEffect(() => {
        //         if (lat && lon) {
        //             axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3cf453d98288dd315c951ac461a63083`)
        //                 .then(re => setLonLOT(re.data))
        //                 .catch(error => console.log("Error", error));
        //         }
        //     });
      
        // for( let y in lat_lon ){
        //     console.log(lat_lon);

        // }

            var headers = new Headers();
            headers.append("X-CSCAPI-KEY", "API_KEY");

            var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
            };

            fetch(`https://api.countrystatecity.in/v1/countries/${place}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        return(
            <>
                <div className="relative p-7">
                        <div className="flex items-center gap-24 text-sm font-light text-white mt-10 " >
                            <div className="flex items-center gap-20">
                                <div className="flex items-center gap-2 ">
                                <div className="">
                                    <h2>Notification</h2>
                                </div>
                                <div className="rounded-lg w-6 h-6 bg-[#f45564] text-center text-white">4</div>
                                </div>
                            <div className="">
                                  <p className="">Places</p>
                            </div>
                            </div>
                            <div className="">
                                <img src={User} alt="" className="w-12 h-12 rounded-lg  object-cover"/>
                            </div>

                        </div>
                    <div className="mt-16 ml-24 p-5 justify-center">
                      <div>
                        <div className="flex items-center gap-3">
                        <div className="">
                            <img src={Rain}  alt="" className="w-8 h-8"/>
                        </div>
                        <div className="">
                            <p className="text-md text-white text-xl">Today</p>
                        </div>
                        </div>
                          <div>
                            <p className="text-white font-thin text-sm">{formattedDate}</p>
                        </div>
                    </div>
                        <div className="flex mt-6">
                            <div className="">
                            <p className="text-8xl font-light text-white">{temp_c1}</p>
                            </div>
                            <div className="justify-self-center">
                            <span className="text-3xl font-light  text-white " >&#8451;</span>
                            </div>
                        </div>
                        <h3 className="text-sm text-white font-light ml-4">{name1},{country1}</h3>
                    </div>
                <div className="flex items-center text-sm text-white gap-4  justify-center">
                        
                        <div className="">
                            <p>Feels like {feels_like1}</p>  
                        </div>                     
                        <div className="">
                            <FontAwesomeIcon icon={faCircle} className="text-[3px]"/>
                        </div>                     
                        <div className="">
                            <p>Sunset {sunsetTimeFormatted1}</p>  
                        </div>                     
    
                    </div>

                <div className="mt-32">
                  <h4 className="text-white text-lg font-light">Chance of rain</h4>
                </div>
            </div>
        
        </>
            
            
        );
 
          
    
    } 

   