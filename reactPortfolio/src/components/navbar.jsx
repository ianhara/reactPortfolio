function Navbar(){
    return<>
     <nav className="navbar navbar-expand-lg">
        <div className="container">

            <a className="navbar-brand" href="#">
                Ian's Portfolio
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#intro" className="nav-link smoothScroll">Introduction</a>
                    </li>

                    <li className="nav-item">
                        <a href="#about" className="nav-link smoothScroll">About Me</a>
                    </li>

                    <li className="nav-item">
                        <a href="#testimonials" className="nav-link smoothScroll">Work</a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" className="nav-link smoothScroll">Contact</a>
                    </li>
                </ul>

            </div>

        </div>
    </nav>
    </>
}
export default Navbar