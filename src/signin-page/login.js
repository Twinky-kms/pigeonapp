import React from "react";
import './login.css';
import CreateAccount from './createAccount';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    Login: {
        margin: 'auto',
        width: '300px',
        [theme.breakpoints.up('md')]: {
            width: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '800px',
        },
    }
}));

export default function Login(props) {
    const classes = useStyles();
    const [hideLogin, setHideLogin] = React.useState(false);
    const style = hideLogin ? { display: 'none' } : {};
    const [register, setRegister] = React.useState(false);
    const createNewAccount = register ? <CreateAccount whenCreateClose={handleCloseChange} /> : <div></div>;

    function handleChange(e) {
        setHideLogin(true);
    }

    function handleCloseChange(e) {
    }

    function createNew() {
        setRegister(true);
        setHideLogin(true);
    }

    function forward() {
        props.continue(true);
    }

    return (
        <div >
            {createNewAccount}
            <div className={`Login ` + classes.Login} style={style} >
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    className={classes.margin + ` exit`}
                    onClick={handleChange}
                ><CloseIcon /></Fab>
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
                        <div className="createButton" onClick={createNew}>Don't have an account? Click here to create one</div>
                        <button type="submit" onClick={forward} className="continue s-center"><span>Continue</span></button>
                    </form>
                </div>
            </div>
        </div>
    )

}