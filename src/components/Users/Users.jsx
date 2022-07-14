import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    debugger
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {
                    props.users.map(u =>
                        <User followingInProgress={props.followingInProgress}
                              user={u}
                              key={u.id}
                              follow={props.follow}
                              unfollow={props.unfollow}
                        />)
                }
            </div>
        </div>
    );
};

export default Users;