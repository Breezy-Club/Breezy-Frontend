import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../../utils/ActiveLink';
import SideDrawer from './SideDrawer';
import SearchForm from './SearchForm';

class Navbar extends React.Component {
    _isMounted = false;

    state = {
        drawer: false,
        searchForm: false,
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleDrawer = () => {
        this.setState( prevState => {
            return {
                drawer: !prevState.drawer
            };
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { pathname } = this.props.router;
        let { products } = this.props;

        let layOutCls = '';
        let logo = require('../../images/logo.png');
        if (pathname == '/digital-marketing'){
            layOutCls = 'marketing-navbar';
            logo = require('../../images/logo2.png');
        }

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        
        return (
            <React.Fragment>
                <header id="header">
                    <div id="navbar" className={`crake-nav ${layOutCls}`}>
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/saas">
                                    <a className="navbar-brand">
                                        <img src={logo} alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav nav ml-auto">
                                        <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Home</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/saas">
                                                        <a>SaaS Landing</a>
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <Link activeClassName="active" href="/app">
                                                        <a>App Landing</a>
                                                    </Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link activeClassName="active" href="/digital-marketing">
                                                        <a>Digital Marketing</a>
                                                    </Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link activeClassName="active" href="/product-landing">
                                                        <a>Product Landing</a>
                                                    </Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link activeClassName="active" href="/software-landing">
                                                        <a>Software Landing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/book-landing">
                                                        <a>Book Landing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/agency">
                                                        <a>Startup Agency</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/payment-processing">
                                                        <a>Payment Processing</a>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </li>
                                        
                                        <li className="nav-item"><a href="#" className="nav-link">Venue</a>
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Entertainment</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/about/about-one">
                                                                <a>Music</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/about/about-two">
                                                                <a>Queue up Technology</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/about/about-two">
                                                                <a>Featured Performances</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/features">
                                                        <a>Booking</a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/services">
                                                        <a>VIP Experience</a>
                                                    </Link>
                                                </li>
                                                
                                                <li>
                                                    <Link activeClassName="active" href="/gallery">
                                                        <a>Gallery</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Security</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/team/team-one">
                                                                <a>Dedicated Team</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/team/team-two">
                                                                <a>Spike free zone</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                {/* <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing/pricing-one">
                                                                <a>Pricing 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing/pricing-two">
                                                                <a>Pricing 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/pricing/pricing-three">
                                                                <a>Pricing 3</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li> */}

                                                {/* <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Portfolio</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-one">
                                                                <a>Portfolio 2 Columns</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-two">
                                                                <a>Portfolio 3 Columns</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/portfolio-three">
                                                                <a>Portfolio 4 Columns Wide</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/project-details">
                                                                <a>Portfolio asaDetails</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li> */}

                                                {/* <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Shop</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-one">
                                                                <a>Shop 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-two">
                                                                <a>Shop 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/shop-details">
                                                                <a>Shop Details</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/cart">
                                                                <a>Cart</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/checkout">
                                                                <a>Checkout</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li> */}

                                                {/* <li className="nav-item">
                                                    <Link activeClassName="active" href="#">
                                                        <a className="nav-link">Blog</a>
                                                    </Link>
                                                    <ul className="dropdown_menu">
                                                        <li>
                                                            <Link activeClassName="active" href="/blog/blog-one">
                                                                <a>Blog 1</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/blog/blog-two">
                                                                <a>Blog 2</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link activeClassName="active" href="/blog/blog-details">
                                                                <a>Blog Details</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li> */}

                                                {/* <li>
                                                    <Link activeClassName="active" href="/login">
                                                        <a>Login</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/signup">
                                                        <a>Sign Up</a>
                                                    </Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link activeClassName="active" href="/coming-soon">
                                                        <a>Coming Soon</a>
                                                    </Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link activeClassName="active" href="/error">
                                                        <a>404 Error</a>
                                                    </Link>
                                                </li> */}
                                                {/* <li>
                                                    <Link activeClassName="active" href="/faq">
                                                        <a>FAQ</a>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Catering</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-one">
                                                        <a>Menu</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-two">
                                                        <a>Gallery</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/portfolio-three">
                                                        <a>Deliveries</a>
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <Link activeClassName="active" href="/project-details">
                                                        <a>Don't party with an empty stomach</a>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Media</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/blog/blog-one">
                                                        <a>Follow our socials</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/blog/blog-two">
                                                        <a>Photo archives</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/blog/blog-details">
                                                        <a>Collab with us</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                        {/* <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Shop</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li>
                                                    <Link activeClassName="active" href="/shop-one">
                                                        <a>Shop 1</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/shop-two">
                                                        <a>Shop 2</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/shop-details">
                                                        <a>Shop Details</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/cart">
                                                        <a>Cart</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/contact">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mr-auto others-option">
                                    <ul className="navbar-nav">
                                        <li className="nav-item cart-wrapper">
                                            <Link activeClassName="active" href="/cart">
                                                <a>
                                                    <i className="icofont-shopping-cart cart-icon"></i>

                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="header-search-box">
                                            <Link activeClassName="active" href="#">
                                                <a 
                                                    onClick={e => {e.preventDefault();this.handleSearchForm();}}
                                                    title="Search"
                                                >
                                                    <i className="icofont-search-2"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div> 
                    </div>
                </header>

                {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ''}
                {this.state.searchForm ? <SearchForm onClick={this.handleSearchForm} /> : ''}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))
