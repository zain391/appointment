import React from "react";
import amy from "../../assets/amy.png";
import mobiles from "../../assets/mobiles.png";
import mobile1 from "../../assets/mobile1.png";
import googleLogo from "../../assets/googleLogo.png";
import appleLogo from "../../assets/appleLogo.png";
const Testnavbar = () => {
  return (
    <div>
      <div class="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3"></div>
      <div class="w-scrren h-24  bg-opacity-95 absolute top-0 left-0" />
      <div class="-mt-24 relative w-screen py-12 px-12">
        <div class="relative z-10 text-center py-24 md:py-48">
          <div class="flex flex-row ">
            <div class="  font-black">
              <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
                Make Appointment Booking Easy
              </h1>
              <h2 class="text-white font-extrabold">
                ApptNow is a free appointment scheduling app that makes life
                <br />
                easier for professionals
              </h2>
            
                <img
                  src={googleLogo}
                  alt="googleLogo"
                  class="w-30 h-12"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={appleLogo}
                  alt="appleLogo"
                  class="rounded-lg w-30 h-12"
                />
              
            </div>
            <div class="">
              <img src={mobiles} alt="mobile w-screen" />
            </div>
          </div>
        </div>
       
        <img
          src={amy}
          class="w-screen min-h-[400px] absolute inset-0 object-cover opacity-70"
        />
      </div>
      
    </div>
    
  );
};

export default Testnavbar;
