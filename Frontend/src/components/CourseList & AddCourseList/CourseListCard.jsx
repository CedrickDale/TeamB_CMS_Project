
/*January 10, 2024*/
//1/30/2024 junite, created modal show and hide UI and Functionalities for CourseList

import React, { useState, useEffect, useRef, useContext } from "react";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
//import mock data
import data from "../../mockData/CourselistCard.json";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CopyofCreateNewCourse from "./CopyofCreateNewCourse";


//import course context
import { CourseContext } from "../context/CourseContext";

const CourseListCard = () => {
  // *NOTE
  //if data is coming from db use useState hook to store the data
  //sample: const [courses, setCourses] = useState([])

  const [courses, setCourses] = useState([]);

  const { showCreateCourse, setShowCreateCourse } = useContext(CourseContext);

  /* january 172024*/
  useEffect(() => {
    loadCourses();
    // loadChapter()
  }, []);

  //COURSES
  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/api/courses");
    setCourses(result.data);
  };

  console.log(courses);

  const [currentPage, setCurrentPage] = useState(1);
  const coursePerPage = 4;

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  const currentCourse = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const npage = Math.ceil(courses.length / coursePerPage);
  const pageTopRef = useRef(null);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    pageTopRef.current.scrollIntoView();
  };

 
  return (
    <>
      {/* 1/12/2024 UI development and Mobile responsiveness */}

      <div className="mt-[70px] h-[120vh] relative">
        {/* 1/15/2024 functions and buttons */}
        <div className="" ref={pageTopRef}>
          <div className="  xl:w-[1244px]  w-[90%] flex mx-auto flex-col lg:center-row lg:w-[80vw] lg:m-auto lg:mt-5 items-center lg:h-full relative gap-5">
            {/*January 15 2024, API connection of frontend to backend can fetch data from the backend*/}
            <div className="text-black lg:font-bold text-[.8rem] py-5 lg:py-0 lg:text-[2rem] w-full flex justify-center items-center ">
              <p className=" 2xl:text-[48px] lg:font-bold text-shadow ">
                Course List
              </p>
            </div>
            <div className="h-full">
              {currentCourse.map((course, idx) => {
                return (
                  <div key={idx} className="w-[60vw] mb-5 rounded-md shadow-md">
                    <Link to={`/courseoverview/${course.course_id}`}>
                      <div className="flex px-0 py-0 rounded-md xl:h-[115px]">
                        <div className="bg-[#BCE8B1] flex py-1 item-center justify-center text-center text-[.8rem] lg:text-[1rem] w-[30%] lg:w-[20%] lg:p-5 rounded-l-sm lg:rounded-l-md">
                          <p className="lg:font-medium text-shadow">
                            PL00{course.course_id}
                          </p>
                        </div>

                        <p
                          className="text-white text-shadow lg:font-bold text-[.8rem] py-1 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center


                   rounded-r-sm lg:rounded-r-md 	bg-[#126912] ">
                          {course.course_title}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            {courses.length < 5 ? (
              <></>
            ) : (
              <Stack spacing={2} className="">
                <Pagination
                  count={npage}
                  page={currentPage}
                  onChange={handleChange}
                />
              </Stack>
            )}
            {/* onClick={() => setShowCreateCourse((prev) => !prev)} */}
            <button
              className=" w-[100%]"
              onClick={() => setShowCreateCourse((prev) => !prev)}>
              <div className=" h-[10vh]  flex w-[50%] m-auto lg:w-[80%] overflow-auto  items-center justify-center">
                <div className="bg-[#87D275] w-[10%]  flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
                  <span>
                    <IoAdd className="lg:text-[2rem] text-white" />
                  </span>
                </div>
                <div
                  className="bg-[#126912] text-white lg:font-bold h-[5vh] lg:h-[10vh]
                  w-[30%] 2xl:w-[50%] flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
                  <span className=" 2xl:text-[2rem] text-shadow">
                    Add New Course
                  </span>
                </div>
              </div>
            </button>
            <div className="absolute ">
              <div className="lg:w-[1080px] ">
                {showCreateCourse && <CopyofCreateNewCourse />}
              </div>
            </div>
            {/*January 15 2024*/}
            {/*January 19 2024 -gem modify buttons add footer*/}
          </div>
          <footer className="absolute bottom-10 flex justify-center w-[100%]">
            <div className="">
              <p className="text-[#4D9349] font-medium">
                All Rights Reserved | Copyright 2024
              </p>
            </div>
          </footer>
        </div>
        {/*January 19 2024 -gem modify buttons add footer*/}
      </div>
    </>
  );
};

export default CourseListCard;
// /*January 23, 2024*/
