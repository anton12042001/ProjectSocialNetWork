import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}
reportWebVitals();

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

