import React from 'react';
import Chat from './DEMO-CHAT.json';
import DisplayChat from './displayChat';
import MessengerNavigation from './messenger-navigation';
import MessageSend from './messageSend';
import './chatDisplay.css';
import AddUser from './addUser';
import Friends from './messenger.json';

export default function Messenger(props) {
    const user = props.name;
    const chatText = Chat.chat
    const friends = ['Michael', 'Jim', 'Pam', 'Dwight', 'Creed', 'Kevin', 'Angela', 'Ryan', 'Toby', 'Stanley', 'Kelly', 'Meredith']
    function onChangeAddName(newName) {
        friends.push(newName);
    }

    return (
        <div className="messenger">
            <MessengerNavigation friendList={Friends} />
            <AddUser
                addFriends={onChangeAddName}
            />
            <MessageSend />
            <DisplayChat chat={chatText} user={user} />
        </div>
    )
}