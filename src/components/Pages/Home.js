import React, { Component } from 'react';
import Header from '../Common/Header';
// import image from '../asset/img/header-bg.jpg';
// import '../assets/img/header-bg.jpg';
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                />
                <Services />
                <Portfolio />
            </div>
        );
    }
}

export default Home;

