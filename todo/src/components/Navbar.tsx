import React from "react";

const Navbar = () => {
    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <section className="uk-navbar-left">
                    <a href="#" className="uk-navbar-item uk-logo">To-Do</a>
                </section>
                <section className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#">
                                <span uk-icon="icon: plus; ratio 1.2"></span>
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    );
}

export default Navbar;