const CourseItems = ({course, courseId, onEnrollHandler, onRemoveHandler}) => {
  return (
    <>
      <li className="list-group-item bg-warning m-3">

      <b className="fs-4">ID - {courseId}</b>

      &nbsp; &nbsp;

      <b className="text-danger fs-4">'{course}'</b>

      <button
        className="btn btn-primary float-end"
        onClick={() => onEnrollHandler(course)}
      >
        Enroll
      </button>

      <button
      className="btn btn-danger float-end me-2" onClick={() => onRemoveHandler(course)}
      >Remove</button>

    </li>
    </>
  )
}

export default CourseItems
