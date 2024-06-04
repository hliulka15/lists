import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	    this.state = { color: 'black' };
    }

    handleClick() {
      var color = this.state.color;
      if (color === 'black') {
        this.setState({color: 'grey'});
      } else {
        this.setState({color: 'black'})
      }
	// Implement this function!
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

