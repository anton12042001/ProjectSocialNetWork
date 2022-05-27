import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElement = props.state.dialogs.map(d => <DialogItem avatarUrl={d.avatarUrl} name={d.name} id={d.id}
                                                                  key={d.id}/>);


    let messagesElement = props.state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let newMessagesElement = React.createRef();

    let addMessagesElement = () => {
        let textMessages = newMessagesElement.current.value;
        alert('Все сработало!');
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
                    <textarea name="" ref={newMessagesElement} cols="100" rows="10"></textarea>
                </div>
                <div className={classes.addMessagesPageButton} >
                    <button onClick={addMessagesElement}  >Отправить сообщение</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;