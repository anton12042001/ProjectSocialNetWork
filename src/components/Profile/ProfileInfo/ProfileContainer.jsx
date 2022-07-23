import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../../redux/profile-reducer";
import {Navigate,} from "react-router-dom";
import {compose} from "redux";
import WithRouter from "../../../hoc/WithRouter";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                return <Navigate to={'/login'}/>
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile()

    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId)
            this.refreshProfile()
    }


    render() {

        debugger
        return (

            <Profile {...this.props}
                     isOwner={!this.props.router.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        );
    }
};


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

let mapStateToProps = (state) => ({
    status: state.profilePage.status,
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


WithRouter()
debugger
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto,}),
    WithRouter,
)(ProfileContainer)