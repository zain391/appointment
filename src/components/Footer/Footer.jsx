import React from "react";
import Ellipse9 from "../../assets/Ellipse9.png";
import Ellipse10 from "../../assets/Ellipse10.png";
import Ellipse11 from "../../assets/Ellipse11.png";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center bg-[#3198C9] p-4">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col bg-[#3198C9] rounded-lg items-center justify-center text-center">
                    <div className="text-white text-3xl md:text-5xl font-medium">
                      People Are Saying About Us
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col bg-white rounded-lg items-center justify-center text-center">
                    {/* <img
                      src="https://source.unsplash.com/100x100/?man,boy"
                      alt=""
                      className="rounded-full"
                    /> */}
                    <div className="text-stone-500  m-2">
                      {" "}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat amet facere animi ipsam ut quis, magni dolore
                      enim illum deserunt quasi, consequuntur ab quia aut
                      aliquid natus eum reiciendis reprehenderit.
                    </div>
                    <table>
                      <tr>
                        <td>
                          <img
                            src={Ellipse9}
                            alt=""
                            className="rounded-full"
                          />
                        </td>
                        <td>
                          <div className="font-bold text-black">Dev opter</div>
                          <div className="text-sm font-medium text-stone-500 hover:text-black">
                            <p>Designer Near </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center  bg-white rounded-lg justify-center text-center">
                    <div className="text-stone-500  m-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nam error ipsa iusto est aut? Animi repellat ab nemo vel,
                      aut beatae laboriosam maiores, obcaecati omnis odio eum,
                      autem dolorem distinctio.
                    </div>
                    <table>
                      <tr>
                        <td>
                          <img
                            src={Ellipse10}
                            alt=""
                            className="rounded-full"
                          />
                        </td>
                        <td>
                          <div className="font-bold text-black">Dev opter</div>
                          <div className="text-sm font-medium text-stone-500 hover:text-black">
                            <p>Designer Near </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row  bg-white rounded-lg items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    
                    <div className="text-stone-500  m-2">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus numquam id autem deleniti, pariatur sed
                      corrupti tempore reiciendis placeat nesciunt sequi
                      repellat vel voluptas non
                    </div>
                    <table>
                      <tr>
                        <td>
                          <img
                            src={Ellipse11}
                            alt=""
                            className="rounded-full"
                          />
                        </td>
                        <td>
                          <div className="font-bold text-black">Dev opter</div>
                          <div className="text-sm font-medium text-stone-500 hover:text-black">
                            <p>Designer Near </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
