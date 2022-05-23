import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";


const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}

const Dialogs = (props) =>  {

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

    let dialogsElement = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );


    let messagesElement = messages.map( m => <Message message={m.message}/>);


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