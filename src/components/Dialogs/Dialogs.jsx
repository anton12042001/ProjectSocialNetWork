import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) =>  {


    let dialogsElement = props.state.dialogs.map( d => <DialogItem avatarUrl={d.avatarUrl} name={d.name} id={d.id} key={d.id}/> );


    let messagesElement = props.state.messages.map( m => <Message message={m.message} key={m.id} />);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Dialogs;