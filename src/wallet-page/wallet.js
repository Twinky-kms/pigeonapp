import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import CardMedia from '@material-ui/core/CardMedia';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MovieIcon from '@material-ui/icons/Movie';


// Budget Categories: Auto/gas, Mobile, Movies, Music, Restaurant/FastFood, Groceries, Mortgage/Rent, PetFood/Supplies, Health/Fitness, Travel, Misc

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
        height: '40%',
        backgroundImage: 'linear-gradient(#618fe8, #209cee)',
        borderRadius: '10% 10% 50% 50% / 0% 0% 15% 13%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    balanceTitle: {
        color: 'white',
        fontSize: '2rem',
        fontFamily: 'BAHNSCHRIFT',
    },
    balanceButtons: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        bottom: 20,
        width: '80%',
    },
    balanceButtonsLeft: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    balanceButtonsRight: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    fab: {
        margin: theme.spacing(1),
    },
    flex: {
        display: 'flex',
        width: '100%',
        padding: 0,
    },
    center: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    centerBalance: {
        textAlign: 'center',
        color: 'white',
        textDecoration: 'underline',
    },
    card: {
        width: '95%',
        display: 'flex',
        height: 75,
        marginTop: 10,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        fontSize: '.75rem',
        marginBottom: 12,
    },
    cover: {
        width: 100,
        margin: '10px 10px 10px 10px',
        borderRadius: 10,
    },
    cardSection: {
        marginLeft: 10,
        width: '50%',
        paddingTop: 20,
    },
    cardIcon: {
        width: 55,
        height: 55,
        color: 'white',
    },
    gain: {
        color: '#23d160',
    },
    loss: {
        color: '#ff3860',
    },
    green: {
        background: '#23d160',
    },
    yellow: {
        background: '#ffdd57',
    },
    skyBlue: {
        background: '#209cee',
    }

}));


export default function Wallet() {
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffffff',
            }
        },
    });

    return <div className={classes.root}>
        <div className={classes.balanceSection}>
            <div className={classes.balanceTitle}>pgn 123456</div>
            <div className={classes.balanceButtons}>
                <ThemeProvider theme={theme}>
                    <div className={classes.balanceButtonsLeft}> <Fab color="primary" aria-label="Receive" className={classes.fab}>
                        <ArrowDownwardIcon />
                    </Fab><div className={classes.centerBalance}>Receive</div></div>
                    <div className={classes.balanceButtonsRight}> <Fab color="primary" aria-label="Send" className={classes.fab}>
                        <ArrowUpwardIcon />
                    </Fab><div className={classes.centerBalance}>Send</div></div>
                </ThemeProvider>
            </div>
        </div>
        <div className={classes.center}>
            <div>Recent 5 Transactions</div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover + ` ` + classes.green}
                    title="Live from space album cover">
                    <DeveloperBoardIcon className={classes.cardIcon} />
                </CardMedia>
                <CardContent className={classes.flex}>
                    <div className={classes.cardSection}>
                        <Typography variant="h8" component="h3">
                            Mining
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Jan 11, 2019 8:43 a.m
        </Typography>
                    </div>
                    <div className={classes.cardSection}>
                        <Typography className={classes.gain} variant="h8" component="h3">
                            +876
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            + 1234567
        </Typography>
                    </div>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover + ` ` + classes.yellow}
                    title="Live from space album cover">
                    <ShoppingCartIcon className={classes.cardIcon} />
                </CardMedia>
                <CardContent className={classes.flex}>
                    <div className={classes.cardSection}>
                        <Typography variant="h8" component="h3">
                            Shopping
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Jan 09, 2019 7:45 p.m
        </Typography>
                    </div>
                    <div className={classes.cardSection}>
                        <Typography className={classes.loss} variant="h8" component="h3">
                            -4560
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            - 1234567
        </Typography>
                    </div>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover + ` ` + classes.skyBlue}
                    title="Live from space album cover">
                    <MovieIcon className={classes.cardIcon} />
                </CardMedia>
                <CardContent className={classes.flex}>
                    <div className={classes.cardSection}>
                        <Typography variant="h8" component="h3">
                            Movies
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Jan 11, 2019 8:43 a.m
        </Typography>
                    </div>
                    <div className={classes.cardSection}>
                        <Typography className={classes.loss} variant="h8" component="h3">
                            -876
        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            - 1234567
        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
        <div>Chart</div>
        <div>Budget List</div>
    </div>
}