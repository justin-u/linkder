import React from 'react';
import ProfileCard from '../ProfileCard';
import './Home.css'
//JS

class Home extends React.Component {
    HandleClick() {
        console.log("CLICKED")
    }

    render() {

        return (
            <div>
                <div className='container'>
                    <br />
                    <br />
                    <h3 style={{
                        color: '#786e17'
                    }}>
                        An app that lets you network in-person
		            </h3>
                </div>
                <h1>Home</h1>
                <div style={{ width: '20%' }}>
                    <ProfileCard />
                </div>
                <meta></meta>
            </div>
        )
    }
}

export default Home;