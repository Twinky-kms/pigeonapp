import React, { useEffect } from 'react';
import emojione from 'emojione';
import $ from "jquery";
import Message from './message';

export default function Chat(props) {
    const chatText = props.chat;
    const user = props.user;
    let el = React.createRef();

    useEffect(() => {
        $(document).ready(function () {
            $(".message-text").each(function () {
                var original = $(this).html();
                var converted = emojione.toImage(original);
                $(this).html(converted);
            });
        });
        el.current.scrollIntoView();
    })

    function userSort(value) {
        if (value === user) {
            return 'you'
        } else {
            return 'other'
        }
    }

    return (
        <div className="displayConversation" >
            <ul >
                {chatText.map((message, index) => (
                    <Message
                        key={index}
                        senderId={userSort(message.senderId)}
                        text={message.text}
                        messageNumber={index}
                    />
                ))}
                <div ref={el} />
            </ul>
        </div >
    )

}