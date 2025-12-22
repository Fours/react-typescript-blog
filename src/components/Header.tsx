import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            Header
            <Link to="/">Articles</Link>
            <Link to="/authors">Authors</Link>
            <Link to="/post">Post</Link>
            <hr />
        </header>
    )
}