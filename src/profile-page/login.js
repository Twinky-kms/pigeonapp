import React from "react";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            hideLogin: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ hideLogin: true });
    }
    render() {
        const style = this.state.hideLogin ? { display: 'none' } : {};
        return (
            <div className="Login" style={style} >
                <div className="exit" onClick={this.handleChange} >X</div>
                <div className="qwe">
                    <div className="sign-in-title">Sign In</div>
                    <form>
                        <div className="text">
                            <label for="username">Username</label><br />
                            <input type="text" name="Uname" placeholder="Enter Username" className="login-text s-center" /><br />
                        </div>
                        <div className="text">
                            <label for="password">Password</label><br />
                            <input type="text" name="Pname" placeholder="Enter Password" className="login-text s-center" /><br />
                        </div>
                        <button type="submit" className="continue s-center"><span>Continue</span></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;