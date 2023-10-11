import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
// import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);
    // const [button, setButton] = useState(true);

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false)
    //     }else{
    //         setButton(true);
    //     }
    // }

    // window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src="logo.png" alt="logo" className="logo-img" />
                    <Link to="/" className="navbar-logo">blueberrypi.studio</Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hobbies" className="nav-links" onClick={closeMobileMenu}>
                                Hobbies
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </>
  )
}

export default Navbar;