import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    debugger
    //
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    return (
        <div>
            {/*<div>*/}
            {/*    {pages.map(p => {*/}
            {/*        return <span className={props.currentPage === p && classes.selectedPage}*/}
            {/*                     onClick={() => {*/}
            {/*                         props.onPageChanged(p)*/}
            {/*                     }}>{p}</span>*/}
            {/*    })}*/}

            {/*</div>*/}
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />

            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={classes.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.unfollow(u.id)
                                                  }}>UnFollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.follow(u.id)
                                                  }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    );
};

export default Users;