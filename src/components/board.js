import React from 'react';

import List from './list';

//making board a stateful component
export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        {title: 'Example list 1'},
        {title: 'Example list 2'}
      ]
    };
  } //end of constructor

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
        </div>
      </div>
    );
  }
}

//because there is no parent for Board the default props will be used
Board.defaultProps = {
  title: 'Board'
};
