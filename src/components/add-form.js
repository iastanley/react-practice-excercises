import React from 'react';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
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
          {/*The Board component will set type*/}
          <a href="#">Add a {this.props.type}&hellip;</a>
        </div>
      );
    }
    //when editing is set to true show the form
    return (
      <form className="card add-form">
        <input type="text"/>
        <button>Add</button>
        <button type="button" onClick{() => this.setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }//end of render declaration

} //end of AddForm component declaration
