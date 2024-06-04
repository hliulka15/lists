import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{}, item: ''
    }
    
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    var divName = 'add' + this.props.idName;
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
    // if(this.refs.id.value ===''){
    //   alert('item required');
    // } else {
    //   console.log(this.props.idName)
    //   console.log(this.state.text)
    //   console.log(this.refs.id.value)
    //   this.setState({newItem: {
    //     item: this.refs.id.value
    //   }}, function() {
    //     this.props.addItem(divName, this.state.newItem);
    //   })
    //   console.log(this.state.newItem)

    //   this.setState({
    //     text: '',
    //     item: ''
    //   })
    // }
    

  }
    

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={this.divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id'  onChange = {this.handleChange.bind(this)} value = {this.state.text}/>
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
