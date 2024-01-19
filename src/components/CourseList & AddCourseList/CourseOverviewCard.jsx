import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";

//import mockdata
import data from "../../mockData/CourseOverviewCard.json";

//edit icon
//edit icon
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

//back icon and back function
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CourseOverviewCard = () => {
  
  /*January 17 2023 API connection from backend to front end displaying data */
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    loadChapters();
  }, []);

  const loadChapters = async () => {
    const result = await axios.get("http://localhost:8080/getChapter");
    setChapters(result.data);
  };
  //mockdata chapter
  const { chapterlist } = data;

  
  
  //back function
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };


  return (
    <>
      {/*January 19 2024 -gem modify responsiveness*/}

      <div className=" relative mt-5 w-full h-full ">
     <div className="relative w-full h-full mt-5 ">
        <div
          className="absolute left-2 top-0 flex items-center cursor-pointer w-[10%]"
          onClick={goBack}>
          <span className="text-[2.5rem]">
            <IoArrowBackCircle />
          </span>
          <span className="text-[1rem] pl-1">Back</span>
        </div>
        <div className="w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[70%] lg:m-auto lg:mt-5 items-center gap-8">
          <div className="lg:font-bold py-1 lg:py-0 lg:text-[2rem] w-full flex justify-center items-center">
            <p className="lg:font-bold">Course Overview</p>
          </div>
          <div className="w-[100%] mt-10 flex mx-auto flex-col lg:text-[1.5rem] lg:right-row lg:w-[98%] lg:m-auto lg:mt-5 items-right">
            <p className="lg:font-bold">HTML And CSS</p>
          </div>
          <div className="w-[69vw] bg-[#BCE8B1] h-[2vh] items-center lg:rounded-lg">
            <div className="w-[20vw] bg-[#126912] h-[2vh] lg:rounded-lg"></div>
          </div>
          <div className="w-[98%] font-medium text-[1.4rem] 2xl:text-[36px]">
            <p>Lessons</p>
          </div>
          {chapterlist.map((chapter, idx) => {
            return (
              <Link
                to="/addtopictitlepage"
                key={idx}
                className="flex 2xl:w-[1186px] 2xl:h-[65px] lg:w-[80%] justify-between items-center">
                <div className="h-[1.5rem] w-[1.5rem] bg-[#126912] rounded-[100%]"></div>
                <div
                  className=" 2xl:rounded-[20px] lg:flex lg:items-center lg:font-medium lg:text-[1rem] 2xl:text-[24px] w-[90%] bg-[#126912]  py-1 text-center text-[.8rem]  lg:p-5 text-white
              lg:h-[50px] lg:rounded-[1rem]">
                  <p>CHAPTER {chapter.chapiId}:</p>
                  <p className="pl-2 lg:font-medium">{chapter.chapterTitle}</p>
                </div>
              </Link>
            );
          })}
                {/*January 19 2024 -gem modify responsiveness*/}


          {/*January 17 2023 API connection from backend to front end displaying data */}
            {/*January 19 2024 -gem modify buttons add footer*/}

          <div className="lg:w-[65%] lg:flex lg:justify-center gap-5 ml-16">
            <Link
              to="/createnewchaptertitle"
              className="lg:rounded-[1rem] h-[5vh] lg:h-[50px] 2xl:h-[65px] flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer bg-[#BCE8B1]">
              <div className=" w-[30%] flex items-center justify-center w-full">
                <span className="pr-4">
                  <FaEdit className="text-[2rem] lg:text-[2.5rem] text-white" />
                </span>
                <span className=" lg:text-[1rem] lg:font-bold 2xl:text-[24px]  text-[#070101] text-opacity-[55%]">
                  Add Chapter Title
                </span>
              </div>
            </Link>
            <div className="lg:flex lg:justify-space-between"></div>

            <Link
              to="/editchaptertitle"
              className=" lg:rounded-[1rem] h-[5vh] lg:h-[50px] 2xl:h-[65px] flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer bg-[#BCE8B1]">
              <div className=" w-[30%] flex items-center justify-center  w-full">
                <span className="pr-4 ">
                  <IoAdd className="lg:font-bold text-[2rem] lg:text-[2.5rem] text-white" />
                </span>
             
                <span className="lg:text-[1rem] lg:font-bold 2xl:text-[24px]  text-[#070101] text-opacity-[55%]">
                  Edit Chapter Title
                </span>
              </div>
            </Link>
          </div>
          <div>
      <footer className="flex justify-center p-10">
        <div>
          <p className="text-[#4D9349] font-medium">All Rights Reserved | Copyright 2024</p>
        </div>
      </footer>
    </div>
      {/*January 19 2024 -gem modify buttons add footer*/}

        </div>
      </div>
    </>
  );
};

export default CourseOverviewCard;
// 1/19/2024