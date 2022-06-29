import React from 'react';
import {addMessagesAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
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
        addMessage: (sendMessage) => {
            debugger
            dispatch(addMessagesAction(sendMessage.sendMessage))
        },
    }

}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs);