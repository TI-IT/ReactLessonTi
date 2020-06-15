import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);
debugger
    let messagesElement = props.state.messages
        .map(m => <Message message={m.message} id={m.id} />);
    return (
        <div className={s.Dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            <div className={s.messages}>
                {messagesElement}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;