import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <header>
            <div className={'name-container'}>
                <img src="/assets/images/avatar.png" alt="Matthew Miskov's Avatar" className="avatar"/>
                <h1 className={'name'}>Matthew Miskov</h1>
            </div>
            <div className={'nav-container'}>
                <Link to='/about-me' className="nav-link">About Me</Link>
                <Link to='/portfolio' className="nav-link">Portfolio</Link>
                <Link to='/contact' className="nav-link">Contact</Link>
                <Link to='/resume' className="nav-link">Resume</Link>
            </div>
        </header>
    );
}