import React from "react";
import mobile2 from "../../assets/mobile2.png";
import mobile1 from "../../assets/mobile1.png";
const HeroSection2 = () => {
  return (
    <>
      

      <div className="flex justify-center mt-[310px] hero2">
        <div className="flex flex-col max-w-7xl justify-center items-center">
          <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="h-26 w-full overflow-hidden">
              {" "}
              <img src={mobile1} alt="" className="h-[316px]" />{" "}
            </div>
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
                Navigate Through Services Available Near You.
              </div>
              <div className="text-gray-500 m-2 text-sm">
                <p href>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
                Make Appointment According To Your Need.
              </div>
              <div className="text-gray-500 m-2 text-sm">
                <p>
                  ApptNow is a free appointment scheduling app that makes life
                  easier for professionals who have no time to stay in lines and
                  waiting for turn. The app helps you effortlessly schedule
                  appointments and reduce no-shows using automated notification
                  reminders. Replace your paper appointment book today and let
                  the app send appointment reminders, so your clients never miss
                  a booking again! ApptNow is the free scheduling app for any
                  business with a repetitive client base, like barbershops,
                  super stores, salons, auto stores etc.
                </p>
              </div>
            </div>
            <div className="h-26 w-full overflow-hidden">
              {" "}
              <img src={mobile2} alt="mobile2" className="h-[316px]" />{" "}
            </div>
          </div>
          <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
          <div className="h-26 w-full overflow-hidden">
              {" "}
              <img src={mobile1} alt="" className="h-[316px]" />{" "}
            </div>
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
              Manage Your Appointments.
              </div>
              <div className="text-gray-500 m-2 text-sm">
                <p href>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
