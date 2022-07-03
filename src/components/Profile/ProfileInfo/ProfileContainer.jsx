import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams,} from "react-router-dom";
import {compose} from "redux";
import WithRouter from "../../../hoc/WithRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId){
        debugger
        userId = this.props.authorizedUserId
        if (!userId) {
           return <Navigate to={'/login'}/>
        }
    }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
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
export default compose (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    WithRouter,
)(ProfileContainer)