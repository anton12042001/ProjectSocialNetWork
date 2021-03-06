import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import WithRouter from "./hoc/WithRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileInfo/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fullback={<div><Preloader/></div>}>
                    <Routes>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer/>}/>
                        <Route path='/profile/'
                               element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer/>}/>
                        <Route path='/users/*'
                               element={<UsersContainer/>}/>
                        <Route path='/login/*'
                               element={<LoginPage/>}/>
                    </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

WithRouter()

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})



let AppContainer = compose(
    WithRouter,
    connect(mapStateToProps, {initializeApp}))(App)
const  SamuraiJSApp = (props) => {
    return <BrowserRouter >
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp