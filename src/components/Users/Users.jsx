import React from 'react'
import classes from './Users.module.css'
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png"


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }


    getUsers = () => {
    }

    render(){
        let pagesCount = this.props.totalUsersCount / this.props.pageSize;

        let pages = [];
        for (let i=0; i < pagesCount)


        return (
            <div>
                <div>
                   <span>1</span>
                   <span className={classes.selectetPage} >2</span>
                   <span>3</span>
                   <span>4</span>
                   <span>5</span>
                </div>
                <button onClick={this.getUsers} >Get users</button>

                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                    <span>
                        <div>
                            <img src={  u.photos.small != null ? u.photos.small : userPhoto } className={classes.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
    }
}

export default Users;