import React from 'react';
import s from './Messages.module.css'
const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Kira</div>
                <div className={s.dialog}>Evgen</div>
                <div className={s.dialog}>Alesya</div>
                <div className={s.dialog}>Zhuk</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I Like JS</div>
            </div>
        </div>
    );
}

export default Messages;