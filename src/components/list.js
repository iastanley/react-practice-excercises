import React from 'react';

import Card from './card';
import AddForm from './add-form';

//making list a stateful component
export default class List extends React.Component {
  constructor(props) {
    super(props);
    //setting the state and props for Card
    this.state = {
      cards: []
    };
    //I think this statement makes sure this refers to the instance of the class and not the local this for that function
    this.addCard = this.addCard.bind(this);
  }

  //the callback function that is set to onAdd property
  addCard(text) {
    this.setState({
      //using rest operator to add exisint cards before new
      //you can't use push or you would mutate this.state
      cards: [...this.state.cards, {text}]
    });
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
        <AddForm type="card" onAdd={this.addCard}/>
      </div>
    );
  }
}

//default if parent doesn't set the title
List.defaultProps = {
  title: ''
}
