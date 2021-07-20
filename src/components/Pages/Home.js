import React, { Component } from 'react';
import Header from '../Common/Header';
// import image from '../asset/img/header-bg.jpg';
// import '../assets/img/header-bg.jpg';

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
                    // image="../asset/img/header-bg.jpg"
                    // ../assets/img/header-bg.jpg
                    // image={image}    
                />
                {/* <header className="masthead">
                    <div className="container">
                        <div className="masthead-subheading">Welcome To Our Studio!</div>
                        <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                        <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
                    </div>
                </header> */}
            </div>
        );
    }
}

export default Home;

