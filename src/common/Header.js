import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div>
                <header className="headerClass">
                    <span className="headerLogo">Image Viewer</span>
                </header>
            </div>
        )
    }
}
export default Header;