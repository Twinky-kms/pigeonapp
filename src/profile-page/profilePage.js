import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ComputerIcon from '@material-ui/icons/Computer';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import './profilePage.css';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        background: '#d9d8d7',
        width: '100%',
        maxWidth: 1200,
        height: '100%',
        overflow: 'auto',
    },
    balanceSection: {
        height: '20%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 'auto',
        width: 100,
        height: 100,
        background: '#618fe8',
    },
    settings: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        width: '95%',
        display: 'flex',
        height: 70,
        marginTop: 10,
    },
    cardSection: {
        marginLeft: 10,
        width: '50%',
        paddingTop: 15,
    },
    pos: {
        fontSize: '.75rem',
        marginBottom: 12,
        minWidth: 280,
    },
    sos: {
        width: 280,
    },
    flex: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        padding: 0,
    },
    divider: {
        width: '95%',
        display: 'flex',
        marginTop: 10,
    },
}));

const IOSSwitch = withStyles(theme => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

export default function Profile() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
    });
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const prevOpen = React.useRef(open);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };


    return <div className={classes.root}>
        <div className={classes.balanceSection}><Avatar ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true"
            onClick={handleToggle} className={`avatarProfilePage ` + classes.avatar}>H</Avatar>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
        <div className={classes.settings}>
            <div className={classes.divider}><ComputerIcon color="primary" /> <div style={{ marginLeft: 15 }}>Display</div></div>
            <Card className={classes.card}>
                <CardContent className={classes.flex}>
                    <div className={classes.cardSection}>
                        <Typography variant="h8" component="h3">
                            Dark Mode
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            This mode switches the theme to night mode
        </Typography>
                    </div>
                </CardContent>
                <FormControlLabel
                    control={
                        <IOSSwitch
                            checked={state.checkedA}
                            onChange={handleChange('checkedA')}
                            value="checkedA"
                        />
                    }
                />
            </Card>
            <div className={classes.divider}><LockOpenIcon color="primary" /> <div style={{ marginLeft: 15 }}>Privacy</div></div>
            <Card className={classes.card}>
                <CardContent className={classes.flex}>
                    <div className={classes.cardSection}>
                        <Typography variant="h8" component="h3">
                            Data Burn
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Enables the deletion of your data every 30 days
        </Typography>
                    </div>
                </CardContent>
                <FormControlLabel
                    control={
                        <IOSSwitch
                            checked={state.checkedB}
                            onChange={handleChange('checkedB')}
                            value="checkedB"
                        />
                    }
                />
            </Card>
            <div className={classes.divider}><NotificationsActiveIcon color="primary" /> <div style={{ marginLeft: 15 }}>Notifications</div></div>
            <Card className={classes.card}>
                <CardContent className={classes.flex}>
                    <div className={classes.cardSection}>
                        <Typography variant="h8" component="h3">
                            Badges
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            This will disable notification badges
        </Typography>
                    </div>
                </CardContent>
                <FormControlLabel
                    control={
                        <IOSSwitch
                            checked={state.checkedC}
                            onChange={handleChange('checkedC')}
                            value="checkedC"
                        />
                    }
                />
            </Card>
            <Card className={classes.card}>
                <CardContent className={classes.flex}>
                    <div className={classes.cardSection}>
                        <Typography className={classes.sos} variant="h8" component="h3">
                            Desktop Notifications
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            This will enable notifications on desktops
        </Typography>
                    </div>
                </CardContent>
                <FormControlLabel
                    control={
                        <IOSSwitch
                            checked={state.checkedD}
                            onChange={handleChange('checkedD')}
                            value="checkedD"
                        />
                    }
                />
            </Card>
        </div>
    </div>
}