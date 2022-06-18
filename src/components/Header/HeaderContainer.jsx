import React from "react"
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthCurrentUser, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {

                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                    let userIdAuth = response.data.data.id
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userIdAuth)
                        .then(response => {
                            this.props.setAuthCurrentUser(response.data.photos.small)

                        })
                }
            })
    }

    render() {
        return <Header {...this.props}  />

    }
}


const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData, setAuthCurrentUser })(HeaderContainer)