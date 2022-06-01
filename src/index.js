import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = (state) => {
    debugger
    root.render(
        <React.StrictMode>
            <App
<<<<<<< HEAD
                store={store}
                state={state}
                dispatch={store.dispatch.bind(store)}/>
=======
                 state={state}
                 dispatch={store.dispatch.bind(store)} />
>>>>>>> 720f688ee08b8e5409f12e005b7121b755439d82
        </React.StrictMode>
    );
}
reportWebVitals();

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

