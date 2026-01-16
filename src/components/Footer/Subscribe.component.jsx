import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Subscribe() {
    return (
        <div id='newsletter' className="container-fluid text-center bg-light mt-5 py-5">
            <div className="row">
                <div className="col-12 col-lg-3 m-auto">
                    <h2 className='fs-1 fw-bolder'>Iscriviti per rimanere aggiornato</h2>
                    <p>Iscriviti alla nostra news letter per rimanere aggiornato su sconti e novità</p>
                    <form name="contact" method="POST" data-netlify="true" className="px-5 px-lg-0 mx-5 px-lg-0">
                        <div className="input-group mb-0 px-5 px-lg-0 mx-5 px-lg-0">
                            <input type="mail" className="form-control border-0 bg-light" name="newsletter-mail" placeholder="Lascia la tua mail qui..." aria-label="email" aria-describedby="basic-addon1" />
                            <button class="btn pr-0 mr-0 pr-5 pr-lg-0 mr-5 pr-lg-0" type="submit" id="button-addon2">
                                <FontAwesomeIcon icon={faPaperPlane} size="2xl" style={{ color: "#04DF6C", }} />
                            </button>
                        </div>
                        <hr className='mt-0 px-5 px-lg-0 mx-5 px-lg-0' />
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-3 m-auto">
                    <a href="##" className="btn btn-outline-secondary border-2 disabled py-3 rounded-circle mx-1" role="button" aria-disabled="true">
                        <FontAwesomeIcon icon={faFacebookF} size="lg" style={{ color: "#04DF6C", }} />
                    </a>
                    <a href="#" className="btn btn-outline-secondary border-2 disabled py-3 rounded-circle mx-1" role="button" aria-disabled="true">
                        <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#04DF6C", }} />
                    </a>
                    <a href="#" className="btn btn-outline-secondary border-2 disabled py-3 rounded-circle mx-1" role="button" aria-disabled="true">
                        <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#04DF6C", }} />
                    </a>
                    <a href="#" className="btn btn-outline-secondary border-2 disabled py-3 rounded-circle mx-1" role="button" aria-disabled="true">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{ color: "#04DF6C", }} />
                    </a>
                    <a href="#" className="btn btn-outline-secondary border-2 disabled  py-3 rounded-circle mx-1" role="button" aria-disabled="true">
                        <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#04DF6C", }} />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Subscribe