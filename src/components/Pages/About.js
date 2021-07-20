import React, { Component } from 'react';
import Header from '../Common/Header';
import Team from '../Common/Team';
import Timeline from '../Common/Timeline';
class About extends Component {
    render() {
        return (
            <div>
                <Header
                    title="About Us"
                    subtitle="It's really a great story"
                    buttonText="Tell Me More"
                    showButton={false}
                />
                <Timeline />
                <Team />
            </div>
        )
    }
}
export default About;