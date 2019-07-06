import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import image from 'assets/img/favicon.png'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';


class ProfileCard extends React.Component {

    state = {};

    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    handleChange = () => {
        console.log("CHANGE")
        this.setState(state => ({ checked: !state.checked }));
    };

    render() {

        if (this.state.checked) {
            return (
                <div style={{ 
                    height: '100%', 
                    width: '100%', 
                    top: '0', 
                    left: '0', 
                    zIndex: '1000', 
                    backgroundColor: 'grey', 
                    opacity: '0.8', 
                    position: 'absolute',
                    paddingTop: '75px',
                    }}>
                    <Slide direction="up" in={this.state.checked} mountOnEnter unmountOnExit>
                        <div style={{backgroundColor: 'white'}}>
                        <h1>Profile Goes Here</h1>
                        <Button onClick={this.handleChange.bind(this)}>
                            Close
                        </Button>
                        </div>
                    </Slide>
                </div>
            );
        }
        else {
            return (
                <div style={{
                    width: '300px',
                    paddingTop: '30px'
                }}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={image}
                                title="Sample Profile"
                                onClick={this.handleChange.bind(this)}
                                onKeyDown={this.handleChange.bind(this)}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Name
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This person has an amazing bio which is hella cool
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={this.handleChange.bind(this)}>
                                View More
        </Button>
                            <Button size="small" color="primary">
                                Like
        </Button>
                            <Button size="small" color="primary">
                                Ignore
        </Button>
                        </CardActions>
                    </Card>
                </div>
            );
        }
    }
}

export default ProfileCard;