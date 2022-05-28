import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} addMessage={addMessage} state={state} addPost={addPost} />
        </React.StrictMode>
    );
}
reportWebVitals();

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

reportWebVitals();
