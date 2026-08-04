const CourseListEmpty = ({courseList}) => {
  return (
    <>
    
    {courseList.length === 0 && (
        <h2 className="text-center text-danger fw-bold">
          Are Now Unavailable
        </h2>
      )}
      
    </>
  )
}

export default CourseListEmpty
