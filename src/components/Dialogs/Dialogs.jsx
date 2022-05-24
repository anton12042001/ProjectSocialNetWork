import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";


const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}

const Dialogs = (props) =>  {


    let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/> );


    let messagesElement = props.messages.map( m => <Message message={m.message} key={m.id} />);


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