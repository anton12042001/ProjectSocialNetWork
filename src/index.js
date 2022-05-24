import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
    {id: 1, messages: "Hi, how are you?", likesCount: 12},
    {id: 2, messages: "it's my first post", likesCount: 11},
    {id: 3, messages: "it's my firfsafasost", likesCount: 11},
];

let dialogs = [
    {id: 1, name: "Anton"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"},
]
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
]

root.render(
    <React.StrictMode>
            <App dialogs={dialogs} messages={messages} posts={posts} />
    </React.StrictMode>
);
reportWebVitals();
