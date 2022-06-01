import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";




function App(props) {
    debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.state.friendsPage.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path= '/profile'
<<<<<<< HEAD
                               element = {<Profile store={props.store}/>}/>
                        <Route path= '/dialogs/*'
                               element = {<Dialogs store={props.store}/>}/>
=======
                               element = {<Profile dispatch={props.dispatch} profilePage={props.state.profilePage}/>}/>
                        <Route path= '/dialogs/*'
                               element = {<Dialogs dispatch={props.dispatch} state={props.state.dialogsPage}/>}/>
>>>>>>> 720f688ee08b8e5409f12e005b7121b755439d82
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;