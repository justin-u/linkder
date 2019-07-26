import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Scheduler from 'devextreme-react/scheduler';

// core components
import { withFirebase } from 'components/Firebase';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

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
import { Typography } from "@material-ui/core";
import { compose } from 'recompose'

const currentDate = new Date();
const views = ['day', 'week', 'month'];

class ProfilePublicPage extends React.Component {

  state = {}
  constructor(props) {
    super(props)

    console.log(this.props)
    const userid = this.props.match.params.uid;

    this.props.firebase.user(userid).on('value', snapshot => {
      const user = snapshot.val();
      console.log(user);
      if (user != null) {
        const bio = user.bio
        const experience = user.experience
        const lengthOfExp = user.lengthOfExperience
        const chips = user.chips;
        const imageURL = user.imageURL;
        const condition = user != null;

        this.setState({
          user: user,
          bio: bio,
          experience: experience,
          isLoggedIn: condition,
          lengthOfExp: lengthOfExp,
          chips: chips,
          imageURL: imageURL
        })
      }
    });

  }

  render() {

    const { classes, ...rest } = this.props;
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    // if (this.state.isLoggedIn) {
    return (
      <div style={{
        paddingTop: '200px',
        marginLeft: '60px',
        marginRight: '60px',
        marginBottom: '60px'
      }}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <div
                  style={{
                    width: "100%",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "20px"
                  }}>
                  <div
                    style={{
                      height: '200px',
                      width: '200px',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '100%'
                    }}
                  >
                    <img src={this.state.imageURL}
                      style={{
                        paddingTop: '40px',
                      }}
                    />
                  </div>
                </div>
                <br />
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div style={{ paddingBottom: '120px' }}></div>

                    <div className={classes.name} style={{
                      paddingBottom: '40px',
                      paddingTop: '20px'
                    }}>
                      <Typography variant='h3'>
                        {this.state.name}
                      </Typography>
                    </div>

                    <React.Fragment>
                      <Scheduler
                        dataSource={this.state.data}
                        views={views}
                        defaultCurrentView={'week'}
                        defaultCurrentDate={currentDate}
                        startDayHour={8}
                        endDayHour={24}
                        height={600}
                        disabled
                      />
                    </React.Fragment>

                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <Typography variant='subtitle1'>
                  {this.state.bio}
                </Typography>
                <br />
                <Typography variant='subtitle1'>
                  {this.state.experience}
                </Typography>
                <br />
                <Typography variant='subtitle1'>
                  {this.state.lengthOfExperience}
                </Typography>
                <br />
                <Typography variant='subtitle1'>
                  {this.state.chips}
                </Typography>
                <br />
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Tab 1",
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
                        tabButton: "Tab 2",
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
                        tabButton: "Tab 3",
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
}

export default compose(withStyles(profilePageStyle), withFirebase)(ProfilePublicPage);
