const CourseInput = ({newCourse, setNewCourse, addCourseHandler}) => {

  return (
    <>

 <div className="container">

        <div className="row mb-3">

        <div className="col-8">
          <input
            type="text"
            placeholder="Enter Course Name"
            className="form-control fs-5"
            value = {newCourse}
            onChange={(event) => setNewCourse(event.target.value)

            }
          />
        </div>

        <div className="col-2">
          <button className="btn btn-success w-100"
          onClick={addCourseHandler}>  ADD </button>
        </div>

      </div>
    </div>
      
    </>
  );
};

export default CourseInput
