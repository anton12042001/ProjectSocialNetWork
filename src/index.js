import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 state={state}
                 dispath={store.dispath.bind(store)} />
        </React.StrictMode>
    );
}
reportWebVitals();

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals();
