import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId){
        userId = 24369
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
})



function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)