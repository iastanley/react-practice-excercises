import React from 'react';

import List from './list';
import AddForm from './add-form';

//making board a stateful component
export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    };
    this.addList = this.addList.bind(this);
  } //end of constructor

  addList(title) {
    this.setState({
      lists: [...this.state.lists, {title}]
    });
  }

  render() {
    //create array of List components with props set by this.state
    const lists = this.state.lists.map((list, index) =>
      <List key={index} {...list}/>
    );

    return (
      <div className="board">
        <h2>{this.props.title}</h2>
        <div className="lists">
          {lists}
          <AddForm type="list" onAdd={this.addList}/>
        </div>
      </div>
    );
  }
}

//because there is no parent for Board the default props will be used
Board.defaultProps = {
  title: 'Board'
};
