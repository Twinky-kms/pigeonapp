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
    const friends = ['Michael', 'Jim', 'Pam', 'Dwight']

    function onChangeAddName(newName) {
        friends.push(newName);
        console.log(friends);
    }

    return (
        <div className="messenger">
            <MessengerNavigation friendList={friends} />
            <AddUser
                addFriends={onChangeAddName}
            />
            <MessageSend />
            <DisplayChat chat={chatText} user={user} />
        </div>
    )
}