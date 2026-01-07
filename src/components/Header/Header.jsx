import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.module.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header >
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid  ">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Rubber Duck" />
                    </a>
                    <div className="me-2">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-primary" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">I punti di forza</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Recensioni</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Paperelle</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Newsletter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


        </header>

    );
}
export default Header