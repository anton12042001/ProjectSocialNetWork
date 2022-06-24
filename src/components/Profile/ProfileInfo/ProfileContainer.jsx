import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams,} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId){
        userId = 2
    }
        this.props.getUserProfile(userId)
    }


    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
};






let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

let mapStateToProps = (state) => ({
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
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)