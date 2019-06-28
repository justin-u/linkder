import React from 'react';
import Header from "components/Header/Header.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Button from "components/CustomButtons/Button.jsx";

class Product extends React.Component {
  render() {
    return (
      <div>
        <Typography variant='h1' style={{textAlign: 'center', paddingTop: '100px', paddingBottom: '50px'}}>Smpl-TRACE</Typography>
        <br></br>
        <Typography variant='body2' style={{paddingLeft: '40px', paddingRight: '40px'}}>
          Linkder is a blockchain-based software platform that covers the end-to-end production and supply chain operations of producers and processors within the industrial hemp industry. The TRACE platform provides an immutable record of provenance (a "digital fingerprint") for crops and products that are enrolled on the platform. This is done via the Distributed Ledger, or Blockchain, that is maintained by Smpl. When a product is produced, processed, and transported it is recorded on the ledger and verified by Smpl, then tracked through the entire value chain until it reaches the customer with each step of the process (growing, processing, distribution, retail, etc...) being recorded as well. The ultimate goal is to provide an entire turn-key solution to regulated cannabis supply chain management, verification, and transparency, solving the major issues of counterfeiting, illegitimate operations, and regulation difficulties. End-consumers can also use the Smpl TRACE app to check the history and legitimacy of their legal cannabis-based products as well as to provide feedback to producers.
        </Typography>
      </div>
    );
  }
}

export default Product;
