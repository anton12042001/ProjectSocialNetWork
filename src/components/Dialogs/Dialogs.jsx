import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {connect} from "react-redux";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem avatarUrl={d.avatarUrl} name={d.name} id={d.id} key={d.id}/>);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessagesElement = React.createRef();


    let onAddMessages = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessagesElement.current.value
        props.updateNewMessageText(text)
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
            <div className={classes.addMessagesPage}>
                <div className={classes.addMessagesPageTextarea}>
                    <textarea onChange={onMessageChange} value={state.newMessageText} ref={newMessagesElement}
                              cols="100" rows="10"/>
                </div>
                <div className={classes.addMessagesPageButton}>
                    <button onClick={onAddMessages}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;