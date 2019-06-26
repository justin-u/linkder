// import React from 'react';

// class SignUp extends React.Component {
//     HandleClick() {
//         console.log("CLICKED")
//     }

//     render() {
//         return (
//             <div>
//                 <header>
//                     <title>Sign Up</title>

//                     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
//                     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//                     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
//                     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine|Gugi|Indie+Flower"></link>
//                 </header>

//                 <body class="body">
//                     <div class="heading">
//                         <br />
//                         <br />

//                         <h3 class="description">
//                             An app that lets you network in-person
//                         </h3>
//                     </div>
//                     <br />

//                     <div class="container">
//                         <form action="/auth/login" method="post">
//                             <div class="row">
//                                 <h2 class="h2">Join Linkder Today</h2>
//                             </div>

//                             <div class="col">
//                                 <br />
//                                 <p class="p1">Username</p>
//                                 <input type="text" name="username" placeholder="Enter Username" required />
//                                 <br />
//                                 <p class="p2">Email</p>
//                                 <input type="text" name="email" placeholder="Enter Email" required />
//                                 <br />
//                                 <p class="p3">Password</p>
//                                 <input type="password" name="password" placeholder="Enter Password" required />
//                                 <br />
//                                 <p class="p4">Confirm Password</p>
//                                 <input type="password" name="password" placeholder="Re-enter Password" required />
//                                 <br />
//                                 <input type="submit" value="Sign Up" />
//                                 <br />
//                                 <div>
//                                     <a class="last" href="/login">Already have an account, Login!</a>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </body>
//             </div>
//         )
//     }
// }

// export default SignUp;


import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange, deepPurple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: deepPurple,
      secondary: {
        main: '#67448C',
      },
    },
});

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
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,

    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  purpleAvatar: {
    margin: theme.spacing(1),
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <br />
          <br />
        <Avatar className={classes.purpleAvatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </ColorButton>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}