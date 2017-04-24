import React from 'react';

import Card from './card';

//making list a stateful component
export default class List extends React.Component {
  constructor(props) {
    super(props);
    //setting the state and props for Card
    this.state = {
      cards: [
        {text: 'Example card 1'},
        {text: 'Example card 2'},
        {text: 'Example card 3'}
      ]
    };
  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      //you need the rest operator to set props for all key/value pairs in card
      return <Card key={index} {...card}/>
    });
    return (
      <div className="list">
        {/*this.props.title is set by parent component*/}
        <h3>{this.props.title}</h3>
        {/*The array of Card components that you built*/}
        {cards}
      </div>
    );
  }
}

//default if parent doesn't set the title
List.defaultProps = {
  title: ''
}
