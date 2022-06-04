import React from 'react';
import {addMessagesAction, updateNewMessageTextAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: () => {
            dispatch(addMessagesAction())
        },
        addMessage: (text) => {
            dispatch(updateNewMessageTextAction(text));
        },
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;