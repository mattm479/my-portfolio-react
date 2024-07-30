import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <header>
            <div className={'name-container'}>
                <img src="./assets/images/avatar.png" alt="Matthew Miskov's Avatar" className="avatar"/>
                <h1 className={'name'}>Matthew Miskov</h1>
            </div>
            <div className={'nav-container'}>
                <Link to={'./pages/About-Me'}>About Me</Link>
                <Link to={'./pages/Portfolio'}>Portfolio</Link>
                <Link to={'./pages/Contact'}>Contact</Link>
                <Link to={'./pages/Resume'}>Resume</Link>
            </div>
        </header>
    );
}