import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import accounts from '../backend/models/accounts';
import debug from '../backend/modules/debug';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));


export default function CreateAccount(props) {
    const classes = useStyles();
    const [hideLogin, setHideLogin] = React.useState(false);
    const style = hideLogin ? { display: 'none' } : {};

    function handleChange(e) {
        setHideLogin(true);
        props.whenCreateClose(false);
    }

    function createAcc(user, pass) {
        var acc = new accounts(user, pass);
        var obj = {
            user: user,
            pass: pass
        }
        debug.Log.info("hello", `App Component`)
        JSON.stringify(obj);
        acc.updateDatabase(obj);
    }

    return <div className="Login" style={style} >
        <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.margin + ` exit`}
            onClick={handleChange, createAcc(Uname, Pname)}
        ><CloseIcon /></Fab>
        <div className="qwe">
            <div className="sign-in-title">Register</div>
            <form>
                <div className="text">
                    <label for="username">Create Username</label><br />
                    <input type="text" name="Uname" placeholder="Create Username" className="login-text s-center" /><br />
                </div>
                <div className="text">
                    <label for="password">Password</label><br />
                    <input type="text" name="Pname" placeholder="Enter Password" className="login-text s-center" /><br />
                </div>
                <div className="text">
                    <label for="password">Confirm Password</label><br />
                    <input type="text" name="Pname" placeholder="Confirm Password" className="login-text s-center" /><br />
                </div>
                <button type="submit" className="continue s-center"><span>Continue</span></button>
            </form>
        </div>
    </div>
}