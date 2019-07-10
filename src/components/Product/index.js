import React from 'react';
import Typography from "@material-ui/core/Typography";

class Product extends React.Component {
  render() {
    return (
      <div>
        <Typography variant='h1' style={{textAlign: 'center', paddingTop: '100px', paddingBottom: '50px'}}>Smpl-TRACE</Typography>
        <br></br>
        <Typography variant='body2' style={{paddingLeft: '40px', paddingRight: '40px'}}>
          Linkder is an app that lets you network by helping you meet people face to face
        </Typography>
      </div>
    );
  }
}

export default Product;
