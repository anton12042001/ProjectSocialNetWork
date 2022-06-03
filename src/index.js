import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App
                store={store}
                state={state}
                dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
reportWebVitals();

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

