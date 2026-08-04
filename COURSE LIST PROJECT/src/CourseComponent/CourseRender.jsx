import CourseItems from "./CourseItems";

const CourseRender = ({ courseList , setCourseList}) => {

  let onEnrollHandler = (course) => {
    alert("Enrolled in " + course);
  };

  let onRemoveHandler = (course) => {
    let updatedList = courseList.filter(
      (item) => item !== course
    );

    setCourseList(updatedList);
  };

  return (
    <>
      <ul className="list-group container">

      {courseList.map((course, index) => (
        <CourseItems
          key={index}
          course={course}
          courseId={index + 1}
          onEnrollHandler={onEnrollHandler}
          onRemoveHandler={onRemoveHandler}
        />
      ))}

    </ul>
    </>
  )
}

export default CourseRender
