import { useEffect, useRef, useState } from "react";
import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";

const HeaderOne = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSearchPopupOpen = () => {
        setIsPopupOpen(true);
    };
    const handleSearchPopupClose = () => {
        setIsPopupOpen(false);
    };

    const handleMobileMenuOpen = () => {
        setIsMenuOpen(true);
    };
    const handleSideBarClose = () => {
        setIsSideBarOpen(false);
    };

    const handleSideBarOpen = () => {
        setIsSideBarOpen(true);
    };

    return (
        <div className="header-decoration">
            {/* Search Popup */}
            <div className={`popup-search-box ${isPopupOpen ? "show" : ""}`}>
                <button onClick={handleSearchPopupClose} className="searchClose">
                    <i className="ri-close-line"></i>
                </button>
                <form action="#">
                    <input type="text" placeholder="Search Here.." />
                    <button type="submit">
                        <i className="ri-search-line"></i>
                    </button>
                </form>
            </div>

            {/* Sidebar */}
            <div className={`sidemenu-wrapper ${isSideBarOpen ? "show" : ""}`}>
                <div ref={sidebarRef} className="sidemenu-content">
                    <button onClick={handleSideBarClose} className="closeButton sideMenuCls">
                        <i className="ri-close-line"></i>
                    </button>
                    <div className="widget widget-about footer-widget">
                        <div className="footer-logo footer-img">
                            <a href="#home">
                                <img src="/logo.png" alt="logo" width={100} height={50} />
                            </a>
                        </div>
                        <p className="about-text mb-4">
                            A small business can be better than a big business because of agility and
                            adaptability due to their size and scale.
                        </p>

                        <p className="footer-text">
                            <a href="tel:851555961658">
                                <i className="ri-phone-line space-right-sidebar-icon"></i>
                                +85 155 596 1658
                            </a>
                        </p>
                        <p className="contact-text">
                            <i className="ri-map-pin-line space-right-sidebar-icon"></i> Losangle,
                            Street Road 24, New York, USA - 67452
                        </p>
                        <p className="footer-text">
                            <a href="mailto:support@gmail.com">
                                <i className="ri-mail-line space-right-sidebar-icon"></i>
                                support@gmail.com
                            </a>
                        </p>
                        <div className="social-btn style3 mt-30">
                            <a href="https://www.twitter.com/">
                                <i className="ri-twitter-x-line"></i>
                            </a>
                            <a href="https://instagram.com/">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://facebook.com/">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://linkedin.com/">
                                <i className="ri-linkedin-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            {/* Header */}
            <header className="nav-header header-layout1 header-decoration">
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                            <div className="col-auto d-none d-lg-block">
                                <div className="header-top-left">
                                    <div className="header-links">
                                        <ul>
                                            <li>
                                                <div className="social-links">
                                                    <a href="https://www.facebook.com/">
                                                        <i className="ri-facebook-fill"></i>
                                                    </a>
                                                    <a href="https://www.twitter.com/">
                                                        <i className="ri-twitter-x-fill"></i>
                                                    </a>
                                                    <a href="https://www.instagram.com/">
                                                        <i className="ri-instagram-line"></i>
                                                    </a>
                                                    <a href="https://www.linkedin.com/">
                                                        <i className="ri-linkedin-fill"></i>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-top-right">
                                    <div className="header-links ps-0">
                                        <ul>
                                            <li>
                                                <i className="ri-time-line"></i>Mon - Sat / 8am : 12pm
                                            </li>
                                            <li>
                                                <i className="ri-map-pin-line"></i>
                                                <a href="https://www.google.com/maps">
                                                    96 Jones Street, New York, USA
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Nav */}
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    <div className="menu-area">
                        <div className="header-navbar-logo">
                            <a href="#home">
                                <img src="/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="logo-bg"></div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-start justify-content-between">
                                <div className="col-auto d-xxl-none d-block">
                                    <div className="header-logo">
                                        <a href="#home">
                                            <img src="/logo.png" alt="logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-auto menu-bar ms-xxl-0">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li>
                                                <a href="#home">HOME</a>
                                            </li>
                                            <li>
                                                <a href="#about">ABOUT</a>
                                            </li>
                                            <li>
                                                <a href="#connect">CONNECT</a>
                                            </li>
                                            <li>
                                                <a href="#why">WHY US</a>
                                            </li>
                                            <li>
                                                <a href="#process">PROCESS</a>
                                            </li>
                                            <li>
                                                <a href="#project">PROJECTS</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button
                                            onClick={handleMobileMenuOpen}
                                            type="button"
                                            className="menu-toggle icon-btn"
                                        >
                                            <i className="ri-menu-line"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-auto d-xl-block d-none space-left">
                                    <div className="header-button">
                                        <a href="#contact" className="btn header-one-extra-style">
                                            GET IN TOUCH <i className="ri-arrow-right-up-line"></i>
                                        </a>
                                        <button
                                            onClick={handleSearchPopupOpen}
                                            type="button"
                                            className="search-btn searchBoxToggler simple-icon"
                                        >
                                            <i className="ri-search-line"></i>
                                        </button>
                                        <button
                                            onClick={handleSideBarOpen}
                                            type="button"
                                            className="sidebar-btn sideMenuToggler simple-icon"
                                        >
                                            <i className="ri-grid-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="navbar-right-desc d-xxl-flex d-none"
                            style={{ backgroundImage: "url('/assets/img/bg/header-1-bg.png')" }}
                        >
                            <div className="icon-btn">
                                <i className="ri-phone-fill"></i>
                            </div>
                            <div className="navbar-right-desc-details">
                                <h6 className="title">Call us any time</h6>
                                <a className="link" href="tel:+2590256215">
                                    +123 556 8824
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderOne;
