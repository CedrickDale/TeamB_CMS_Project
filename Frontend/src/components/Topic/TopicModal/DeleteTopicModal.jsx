/* eslint-disable react/prop-types */
//2/2/2024 junite, created UI Modal for Topic Delete Icon, completed
import React from "react";

const DeleteTopicModal = () => {
  return (
    <>
      <div className=" h-[100vh] pt-[150px] pb-32 backdrop-blur-[.1rem] ">
        <div className=" flex border-[.01rem] drop-shadow-2xl shadow-lg border-black rounded-lg m-auto bg-[#EBFFE5] lg:max-w-[550px] 2xl:max-h-[672px] 2xl:max-w-[724px] ">
          <form action="" className="w-[80%] m-auto py-2 ">
            <div className="flex items-center py-1 text-black lg:font-bold lg:text-3xl lg:py-0">
              <p className=" pb-5 lg:font-bold TeamB_text-shadow lg:text-[1.2rem]  xl:text-[24px] mt-5">
                Topic Title
              </p>
            </div>
            <p className=" pb-5 lg:font-bold TeamB_text-shadow lg:text-[1.2rem]  xl:text-[24px] mt-5">
              Are you sure you want to delete this Topic?
            </p>
            <div className="pt-8 lg:w-full lg:flex lg:justify-end">
              <div className="flex gap-x-5">
                <button className="xl:text-[24px]  lg:text-[1rem]" onClick="">
                  Cancel
                </button>

                <button
                  className="drop-shadow-md TeamB_text-shadow   lg:w-[90px] lg:h-[40px] lg:rounded-[80px] lg:text-[1rem] xl:w-[114px] xl:h-[58px] xl:rounded-[100px] bg-[#126912] xl:text-[24px] text-[#FFFFFF]  font-bold"
                  type="submit">
                  <p>Delete</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteTopicModal;
