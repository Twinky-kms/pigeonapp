import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import SelectUser from './selectUser';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    addRoom: {
        position: 'absolute',
        bottom: 57,
        left: 56,
        zIndex: 10000,
        boxShadow: ' 1px -1px 2px 1px #209cee',
        background: 'white',
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    addRoomClosed: {
        display: 'none',
    },
    fab: {
        backgroundColor: '209cee',
        position: 'absolute',
        bottom: 57,
        left: 10,
        zIndex: 100001,
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#85edff',
            main: '#209cee',
            dark: '#2e77d5',
        },
        secondary: {
            light: '#ff8099',
            main: '#ff3860',
            dark: '#ff0033',
        },
    },
});

export default function AddUser(props) {
    const classes = useStyles();
    const [clicks, addClicks] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const style = open ? <span>Close</span> : <AddIcon />;
    const color = open ? 'secondary' : 'primary';

    function addRoom() {
        if (clicks % 2 === 0) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }

    function onAddFriend() {
        var elem = document.getElementById('react-autosuggest-simple').value;
        props.addFriends(elem);
        addClicks(clicks + 1);
        addRoom();
    }

    return (
        <ThemeProvider theme={theme} >
            <Fab color={color} aria-label="add" className={classes.fab} onClick={() => {
                addClicks(clicks + 1);
                addRoom();
            }} >
                {style}
            </Fab>
            <div className={clsx({
                [classes.addRoom]: open,
                [classes.addRoomClosed]: !open,
            })
            }>
                <SelectUser
                />
                <Button variant="contained" color="primary" className={classes.button} onClick={onAddFriend}>
                    New Message
      </Button>

            </div>
        </ ThemeProvider >
    );
}