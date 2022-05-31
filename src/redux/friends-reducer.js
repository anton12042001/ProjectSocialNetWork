import React from 'react';

let initialState = {
    friends: [
        {
            id: 1,
            name: 'Andrew',
            avatarUrl: 'https://vse-footbolki.ru/image/catalog/vsm/0/0/703/703327/previews/people_1_pad_front_white_700.jpg'
        },
        {
            id: 2,
            name: 'Sasha',
            avatarUrl: 'https://w7.pngwing.com/pngs/407/838/png-transparent-drawing-sketch-doodle-miscellaneous-blue-marine-mammal.png'
        },
        {
            id: 3,
            name: 'Sveta',
            avatarUrl: 'https://avatars.mds.yandex.net/i?id=358b79f819d507392d7f9c1454ac4d1d-5735248-images-thumbs&n=13'
        },
    ]
}

const FriendsReducer = (state = initialState, action) => {


    return state;
};

export default FriendsReducer;