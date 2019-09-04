import React, { Component } from 'react';
import Link from "next/link";
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

class TeamOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <section className="page-title-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Thank You</h2>
                            </div>
                        </div>
                    </div>

                    <div className="shape1"><img src={require('../images/shape1.png')} alt="img" /></div>
                    <div className="shape2"><img src={require('../images/shape2.png')} alt="img" /></div>
                    <div className="shape3"><img src={require('../images/shape3.png')} alt="img" /></div>
                    <div className="shape6"><img src={require('../images/shape6.png')} alt="img" /></div>
                    <div className="shape8 rotateme"><img src={require('../images/shape8.svg')} alt="shape" /></div>
                    <div className="shape9"><img src={require('../images/shape9.svg')} alt="shape" /></div>
                </section>
                <div className="thank-you-area">
                    <div className="container">
                        <h1>Your order has been confirmed.</h1>
                        <Link href="/">
                            <a className="btn btn-primary">Go Home</a>
                        </Link>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default TeamOne;
