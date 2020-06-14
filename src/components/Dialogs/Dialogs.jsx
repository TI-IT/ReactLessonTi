import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

let dialogsData = [
    { id: 1, name: 'Dimych'},
    { id: 1, name: 'Sveta'},
    { id: 1, name: 'Saha'},
    { id: 1, name: 'Dasha'},
    { id: 1, name: 'Tigra'},
    { id: 1, name: 'Vasili'},
    { id: 1, name: 'peta'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    { id: 1, message: 'Yo'},
    { id: 1, message: 'How is your it-kamasutra'},
    {id: 1, message: 'Yo_Yo_Yo'}
]

const Dialogs = (Props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

                <div className={s.messages}>
                    <Messages message={messagesData[0].message} id={messagesData[0].id} />
                    <Messages message={messagesData[1].message} id={messagesData[1].id} />
                    <Messages message={messagesData[2].message} id={messagesData[2].id} />
                    <Messages message={messagesData[3].message} id={messagesData[3].id} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;