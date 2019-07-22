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
  { label: 'react' },
  { label: 'html' },
  { label: 'css' },
  { label: 'software development' },
  { label: 'java' },
  { label: 'C' },
  { label: 'C++' },
  { label: 'python' },
  { label: 'dancing' },
  { label: 'singing' },
  { label: 'hiking' },
  { label: 'music' },
  { label: 'guitar' },
  { label: 'finance' },
  { label: 'economics' },
  { label: 'computer science' },
  { label: 'coding' },
  { label: 'programming' },
  { label: 'running' },
  { label: 'sports' },
  { label: 'travelling' },
  { label: 'reading' },
  { label: 'painting' },
  { label: 'engineering' },
  { label: 'acting' },
  { label: 'eating' },

];

class ProfilePage extends React.Component {

  state = {}
  constructor(props) {
    super(props)

    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const bio = authUser.bio
    const experience = authUser.experience
    const lengthOfExp = authUser.lengthOfExperience
    const interests = authUser.chips
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

  onSubmit = async (event) => {

    this.props.firebase.user(this.state.authUser.uid).update({
      'bio': this.state.bio,
      'experience': this.state.experience,
      'lengthOfExperience': this.state.lengthOfExp
    }).then(() => {
      this.setState(this.state)
    })

    event.preventDefault();
  };

  onSubmitChip = async (event) => {

    const random = this.state.chips
    random.push(this.state.chip);

    this.props.firebase.user(this.state.authUser.uid).update({
      'chips': this.state.chips,
    }).then(() => {
      this.setState({chips:random})
    }).then(() => {
      this.setState(this.state)
    })

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  };

  onChangeChip = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
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
      return (
        <div>
          <Parallax small filter image = {require("assets/img/bg2.jpg")} />

          <div style = {{ height: '100vh', backgroundImage: "url(" + image + ")", backgroundSize: 'cover' }} className = {classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className = {classes.container}>
                <GridContainer justify = "center">
                  <div
                    style = {{
                      width: "100%",
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: "20px"
                    }}>
                      
                    <div
                      style = {{
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
                  <GridItem xs = {12} sm = {12} md = {6}>
                    <div className = {classes.profile}>
                      <div style = {{
                        paddingBottom: '120px'
                      }}>
                      </div>

                      <div className = {classes.name} style = {{
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

                <div className = {classes.description}>
                  <form onSubmit = {this.onSubmit}>
                    <TextField
                      name = "bio"
                      multiline
                      value = {this.state.bio}
                      onChange = {this.onChange.bind(this)}
                      type = "string"
                      placeholder = "Bio"
                      style = {{ paddingBottom: '10px', width: '70%' }}
                    />
                    <br />
                    <TextField
                      name = "experience"
                      value = {this.state.experience}
                      onChange = {this.onChange.bind(this)}
                      type = "string"
                      placeholder = "Experience"
                      style = {{ paddingBottom: '10px', width: '70%' }}
                    />
                    <br />
                    <TextField
                      name = "lengthOfExp"
                      value = {this.state.lengthOfExp}
                      onChange = {this.onChange.bind(this)}
                      type = "number"
                      placeholder = "Length of Experience (in Years)"
                      style = {{ paddingBottom: '10px', width: '70%' }}
                    />
                    <br />
                    <Button style = {{ color: "#ffffff", backgroundColor: "#000000", flexWrap: 'wrap' }} type = "submit">
                      Save Bio
                    </Button>
                  </form>
                  <br /> <br />

                  <form onSubmit = {this.onSubmitChip.bind(this)} >
                    <TextField
                      name = "chip"
                      value = {this.state.chip}
                      onChange = {this.onChangeChip.bind(this)}
                      type = "string"
                      placeholder = "Interests"
                    />

                    <Button size = "small" style = {{ color: "#ffffff", marginLeft: "15px", backgroundColor: "#000000", flexWrap: 'wrap' }} type = "submit">
                      Add Interests
                    </Button>
                  </form>

                  <br /> <br /> <br />

                  <Grid style = {{ justifyContent: 'center', alignContent: 'center' }} container spacing = {3}>
                    {this.state.chips.map(function (asd) {
                      function handleDelete() {
                        alert('You clicked the delete icon.');
                        const random = this.state.chips
                        random.pop(this.state.chip);
                        console.log(random);
                      }

                      console.log(asd);

                      return <Grid container item xs = {3} spacing = {4}>
                        <Chip style = {{ backgroundColor: "#67448C", marginLeft: '1px', marginRight: '1px', marginBottom:'10px', justifyContent: 'center', flexWrap: 'wrap' }}
                          label = {asd}
                          suggestions = {["Your", "Data", "Here"]}
                          onDelete = {handleDelete}
                          color = "primary"
                        />
                      </Grid>
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

                <GridContainer style = {{height: '100vh', backgroundImage: "url(" + image1 + ")", backgroundSize: 'cover'}} justify = "center">
                  <GridItem xs = {12} sm = {12} md = {8} className = {classes.navWrapper}>
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
      return (<div style = {{ paddingTop: '50px' }}>
        <h1>You need to be signed in to view this</h1>
      </div>)
    }
  }
}

export default compose(withStyles(profilePageStyle), withFirebase)(ProfilePage);
