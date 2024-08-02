import {Link, useLocation} from "react-router-dom";

export default function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <header>
            <div className={'name-container'}>
                <h1 className={'name'}>Matthew Miskov</h1>
            </div>
            <div className={'nav-container'}>
                <Link to='/about-me' className={currentPage === "/" || currentPage === "/about-me" ? "nav-link active" : "nav-link"}>About Me</Link>
                <Link to='/portfolio' className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                <Link to='/contact' className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                <Link to='/resume' className={currentPage === "/resume" ? "nav-link active" : "nav-link"}>Resume</Link>
            </div>
        </header>
    );
}