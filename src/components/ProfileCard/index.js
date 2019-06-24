import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import imge from 'images/pexels-photo.jpg'

const ProfileCard = () => {
    console.log("Inside profileCards")
    return (
        <Card style={{ height: '100%', width: '100%', maxWidth: '345' }} >
            <CardActionArea >
                <CardMedia component="img" image={imge} height='200' />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Person
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Person's Bio as written on the database
                </Typography>
                </CardContent>
                <CardActions>
                    <Button>Meh</Button>
                    <Button>Cool</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default ProfileCard;