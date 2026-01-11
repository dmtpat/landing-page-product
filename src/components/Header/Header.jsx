import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.module.css'
import logo from '../../assets/logo.png'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <header >
            <Nav className="navbar navbar-expand-lg fixed-top  bg-white mb-5 " id="navbar-example2" >
                <div className="container-fluid  ">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Rubber Duck" />
                    </a>
                    <div className="me-2">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="nav nav-pills navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#punti_di_forza">I punti di forza</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#recensioni">Recensioni</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#paperelle">Paperelle</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#faqs">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#newsletter">Newsletter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Nav>
            <div className="container-fluid  ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Rubber Duck" />
                </a>
            </div>
        </header>

    );
}
export default Header