import React from 'react'
import classes from './Users.module.css'


const Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.kino-teatr.ru/news/24226/213821.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'i am boss',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    id: 2,
                    photoUrl: 'https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'i am boss too',
                    location: {
                        city: 'Moscow',
                        country: 'Russia'
                    }
                },
                {
                    id: 3,
                    photoUrl: 'https://ne-kurim.ru/forum/attachments/0_9279e_762aace4_xl-jpg.399906/',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'i am boss too',
                    location: {
                        city: 'Kiev',
                        country: 'Belarus'
                    }
                },
            ]
        )
    }


    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </div>)
            }
        </div>
    );
};

export default Users;