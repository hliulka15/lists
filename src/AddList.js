import React, { Component } from 'react';

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {newList:{}, lists: [], name: ''};
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }


  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      if(this.refs.id.value ===''){
        alert('List title required');
      } else {
        this.setState({newList: {
          name: this.refs.id.value
        }}, function() {
          this.props.addList(this.state.newList);
        })

        this.setState({
          text: '',
          name: '',
        })
    }
  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID' onChange = {this.handleChange.bind(this)} value = {this.state.text}></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
