import React ,{ useEffect }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faCircle,faDroplet,faCloudRain } from '@fortawesome/free-solid-svg-icons';
import Sun from './img/sun.png';
import Black_cloud from './img/black_cloud.png';
import Cloud_sun from './img/cloud_sun.png';
import Rain from './img/rain.png';
import White_Rain from './img/white_rain.png';
import './Rain_box.css';
import axios from 'axios';



   




export default function Weather_Table() {

    return(
        <>
    <table className=" w-96  text-md font-light  text-gray-500  p-5">
       
       <tbody>
           <tr className="">
               <td  className="px-2 py-6">
                   Sunday
               </td>
               <td className="px-5 py-6 ">
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faDroplet} className='text-[#388dea]'/>
                    <p>54%</p>
                  </div>
               </td>
               <td className="px-10 py-6">
                  m
               </td>
               <td className="px-2 py-6">
                   $2999
               </td>
           </tr>
           <tr className=" ">
               <td  className="px-2 py-6">
               Tuesday
               </td>
               <td className="px-5 py-6">
               <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faDroplet} className='text-[#388dea]'/>
                    <p>54%</p>
                </div>
               </td>
               <td className="px-10 py-6">
                   Laptop PC
               </td>
               <td className="px-2 py-6">
                   $1999
               </td>
           </tr>
           <tr className="">
               <td  className="px-2 py-6">
               Wednesday
               </td>
               <td className="px-5 py-6">
                 <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faDroplet} className='text-[#388dea]'/>
                    <p>54%</p>
                  </div>
               </td>
               <td className="px-10 py-6">
                  <img src={Sun} className='object-contain w-8 h-8'/>
               </td>
               <td className="px-2 py-6">
                 <span >17 &#8451;</span>
               </td>
           </tr>

           <tr className="">
               <td  className="px-2 py-6">
                Thursday
               </td>
               <td className="px-5 py-6">
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faDroplet} className='text-[#388dea]'/>
                    <p>54%</p>
                  </div>
               </td>
               <td className="px-10 py-6">
                 <img src={Cloud_sun} className='object-contain w-10 h-10'/>
               </td>
               <td className="px-2 py-6">
                   <span >15 &#8451;</span>
               </td>
           </tr>

           <tr className="">
               <td  className="px-2 py-6">
                Friday
               </td>
               <td className="px-5 py-6">
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faDroplet} className='text-[#388dea]'/>
                    <p>54%</p>
                  </div>
               </td>
               <td className="px-10 py-6">
                 <img src={Black_cloud} className='object-contain w-8 h-8'/>
               </td>
               <td className="px-2 py-6">
                   <span >14 &#8451;</span>
               </td>
           </tr>

           <tr className="">
               <td  className="px-2 py-6">
                Saturday
               </td>
               <td className="px-5 py-6">
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faDroplet} className='text-[#388dea]'/>
                    <p>54%</p>
                  </div>
               </td>
               <td className="px-10 py-6">
                <img src={Rain} className='object-contain w-8 h-8'/>
               </td>
               <td className="px-2 py-6">
                  <span >14 &#8451;</span>
               </td>
           </tr>

           <tr className="">
               <td  className="px-2 py-6">
                Monday
               </td>
               <td className="px-5 py-6">
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faDroplet} className='text-[#388dea]'/>
                    <p>54%</p>
                  </div>
               </td>
               <td className="px-10 py-6">
                <img src={Sun} className='object-contain w-8 h-8'/>
               </td>
               <td className="px-2 py-6">
                    <span >19 &#8451;</span>
               </td>
           </tr>
       </tbody>
    </table>

    <div className= 'flex  items-center justify-between border  lg:w-80 w-54  md:w-54 w-[260px] bg-[#fff] p-5 gap-4 rounded-2xl shadow-md absolute ' id='rain_box'>

        <div className='grid grid-cols-1 w-14 h-28 rounded-3xl border-2 text-sm font-light justify-items-center p-2'>
          <p>10AM</p>
          <div className=' flex justify-center items-center border w-10 h-10 rounded-full bg-[#ddeaf8] '>
          <img src={Cloud_sun} className='object-contain w-6 h-6 '/>
          </div>
          <div className='flex'>
            <p >24</p> <span className='text-[10px]'>&#8451;</span>
          </div>
        </div>
        <div className='grid grid-cols-1 w-14 h-28 rounded-3xl border-2 text-sm font-light justify-items-center p-2'>
          <p>12AM</p>
          <div className=' flex justify-center items-center border w-10 h-10 rounded-full bg-[#ddeaf8] '>
          <img src={Cloud_sun} className='object-contain w-6 h-6 '/>
          </div>
          <div className='flex'>
            <p >26</p> <span className='text-[10px]'>&#8451;</span>
          </div>
        </div>
        <div className='grid grid-cols-1 w-14 h-28 rounded-3xl border-2 text-sm text-[#fff] font-light  border-[#181844] justify-items-center p-2  bg-[#181844] mt-[-22px]'>
          <p>2PM</p>
          <div className=' flex justify-center items-center border w-10 h-10 rounded-full bg-[#181844] border-[#181844]'>
          <FontAwesomeIcon icon={faCloudRain } className='text-[#fff] text-lg'/>
          </div>
          <div className='flex'>
            <p >26</p> <span className='text-[10px]'>&#8451;</span>
          </div>
        </div>
        <div className='grid grid-cols-1 w-14 h-28 rounded-3xl border-2 text-sm font-light justify-items-center p-2'>
          <p>4PM</p>
          <div className=' flex justify-center items-center border w-10 h-10 rounded-full bg-[#ddeaf8] '>
          <img src={Cloud_sun} className='object-contain w-6 h-6 '/>
          </div>
          <div className='flex'>
            <p >26</p> <span className='text-[10px]'>&#8451;</span>
          </div>
        </div>

    </div>
    </>
    );
}