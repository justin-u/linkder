import React from 'react';
import './index.css'; 

class Landing extends React.Component {
    HandleClick() {
        console.log("CLICKED")
    }

    render() {
        return (
            <div>
                <header>
                     <title>Linkder</title>

                    <meta charset="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    {/* meta tag to make the website Search Engine friendly */}
                    <meta name="HandheldFriendly" content="True" />
                    <meta name="description=" content="Linkder - The app that helps you network in-person" />
                    <meta name="keywords" content="linkder, linkedin, tinder, network, interests, conversation" />
                    <meta property="og:title" content="Linkder" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/favicon.ico" />
                    <meta property="og:description" content="Linkder - The app that helps you network in-person" />

                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                    {/* Bootstrap CSS */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
                    {/* Adding Google Font API */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine|Gugi|Indie+Flower" />
                    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
                </header>

                <body class="main-body">
                    <br />
                    <br />
                    <div class="heading">
                        <h1>Linkder</h1>
                    </div>

                    <div class="main-description">
                        <h2>The app that helps you network in-person</h2>
                    </div>
                </body>
            </div>
        )
    }
}

export default Landing;