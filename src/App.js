import CourseForm from './component/courseForm';
import CousreList from './component/courseList';
import { Component } from 'react';



class App extends Component {
  state = {
    courses: [
      { name: 'HTML' },
      { name: 'Css' },
      { name: 'Js' },
    ],
    current: ''
  }

  // update courses
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })

  }

  // add courses
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses
    if (current !== ''){
      courses.push({ name: current });
      this.setState({ courses, current: '' })
    }
  }

  // delete course 
  deleteCourse = (index) => {
    let courses = this.state.courses
    courses.splice(index, 1)
    this.setState({ courses })
  }

  //edit course item
  editCourse = (index, value) => {
    let courses = this.state.courses
    let course = courses[index]
    course['name'] = value
    this.setState({ courses })
  }

  render() {
    const courses = this.state.courses;
    const length = courses.length;
    const courseList = courses.map((course, index) => {
      return <CousreList details={course} key={index} index={index} delete={this.deleteCourse} editCourse={this.editCourse} />

    })
   const itemShow =  length ? courseList :  <p>There is no item to show</p>
    return (
      <section className="App">
        <h1>Course List </h1>
        <CourseForm value={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
        <ul> {itemShow} </ul>
      </section>
    );
  }
}

export default App;
