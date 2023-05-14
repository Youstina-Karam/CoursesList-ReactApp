import { Component } from 'react';

class CousreList extends Component {
  state = {
    isEdit: false
  }

  toggleState = () => {
    let { isEdit } = this.state
    this.setState({
      isEdit: !isEdit
    })

  }

  Cousre = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => { this.toggleState() }}>Edit Course</button>
        <button onClick={() => { this.props.delete(this.props.index) }}>Delete course</button>
      </li>
    )
  }


  updateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input type='text' ref={(v) => { this.input = v }} defaultValue={this.props.details.name} />
        <button>Update course</button>      
      </form>
    )
  }

  updateCourseItem = (e) => {
    e.preventDefault();
    if ( this.input.value !== ''){
      this.props.editCourse(this.props.index, this.input.value)
      this.toggleState()
    }
 
  }

  render() {
    let { isEdit } = this.state
    return (
      < >
        {isEdit ? this.updateForm() : this.Cousre()}
      </>
    );
  }
}

export default CousreList;
