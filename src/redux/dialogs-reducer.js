import React from 'react';

const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    newMessageText: "hi, it's anton",
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    dialogs: [
        {
            id: 1,
            name: "Anton",
            avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Creative-Tail-Animal-panda.svg/2048px-Creative-Tail-Animal-panda.svg.png"
        },
        {id: 2, name: "Andrey", avatarUrl: "https://vraki.net/sites/default/files/inline/images/1_123.jpg"},
        {
            id: 3,
            name: "Sveta",
            avatarUrl: "https://img2.freepng.ru/20180501/ipw/kisspng-internet-of-things-information-digital-marketing-5ae855a2698e22.3777391215251757144324.jpg"
        },
        {
            id: 4,
            name: "Sasha",
            avatarUrl: "https://avatars.mds.yandex.net/i?id=4d7e0ed41c1691f884a69c66ddde583c-4553981-images-thumbs&n=13"
        },
        {
            id: 5,
            name: "Victor",
            avatarUrl: "https://phonoteka.org/uploads/posts/2021-05/1622251825_21-phonoteka_org-p-kruglii-art-krasivo-24.jpg"
        },
        {
            id: 6,
            name: "Valera",
            avatarUrl: "https://img2.freepng.ru/20180710/qrj/kisspng-sticker-5b444812889e23.9503735515312015545596.jpg"
        },
    ],

}

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.sendMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
};

export const addMessagesAction = (sendMessage) => ({type: ADD_MESSAGE, sendMessage})


export default DialogsReducer;