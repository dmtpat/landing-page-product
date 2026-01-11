import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faBandage } from '@fortawesome/free-solid-svg-icons'

import Questions from "../data/faqs.js"
import single_image from "../../assets/single-image2.png"

function Faqs() {
    return (
        <div className="container">
            <div className="row gy-4 text-center">
                <div className="col-12"><h2>FAQs</h2></div>

                <div className="col-6">
                    <img className='img-fluid' src={single_image} alt="" />
                </div>
                <div className="col-6 text-end">


                    <div class="accordion" id="accordionExample">

                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse show" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {Questions[0].title}
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse  show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {Questions[0].text}
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div class=" col-1 d-flex" >

                </div>
                <div className="col-3">
                    <div className="card border-0 p-4 text-center">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faMapPin} size="2xl" style={{ color: "#2E45CC", }} />
                            <h5 className="card-title fs-3"><strong>100% Prodotto di Qualità</strong></h5>
                            <p className="card-text">Abbiamo anche la possibilità di ritiro direttamente dallo stagno</p>
                        </div>
                    </div>
                </div>


                <div class=" col-1 d-flex" >
                    <div class="vr my-4"></div>
                </div>


                <div className="col-3">
                    <div className="card border-0 p-4  text-center">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faBagShopping} size="2xl" style={{ color: "#2E45CC", }} />
                            <h5 className="card-title fs-3"><strong>Spedizione Gratuita</strong></h5>
                            <p className="card-text">Dal magazzino alla scrivania</p>
                        </div>
                    </div>
                </div>


                <div class="col-1 d-flex" >
                    <div class="vr my-4"></div>
                </div>


                <div className="col-3">
                    <div className="card border-0 p-4  text-center">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faBandage} size="2xl" style={{ color: "#2E45CC", }} />
                            <h5 className="card-title fs-3"><strong>Rimborso garantito</strong></h5>
                            <p className="card-text">Ti rimborsiamo se la paperella fa quack</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faqs