import React from 'react';
import ReactDOM from 'react-dom';

//Create some new component
const App = function () {
    return <div>First Component..  from App</div>;
}

//Render our component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
