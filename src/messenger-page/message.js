import React, { useEffect, useState, useRef } from "react";
import Button from '@material-ui/core/Button';

const Message = ({ senderId, text, messageNumber }) => {
    const node = useRef();
    const [open, setOpen] = useState(false);
    const number = messageNumber + 'message';

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setOpen(false);
    };

    //const handleChange = selectedValue => {
    //    onChange(selectedValue);
    //   setOpen(false);
    //};

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <li className={`message ` + senderId} id={number}>
            <p className="message-text one" >{text}</p>
            <div ref={node} className="dropdown">
                <span onClick={e => setOpen(!open)}>. . .</span>
                {open && (
                    <div className="dropdown-menu">
                        <Button
                            color="secondary"
                            className="dropdown-item"
                            size="small"
                            onClick={() => {
                                var elem = document.getElementById(number);
                                return elem.parentNode.removeChild(elem);
                            }}
                        >Delete</Button>
                    </div>
                )}
            </div>
        </li>
    );
};

export default Message;