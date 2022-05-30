const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
        friendsPage: {
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
    dispath(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                messages: this._state.profilePage.newPostText,
                likeCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newTextMessage
            this._callSubscriber(this._state);
        }


    }
}

export const addMessagesAction = () => ({type: ADD_MESSAGE,})
export const updateNewMessageTextAction = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text,})


export const addPostActionCreator = () => ({type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,})


export default store;
window.store = store;
