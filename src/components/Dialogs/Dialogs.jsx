import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessagesAction, updateNewMessageTextAction} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {


    let dialogsElement = props.state.dialogs.map(d => <DialogItem avatarUrl={d.avatarUrl} name={d.name} id={d.id} key={d.id}/>);

    let messagesElement = props.state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let newMessagesElement = React.createRef();

    let addMessages = () => {
        props.dispatch(addMessagesAction());
    }

    let onMessageChange = () => {
        let text = newMessagesElement.current.value
        let action = updateNewMessageTextAction(text);
        props.dispatch(action)
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
                    <textarea onChange={onMessageChange} value={props.state.newMessageText} ref={newMessagesElement} cols="100" rows="10"/>
                </div>
                <div className={classes.addMessagesPageButton} >
                    <button onClick={addMessages}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;