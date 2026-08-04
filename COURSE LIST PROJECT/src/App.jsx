import AppName from "./CourseComponent/AppName"
import CourseInput from "./CourseComponent/CourseInput"
import CourseName from "./CourseComponent/CourseName"
import CourseRender from "./CourseComponent/CourseRender"
import CourseListEmpty from "./CourseComponent/CourseListEmpty"
import { useState } from "react"

const App = () => {

  // let [courseList, setCourseList] = useState(["B.Tech","BBA","BCA","MBA"]);

  let intialCourseList = ["B.Tech","BBA","BCA","MBA", "MCA"]

  let[newCourse, setNewCourse] = useState("");

  let[courseList,setCourseList] =useState(intialCourseList)

  let addCourseHandler = () => {
    if (newCourse.trim() === "") return;

    setCourseList([...courseList,newCourse]);
    setNewCourse("")
    
  };


  return (
    <>
     <AppName appName='COURSES'/> 
     <CourseInput 
      newCourse={newCourse}
        setNewCourse={setNewCourse}
        addCourseHandler={addCourseHandler}
     />
     <CourseName />
     <CourseRender  courseList={courseList} setCourseList={setCourseList}/>
     <CourseListEmpty courseList={courseList}/>
    </>
  )
}

export default App
