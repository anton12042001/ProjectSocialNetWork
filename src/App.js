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
                               element = {<Profile dispatch={props.dispatch} profilePage={props.state.profilePage}/>}/>
                        <Route path= '/dialogs/*'
                               element = {<Dialogs dispatch={props.dispatch} state={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;