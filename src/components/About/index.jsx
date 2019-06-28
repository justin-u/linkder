import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import { withFirebase } from 'components/Firebase';
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import { Typography, TextField } from "@material-ui/core";
import { thisTypeAnnotation } from "@babel/types";
import { compose} from 'recompose'
// import SmplAgTech from 'components/SmplAgTech';

class ProfilePage extends React.Component {

  state = {}
  constructor(props) {
    super(props)

    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const bio = authUser.bio
    // console.log(authUser)

    const condition = authUser != null

    this.state = {
      authUser: authUser,
      bio: bio,
      isLoggedIn: condition
    }
  }

  onSubmit = async(event) => {
    console.log('YE')
    console.log(this.props.firebase)
    console.log(this.state.bio)
    this.props.firebase.user(this.state.authUser.uid).update({
      'bio': this.state.bio
    }).then(() => {
      this.setState(this.state)
    })

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  };

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);


    if (this.state.isLoggedIn) {
      return (
        <div>
          <Parallax small filter image={require("assets/img/blockchain.jpg")} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div style={{
                        paddingBottom: '120px'
                      }}>
                      </div>
                      <div className={classes.name} style={{
                        paddingBottom: '40px',
                        paddingTop: '20px'
                      }}>
                        <Typography variant='h3'>
                          {this.state.authUser.name}
                        </Typography>
                      </div>
                    </div>
                  </GridItem>
                </GridContainer>
                <div className={classes.description}>
                  <form onSubmit={this.onSubmit}>
                    <TextField
                      name="bio"
                      multiline
                      value={this.state.bio}
                      onChange={this.onChange}
                      type="string"
                      placeholder="Bio"
                      style={{ paddingBottom: '10px', width: '70%' }}
                    />
                    <Button type="submit">
                      Save Bio
                    </Button>
                  </form>
                </div>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <NavPills
                      alignCenter
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Studio",
                          tabIcon: Camera,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={studio1}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio2}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={studio5}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio4}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Work",
                          tabIcon: Palette,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work1}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work2}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work3}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work4}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work5}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Favorite",
                          tabIcon: Favorite,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work4}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio3}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work2}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work1}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio1}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<div style={{
        paddingTop: '50px'
      }}>
        <h1>You need to be signed in to view this</h1>
      </div>)
    }
  }
}

export default compose(withStyles(profilePageStyle), withFirebase)(ProfilePage);
