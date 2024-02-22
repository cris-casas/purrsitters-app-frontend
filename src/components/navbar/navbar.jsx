import { Outlet, Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return (

        <div className="container-fluid">
            <Link className="logo" to="/">
                <img src="./src/assets/img/logo.svg" alt="Logo" width="450" style={{ marginLeft: "10px", marginTop: "10px" }} />
            </Link>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">




                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <div className="navbar-nav ml-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Aboutus">sobre nosotros</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Service">servicios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/BecomeAcaregiver">hazte cuidador</Link>
                                </li>

                            </ul>

                        </div>

                        <div className="icono">
                            <span className="material-icons" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                            </svg></span>
                            <span className="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg></span>
                            <span className="material-icons"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg></span>
                        </div>
                


                    </div>

                </div>
            </nav>
            <Outlet />

        </div>

    )
}

export default Navbar