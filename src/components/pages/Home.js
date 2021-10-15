import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import About from '../common/About';
import Team from '../common/Team';
import Contact from '../common/Contact';

class Home extends Component {
    render() {
        return(
            <div>
                <Header
                    title="Welcome to our studio!"
                    subtitle="It's nice to finally meet you!"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services />
                <Portfolio />
                <About />
                <Team />
                <Contact />
            </div>
        )
    }
}

export default Home;