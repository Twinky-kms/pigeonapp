import React from 'react';
import Chat from './DEMO-CHAT.json';
import DisplayChat from './displayChat';
import MessengerNavigation from './messenger-navigation';
import MessageSend from './messageSend';
import './chatDisplay.css';
import AddUser from './addUser';

export default function Messenger(props) {
    const user = props.name;
    const chatText = Chat.chat

    return (
        <div className="messenger">
            <MessengerNavigation />
            <AddUser />
            <MessageSend />
            <DisplayChat chat={chatText} user={user} />
        </div>
    )
}