import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core'

// core components
import { withFirebase } from 'components/Firebase';
// import Button from "components/CustomButtons/Button.jsx";
import Button from '@material-ui/core/Button';
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
import { compose } from 'recompose'
import { withAuthorization } from "../Session";
import image from 'assets/img/sky1.jpg'
import image1 from 'assets/img/skydown.jpg'

const suggestions = [
  'react',
  'html',
  'css',
  'software development',
  'java',
  'C',
  'C++',
  'python',
  'dancing',
  'singing',
  'hiking',
  'music',
  'guitar',
  'finance',
  'economics',
  'computer science',
  'coding',
  'programming',
  'running',
  'sports',
  'travelling',
  'reading',
  'painting',
  'engineering',
  'acting',
  'eating',

];

class ProfilePage extends React.Component {

  state = {}
  constructor(props) {
    super(props)

    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const bio = authUser.bio || ""
    const experience = authUser.experience || ""
    const lengthOfExp = authUser.lengthOfExperience || null
    const interests = authUser.chips || []
    // console.log(authUser)
    const chip = ""

    const condition = authUser != null

    this.state = {
      authUser: authUser,
      bio: bio,
      experience: experience,
      isLoggedIn: condition,
      lengthOfExp: lengthOfExp,
      chips: interests,
      chip: ""
    }
  }

  onSubmit = (event) => {

    var { bio,
      experience,
      lengthOfExp } = this.state;

    this.props.firebase.user(this.state.authUser.uid).update({
      'bio': bio,
      'experience': experience,
      'lengthOfExperience': lengthOfExp
    }).then(() => {
      this.forceUpdate();
    })

    console.log(this.state)
    alert("Bio Saved!");
    event.preventDefault();
  };

  onSubmitChip = (event) => {

    if (event.key == 'Enter') {
      var chips = this.state.chips
      chips.push(this.state.chip);

      this.props.firebase.user(this.state.authUser.uid).update({
        'chips': chips,
      }).then(() => {
        this.setState({ chips: chips })
      })
    }

    // event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state)
  };

  onChangeChip = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state)
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    if (this.state.isLoggedIn) {
      const schedulerData = [
        {
          startDate: new Date(),
          endDate: new Date(2019, 6, 6, 19, 0),
          title: 'Meeting'
        },
      ];
      const scope = this;

      const {
        bio,
        experience,
        lengthOfExp,
        chip,
      } = this.state;

      return (
        <div>
          <Parallax small filter image={require("assets/img/bg2.jpg")} />

          <div style={{ height: '100vh', backgroundImage: "url(" + image + ")", backgroundSize: 'cover' }} className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <div
                    style = {{
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
                      <img src = {this.state.authUser.imageURL}
                        style = {{
                          paddingTop: '40px',
                        }}
                      />
                    </div>
                  </div>
                  <br />
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

                        <Typography variant = 'h3'>
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
                      value={bio}
                      onChange={this.onChange.bind(this)}
                      type="string"
                      placeholder="Bio"
                      style={{ paddingBottom: '10px', width: '70%' }}
                    />
                    <br />
                    <TextField
                      name="experience"
                      value={experience}
                      onChange={this.onChange.bind(this)}
                      type="string"
                      placeholder="Experience"
                      style={{ paddingBottom: '10px', width: '70%' }}
                    />
                    <br />
                    <TextField
                      name="lengthOfExp"
                      value={lengthOfExp}
                      onChange={this.onChange.bind(this)}
                      type="number"
                      placeholder="Length of Experience (in Years)"
                      style={{ paddingBottom: '10px', width: '70%' }}
                    />
                    <br />
                    <Button style={{ color: "#ffffff", backgroundColor: "#000000", flexWrap: 'wrap', }} type="submit">
                      Save Bio
                    </Button>
                  </form>
                  <br /> <br />

                  <TextField
                    name="chip"
                    value={chip}
                    onChange={this.onChangeChip.bind(this)}
                    type="string"
                    placeholder="Interests"
                    onKeyPress={this.onSubmitChip.bind(this)}
                    style={{ textAlign: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}
                  />
                  
                  <br /> <br /> <br />

                  <Grid style={{ justifyContent: 'center', alignContent: 'center' }} container spacing={3}>
                    {this.state.chips.map(function (asd) {
                      function handleDelete(toDelete) {
                        // alert('You clicked the delete icon.');
                        const chips = scope.state.chips;
                        console.log(toDelete);
                        chips.splice(chips.indexOf(toDelete), 1);
                        console.log(chips);
                        scope.setState({ chips: chips });
                        scope.props.firebase.user(scope.state.authUser.uid).update({
                          'chips': chips
                        });
                      }

                      return (
                        <Chip style={{ backgroundColor: "#67448C", marginLeft: '1px', marginRight: '1px', marginBottom: '10px', justifyContent: 'center', flexWrap: 'wrap' }}
                          label={asd}
                          onDelete={(e) => handleDelete(asd)}
                          color="primary"
                        />
                      )
                    })}
                  </Grid>


                  {/* <Chip style={{backgroundColor: "#000000", margin: '2px', flexWrap: 'wrap',}}
                    label="Finance"
                    value={this.state.chips}
                    onChange={this.onChange}
                    suggestions={["Your", "Data", "Here"]}
                    onDelete={handleDelete}
                    color="primary"
                  />

                  <Chip style={{backgroundColor: "#000000", margin: '2px', flexWrap: 'wrap',}}
                    label="Hiking"
                    value={this.state.chips}
                    onChange={this.onChange}
                    suggestions={["Your", "Data", "Here"]}
                    onDelete={handleDelete}
                    color="primary"
                  />

                  <Chip style={{backgroundColor: "#000000", margin: '2px', flexWrap: 'wrap',}}
                    label="Reading"
                    value={this.state.chips}
                    onChange={this.onChange}
                    suggestions={["Your", "Data", "Here"]}
                    onDelete={handleDelete}
                    color="primary"
                  /> */}

                </div>

                <br /> <br />

                <GridContainer style={{ height: '100vh', backgroundImage: "url(" + image1 + ")", backgroundSize: 'cover' }} justify="center">
                  <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <NavPills
                      alignCenter
                      color = "primary"
                      tabs = {[
                        {
                          tabButton: "Tab 1",
                          tabIcon: Camera,
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs = {12} sm = {12} md = {4}>
                                <img
                                  alt = "..."
                                  src = {studio1}
                                  className = {navImageClasses}
                                />
                                <img
                                  alt = "..."
                                  src = {studio2}
                                  className = {navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt = "..."
                                  src = {studio5}
                                  className = {navImageClasses}
                                />
                                <img
                                  alt = "..."
                                  src = {studio4}
                                  className = {navImageClasses}
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
                              <GridItem xs = {12} sm = {12} md = {4}>
                                <img
                                  alt = "..."
                                  src = {work1}
                                  className = {navImageClasses}
                                />
                                <img
                                  alt = "..."
                                  src = {work2}
                                  className = {navImageClasses}
                                />
                                <img
                                  alt = "..."
                                  src = {work3}
                                  className = {navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs = {12} sm = {12} md = {4}>
                                <img
                                  alt="..."
                                  src = {work4}
                                  className = {navImageClasses}
                                />
                                <img
                                  alt = "..."
                                  src = {work5}
                                  className = {navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Tab 3",
                          tabIcon: Favorite,
                          tabContent: (
                            <GridContainer justify = "center">
                              <GridItem xs = {12} sm = {12} md = {4}>
                                <img
                                  alt = "..."
                                  src = {work4}
                                  className = {navImageClasses}
                                />
                                <img
                                  alt = "..."
                                  src = {studio3}
                                  className = {navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs = {12} sm = {12} md = {4}>
                                <img
                                  alt = "..."
                                  src = {work2}
                                  className={navImageClasses}
                                />
                                <img
                                  alt = "..."
                                  src = {work1}
                                  className = {navImageClasses}
                                />
                                <img
                                  alt = "..."
                                  src = {studio1}
                                  className = {navImageClasses}
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
      return (<div style={{ paddingTop: '50px' }}>
        <h1>You need to be signed in to view this</h1>
      </div>)
    }
  }
}

export default compose(withStyles(profilePageStyle), withFirebase)(ProfilePage);
