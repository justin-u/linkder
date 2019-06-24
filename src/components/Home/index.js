import React from 'react';
import ProfileCard from '../ProfileCard';
//JS

class Home extends React.Component {
    HandleClick() { 
        console.log("CLICKED")
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <div style={{ width: '20%' }}>
                    <ProfileCard />
                </div>
            </div>
        )
    }
}

export default Home;