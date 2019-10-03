import React from "react";
import './profile.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';



const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        width: '300px',
        [theme.breakpoints.up('md')]: {
            width: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '800px',
        },
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '300px',
        [theme.breakpoints.up('md')]: {
            maxWidth: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '800px',
        },
    },
    listOpen: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: '300px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up('md')]: {
            maxWidth: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '800px',
        },
    },
    listItem: {
        height: 90,
        boxShadow: '0px 1px 0px 0px rgba(0,0,0,0.75)',
    },
    listText: {
        margin: 'auto',
    },
    toolbar: {
        display: 'none',
    },
    toolbarOpen: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#618fe8',
        height: 40,
        maxWidth: '300px',
        [theme.breakpoints.up('md')]: {
            maxWidth: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '800px',
        },
    },
}))

export default function Profile() {
    const classes = useStyles();
    const [loggedIn, setLoggedIn] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    function handleListItemClick(event, index) {
        setSelectedIndex(index);
        setOpen(true);
    }

    function handleListClose() {
        setOpen(false);
        setSelectedIndex('');
    }

    function logged() {
        if (loggedIn !== true) {
            return <div className="profile-login-avatar">Sign In/Log In</div>
        } else {
            return <div className="profile-avatar"><Avatar>H</Avatar>
                <span>Username</span><span>Log Out</span></div>
        }
    }

    function settingsPageChange() {
        if (selectedIndex === 'Display') {
            return <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={state.gilad} onChange={handleChange('gilad')} value="gilad" color="#23d160" />}
                        label="Dark Mode"
                    />
                </FormGroup>
            </FormControl>
        } else if (selectedIndex === 'Privacy') {
            return <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={state.gilad} onChange={handleChange('gilad')} value="gilad" color="#23d160" />}
                        label="Encrypt All Messages"
                    />
                    <FormControlLabel
                        control={<Switch checked={state.gilad} onChange={handleChange('gilad')} value="gilad" color="#23d160" />}
                        label="Enable 30 Day Data Burn"
                    />
                </FormGroup>
            </FormControl>
        } else if (selectedIndex === 'Notifications') {
            return <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={state.gilad} onChange={handleChange('gilad')} value="gilad" color="#23d160" />}
                        label="Enable Notifications Sound"
                    />
                    <FormControlLabel
                        control={<Switch checked={state.gilad} onChange={handleChange('gilad')} value="gilad" color="#23d160" />}
                        label="Enable Unread Message Badge"
                    />
                </FormGroup>
            </FormControl>
        }

    }

    return (
        <div className={classes.root}>
            {logged()}
            <div onClick={handleListClose} className={clsx(classes.toolbar, {
                [classes.toolbarOpen]: open,
                [classes.toolbar]: !open,
            })}>
                <IconButton >
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <List className={clsx(classes.list, {
                [classes.listOpen]: open,
                [classes.list]: !open,
            })}>
                {['Display', 'Privacy', 'Notifications'].map((text, index) => (
                    <ListItem button key={text} className={classes.listItem} selected={selectedIndex === text}
                        onClick={event => handleListItemClick(event, text)}>
                        <ListItemText className={classes.listText} >{text}</ListItemText>
                    </ListItem>
                ))}
            </List>
            <div>
                {settingsPageChange()}
            </div>

        </div>
    )
}