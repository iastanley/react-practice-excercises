import React from 'react';

//this is a stateless component
//note how Card takes a props argument
export default function Card(props) {
    return (
        <div className="card">
            {/*The parent component must set props.text*/}
            {props.text}
        </div>
    );
};

//by default a Card will contain an empty string as text
Card.defaultProps = {
  text: ''
};
