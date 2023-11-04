import { useRef } from "react"
import {AiOutlineMenu} from "react-icons/ai"
import {FaTimes} from "react-icons/fa"
import "../styles/main.css"
import { Link } from "react-router-dom";
export default function Navbar() {
    const navRef = useRef();

    const showNavBar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to = "/projects">Projects</Link>
                </li>
                <li>
                    <Link to = "/partners">Partners</Link>
                </li>
                <li>
                    <Link to = "/about">About Us</Link>
                </li>
                <li>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes/>
                    </button>
                </li>
            </ul>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
            <AiOutlineMenu/>
        </button>
    </header>
  )
}
