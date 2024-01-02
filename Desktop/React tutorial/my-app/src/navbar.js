const Navbar = () => {
    const link = "/create";
    return ( 
        <nav className="navbar">
            <h1>The Grade reporting system</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href={link}>New Blog</a>
                <a href="/">Test</a>
            </div>
        </nav>
     );
}
 
export default Navbar;