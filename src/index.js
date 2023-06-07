import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** DONE HERE; TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


/** TODO: Add REDUCERS */
const airlineList = (state = [], action) => {
    console.log('in airlineList reducer');
    if (action.type === 'ADD_AIRLINE'){
        console.log(`confirm that airlineList action.payload is ${action.payload}`);
        return [...state, action.payload]
    }
    
    return state;
}

// const numberPlanes = (state = [], action) => {
//     console.log('in numberPlanes reducer');
//     if (action.type === 'ADD_PLANES'){
//         console.log(`cofirm that numberPlanes action.payload is ${action.payload}`);
//         return [...state, action.payload]
//     }

//     return state;
// }

/** TODO: Create store */
const storeInstance = createStore(
    combineReducers(
        {
        airlineList
        }
    ),
    applyMiddleware(
        logger
    )
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);