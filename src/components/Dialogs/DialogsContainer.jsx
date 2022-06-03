import React from 'react';
import {addMessagesAction, updateNewMessageTextAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    debugger

    let state = props.store.getState().dialogsPage


    let addMessages = () => {
        props.store.dispatch(addMessagesAction());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextAction(text);
        props.store.dispatch(action)
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessages} dialogsPage={state}  />
    );
};

export default DialogsContainer;