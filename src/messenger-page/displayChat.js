import React, { useEffect } from 'react';
import emojione from 'emojione';
import $ from "jquery";

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
            return ('you');
        } else {
            return ('other');
        }
    }

    return (
        <div className="displayConversation" >
            <ul >
                {chatText.map((message, index) => (
                    <li key={index} className={`message ${userSort(message.senderId)}`}>
                        <p className="message-text one" >{message.text}</p>
                    </li>
                ))}
                <div ref={el} />
            </ul>
        </div>
    )

}