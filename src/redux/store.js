import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: "Hi, how are you?", likesCount: 12},
                {id: 2, messages: "it's my first post", likesCount: 11},
                {id: 3, messages: "it's my firfsafasost", likesCount: 11},
            ],
            newPostText: "it-kamasutra.com",
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer

    },
    dispat??h(action) {

        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer( this._state.friendsPage, action);
        this._callSubscriber(this._state);

    }
}





window.store = store;
