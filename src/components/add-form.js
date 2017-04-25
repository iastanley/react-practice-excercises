import React from 'react';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }
  //the onAdd method is set by the parent component
  //this method handles BOTH adding text to a card and adding a title to a list
  onSubmit(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    if (text && this.props.onAdd) {
      this.props.onAdd(text);
    }
    //I think this is to reset input field after submit
    this.textInput.value = '';
  }

  //method used to switch editing between true and false
  setEditing(editing) {
    this.setState({editing}); //shorthand for {editing: editing}
  }

  render() {
    //display Add a ... link if editing is false
    if (!this.state.editing) {
      return (
        <div className="add-button" onClick={() => this.setEditing(true)}>
          {/*The Board OR List component will set type*/}
          <a href="#">Add a {this.props.type}...</a>
        </div>
      );
    }
    //when editing is set to true show the form
    return (
      <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" ref={input => this.textInput = input}/>
        <button>Add</button>
        <button type="button" onClick={() => this.setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }//end of render declaration

} //end of AddForm component declaration
