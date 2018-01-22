import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const defaultState = { checked: false };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            console.log('Toggle action dispatched!');
            return { ...state, checked: !state.checked };
        default:
            break;
    }
    return state;
};

const store = createStore(reducer);

class App extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    componentWillMount(){
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        const onClick = () => store.dispatch({ type : 'TOGGLE' });

        return (
           <div>
                <h1>Todo</h1>
                <div>
                    React Redux
                    <input type="checkbox" checked={!!this.state.checked} onClick={onClick}/>
                </div>
                {
                    this.state.checked ? (<h2>Done</h2>) : null
                }
           </div>
        );
    }
}

ReactDOM.render(
    ( 
        <App />
    ),
document.getElementById('root'));