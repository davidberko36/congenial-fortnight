const Navbar = () => {

    return(
    <nav className="navbar">
        <div className="links">
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/gradebook">Grades</a>
            <a href="/FAQ">FAQ</a>
        </div>
    </nav>
    );
}

export default Navbar;