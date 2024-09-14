 import './header.css';  
 import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">Edulamp</div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pages">Pages</Link></li>
                    <li><Link to="/course">Course</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/features">Features</Link></li>
                </ul>
            </nav>
            <div className="auth-buttons">
            <Link to="/signin">
                    <button className="login">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="signup">Sign up</button>
                </Link>
            </div>
        </header>
    );
}
