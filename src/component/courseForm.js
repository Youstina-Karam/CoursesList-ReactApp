import React from "react";

const CourseForm = (props) => {
    return (
       <form onSubmit={props.addCourse}>
        <input type="text" onChange={props.updateCourse} id="name" value={props.value}/>
        <button type="submit">Add course</button>
       </form>
    )
} 

export default CourseForm;