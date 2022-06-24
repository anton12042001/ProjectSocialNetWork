import React from 'react';
import {addMessagesAction, updateNewMessageTextAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }


}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessagesAction())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextAction(text));
        },
    }

}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs);