"use client"
import React, { useEffect, useState } from 'react';
// import mediasection from '../assets/images/Media-Section.svg'
// import { fetchToCurl } from 'fetch-to-curl';
// import axios from 'axios';





export const Entry =  async () => {
    try {
    const rawResponse = await fetch('https://devng.vandapardakht.ir/users/send-otp/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({mobile: "09194992371", receiver_type: "mobile"})
    })}catch (error) {
    console.log(`Download error: ${error.message}`);
  };


//   try {
//     const rawResponse = await fetch('https://devng.vandapardakht.ir/health-check/', {
//         method: 'GET',
//         // headers: {
//         //   'Accept': 'application/json',
//         //   'Content-Type': 'application/json'
//         // },
//         // body: JSON.stringify({mobile: "09194992371", receiver_type: "mobile"})
//     }); console.log(rawResponse)
// }catch (error) {
//         console.log(`Download error: ${error.message}`);
//       };

    //         console.log("run");
    // const url = 'https://devng.vandapardakht.ir/health-check/';
    // const options = {
    //     method: "Get",
    //   headers: {
    //     accept:"application/json",
    //    "Content-Type": "application/json",

        
    //   },
    //   body: {
    //     "mobile": "09224865327",
    //     "receiver_type": "mobile"
    //   }
    // };



// useEffect(() => {
//     console.log(fetchToCurl(url,options))
//     fetch(url, {
// body: options.body,
// headers: options.headers,
// method: "Get"
// })
// })

// const handleOtp = () => {
// }

    // console.log("run handle otp");
    // axios
    // .post('https://devng.vandapardakht.ir/users/get-token/',
    // {
        
    //     "mobile": "09224865327",
    //     // "receiver_type": "mobile"
        
    // })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
    







    return (
        <div className='bg-[#C2EAE1] w-full h-screen flex justify-center items-center '>
            <div className='flex justify-start w-[1240px] h-[628px] p-[36px] from-gradients-diagonal-20 bg-white rounded-[32px] shadow-light-sm shadow-red-500 '>
              
                <div className='w-[50%]'>
                {/* <img className=' h-full ' src={mediasection} alt='main-icon'/> */}
                </div>
                <div className='flex flex-col w-[50%]'>
                    <form className='  flex flex-col items-end'>
                        <h1 className='font-estedad  text-[48px] font-[600]'>!سلام</h1>
                        <h2 className='font-estedad  text-[48px] font-[600] mb-4'>شماره موبایل خود را وارد کنید</h2>
                        <p className='font-estedad text-[20px] font-[400] mb-16'>یک کد تایید 6 رقمی به شماره شما ارسال خواهد شد</p>
                        <div className='flex items-center justify-center'>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        <input maxLength={1} className=' ml-2 border-2 border-[#cccccc] w-[46px] h-[61px] p-3 rounded-[8px]' type='tel'/>
                        </div>
                        <button  className='bg-[#0A2341] text-[#ffffff] w-full h-[56px] mt-16 rounded-[12px]'>ارسال کد</button>
                    </form>

                    <div className='flex flex-col items-end  text-7x mt-16'>
                        <p>نگران نباشید! ما اطلاعات شمارا هیچ جا منتشر نمی کنیم</p>

                        <p><a className='text-[#39A78E] underline  ' href='#'>شرایط و قوانین </a>ما</p>

                    </div>
            </div>
            </div>
        </div>
    );
};