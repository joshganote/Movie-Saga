import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovieSaga);
    yield takeEvery('PUT_EDIT', putMovieDetail);
}

// SAGA
function* getMovieSaga(action){
    try{
        const response = yield axios({
            method: 'GET',
            url: '/api/movie'
        });
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        });
    } catch(err) {
           console.log('error getting elements', err); 
    }
}

function* putMovieDetail(action) {
    try {
        yield axios.put('/api/movie', action.payload);
        yield put({ type: 'GET_GENRES'})
    } catch (err) {
        console.log(err);
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// REDUCERS
// Used to store movies returned from the server
// just need id, title, image, description
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
// just need id, name
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();