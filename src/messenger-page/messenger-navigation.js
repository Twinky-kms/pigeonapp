import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import InfoIcon from '@material-ui/icons/Info';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    margin: {
        margin: theme.spacing(2),
    },
    menuButton: {
        marginRight: 36,
    },
    button: {
        margin: theme.spacing(1),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    avatar: {
        margin: 0,
        left: -8,
    },
    orangeAvatar: {
        left: -8,
        margin: 0,
        color: '#fff',
        backgroundColor: '#ffdd57',
    },
    padding: {
        paddingBottom: 24,
    },
    info: {
        position: "absolute",
        width: "125px",
        height: "50px",
        background: "grey",
        top: "50px",
        left: "100px",
    }
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState("Messenger");
    const [horizontal, setHorizontal] = React.useState('left');
    const [vertical, setVertical] = React.useState('top');
    const [infoSelect, setInfoSelect] = React.useState(false);
    const [checkedA, setCheckedA] = React.useState(false);


    const handleChange = name => event => {
        if (checkedA !== true) {
            setCheckedA(false);
        } else {
            setCheckedA(true);
        }
    };

    function infoOpen() {
        if (selectedIndex !== "Messenger" && infoSelect === false) {
            setInfoSelect(true);
        } else if (infoSelect === true) {
            setInfoSelect(false);
        }
    }
    function infoClose() {
        if (infoSelect === true) {
            setInfoSelect(false);
        }
    }

    function handleListItemClick(event, index) {
        setSelectedIndex(index.friend);
        setCheckedA(index.muted);
    }

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function slice(name) {
        var x = name;
        var y = x.slice(0, 1);
        return (y)
    }
    function randomNumber() {
        var y = Math.floor(Math.random() * 101)
        return y
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {selectedIndex}
                    </Typography>
                    <IconButton className={classes.button} onClick={infoOpen} aria-label="delete" color="primary"><InfoIcon /></IconButton>
                    <div className={clsx({
                        [classes.info]: infoSelect,
                        [classes.hide]: !infoSelect,
                    })} >
                        <FormControlLabel
                            control={
                                <Checkbox checked={checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                            }
                            label="Mute Chat"
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />

                <List className={classes.padding}>
                    {props.friendList.friends.map((text, index) => (
                        <ListItem button key={index} selected={selectedIndex === text.friend} onClick={event => handleListItemClick(event, text)}>
                            <ListItemIcon>
                                <Badge
                                    color="secondary"
                                    max={99}
                                    badgeContent={randomNumber(index)}
                                    anchorOrigin={{
                                        horizontal,
                                        vertical,
                                    }}
                                ><Avatar className={index % 2 === 0 ? classes.avatar : classes.orangeAvatar}>{slice(text.friend)}</Avatar></Badge></ListItemIcon>
                            <ListItemText primary={text.friend} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div >
    );
}