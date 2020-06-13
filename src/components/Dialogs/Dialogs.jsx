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




const Dialogs = (Props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Saha" id="3"/>
                <DialogItem name="Dasha" id="4"/>
                <DialogItem name="Tigra" id="5"/>
                <DialogItem name="Vasili" id="6"/>
                <DialogItem name="peta" id="7"/>
                <div className={s.messages}>
                    <Messages message="Hy" />
                    <Messages message="How is your it-kamasutra" />
                    <Messages message="Yo" />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;