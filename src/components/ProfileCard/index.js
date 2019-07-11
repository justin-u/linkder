import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import image from 'assets/img/favicon.png'
import ProfilePublic from '../ProfilePublic';


class ProfileCard extends React.Component {

    state = {};

    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
        console.log(this.props)
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
                    backgroundColor: 'black',
                    opacity: '0.9',
                    position: 'absolute',
                    paddingTop: '75px',
                    // marginBottom: '60px'
                }}>
                    <Slide direction="up" in={this.state.checked} mountOnEnter unmountOnExit>
                        <div style={{ backgroundColor: 'white', paddingTop: '100px', paddingBottom: '40px' }}>
                            <ProfilePublic user={this.props.user}/>
                            <Button onClick={this.handleChange.bind(this)} variant='contained'>
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
                        <CardActionArea
                            onClick={this.handleChange.bind(this)}
                        >
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                src={this.props.user.imageURL || image}
                                title={this.props.user.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.user.name}
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {this.props.user.bio}
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