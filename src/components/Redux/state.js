import { renderEntireTree } from '../../render'

const state = {
    profilePage: {
    posts: [
        { id: 1, message: "It's my first post", likesCount: '15' },
        { id: 2, message: "Hi my frend", likesCount: '10' },
        { id: 3, message: "Welcom", likesCount: '20' },
        { id: 3, message: "Welcom", likesCount: '20' },
        { id: 3, message: "Welcom", likesCount: '20' },
        { id: 3, message: "Welcom", likesCount: '20' }
    ]},
    dialogsPage: {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 1, name: 'Sveta' },
        { id: 1, name: 'Saha' },
        { id: 1, name: 'Dasha' },
        { id: 1, name: 'Tigra' },
        { id: 1, name: 'Vasili' },
        { id: 1, name: 'peta' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 1, message: 'Yo' },
        { id: 1, message: 'How is your it-kamasutra' },
        { id: 1, message: 'Yo_Yo_Yo' }
    ]}
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5, 
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
};

export default state;