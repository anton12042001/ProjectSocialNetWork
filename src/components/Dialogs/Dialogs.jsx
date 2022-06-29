import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import { Navigate } from "react-router-dom";
import Message from "./Message/Message";
import DialogsFormSheme from "./DialogsFormSheme/DialogsFormSheme";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem avatarUrl={d.avatarUrl} name={d.name} id={d.id} key={d.id}/>);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessagesElement = React.createRef();


    let onAddMessages = (sendMessage) => {
        props.addMessage(sendMessage)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
            <div>Показать больше диалогов</div>

            <DialogsFormSheme onAddMessages={onAddMessages}/>

        </div>
    );
};



export default Dialogs;