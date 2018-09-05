import React , {Component} from 'react';
import 'bulma/css/bulma.css'


class Nav extends Component {
render(){
return (
  <div>
<nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="">Fateen</a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
                </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Features</a>
                    <a className="navbar-item">Team</a>
                    <a className="navbar-item">Archives</a>
                    <a className="navbar-item">Help</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Account</a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">Dashboard</a>
                            <a className="navbar-item">Profile</a>
                            <a className="navbar-item">Settings</a>
                            <hr className="navbar-divider"></hr>
                            <div className="navbar-item">Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>
);

}


}




export default Nav;
