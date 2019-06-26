// import React from 'react';
// import './index.css';

// class Landing extends React.Component {
//     HandleClick() {
//         console.log("CLICKED")
//     }

//     render() {
//         return (
//             <div>
//                 <header>
//                      <title>Linkder</title>

//                     <meta charset="utf-8"></meta>
//                     <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
//                     {/* meta tag to make the website Search Engine friendly */}
//                     <meta name="HandheldFriendly" content="True" />
//                     <meta name="description=" content="Linkder - The app that helps you network in-person" />
//                     <meta name="keywords" content="linkder, linkedin, tinder, network, interests, conversation" />
//                     <meta property="og:title" content="Linkder" />
//                     <meta property="og:type" content="website" />
//                     <meta property="og:image" content="/favicon.ico" />
//                     <meta property="og:description" content="Linkder - The app that helps you network in-person" />

//                     <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
//                     {/* Bootstrap CSS */}
//                     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
//                     {/* Adding Google Font API */}
//                     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine|Gugi|Indie+Flower" />
//                     <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
//                 </header>

//                 <body class="main-body">
//                     <br />
//                     <br />
//                     <div class="heading">
//                         <h1>Linkder</h1>
//                     </div>

//                     <div class="main-description">
//                         <h2>The app that helps you network in-person</h2>
//                     </div>
//                 </body>
//             </div>
//         )
//     }
// }

// export default Landing;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange, deepPurple } from '@material-ui/core/colors';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    '&:hover': {
      backgroundColor:deepPurple[700],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    color: theme.palette.getContrastText(deepPurple[500]),
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  purpleAvatar: {
    margin: theme.spacing(1),
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
  },
});

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <div>
         
          <br/>
          <br/>
          <Typography component="h1" variant="h1">
                Linkder
          </Typography>

          <Typography color="primary" component="h1" variant="h4">
                The app that helps you network in-person
          </Typography>

        </div>
        
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.purpleAvatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              id="outlined-password-input"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </ColorButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}