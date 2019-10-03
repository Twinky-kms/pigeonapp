import React from 'react';
import Picker from 'react-emojipicker';
import './messagingSend.css';

let emojiClicker = "https://cdn.jsdelivr.net/emojione/assets/png/1f600.png?v=2.2.7";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            commandHistory: [],
            value: '',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleTextChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleChange() {
        if (this.state.revealLogin === false) {
            this.setState({ revealLogin: true });
        } else {
            this.setState({ revealLogin: false });
        }
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.revealLogin === true) {
            this.setState({ revealLogin: false });
        }
    }

    logEmoji(emoji) {
        const val = this.state.value + " " + emoji.shortname + " ";
        this.setState({ value: val })
        emojiClicker = emoji.image.currentSrc;
    }
    keyPress(e) {
        if (e.keyCode === 13) {
            console.log(e.target.value);
            var newArray = this.state.commandHistory;
            newArray.push(e.target.value);
            this.setState({
                commandHistory: newArray,
                value: ''
            });
            console.log(this.state.commandHistory);
        }
    }

    render() {
        const style = this.state.revealLogin ? {} : { display: 'none' };
        return (
            <div className="messagingSend">
                <div id="send">
                    <textarea value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleTextChange} id="input" ></textarea>
                    <div className="submit"><span>Send</span></div>
                    <div onClick={this.handleChange} className="emojiButton" ><img class="emojiClicker" alt="😀" title=":grinning:" src={emojiClicker}></img> </div>
                </div>
                <div className="emojiBox123" style={style} ref={this.setWrapperRef} >
                    <Picker onEmojiSelected={this.logEmoji.bind(this)} />
                    <div className="closeBottom" onClick={this.handleChange}></div>
                </div>
            </div>
        )
    }
}
export default Login;