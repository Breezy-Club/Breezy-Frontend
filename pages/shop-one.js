import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Shop/Banner';
import ShopVOne from '../components/Shop/ShopVOne';

class ShopOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <ShopVOne />

                <Footer />
            </React.Fragment>
        );
    }
}

export default ShopOne;