import 'bootstrap/dist/css/bootstrap.min.css';
import style from './jumbotron.module.css'
import banner_image from "../../assets/banner-image.png";
function Jumbotron() {
    return (
        <div id="home" className="container-fluid mt-5">
            <div className="row row-col-2 row-col-sm-1 p-0">
                <div className="col col-6">
                    <img src={banner_image} alt="" />
                </div>
                <div className={`col ${style.ms_banner_bg}`} >
                    <div className="container align-middle text-center">
                        <div className="row p-5 m-5">
                            <h2 className="col-12 display-2 fw-bolder">Rubber Duck Debuggings</h2>
                            <p className="col-12 px-5 py-5">Spiegare il codice a una paperella di gomma aiuta i programmatori a chiarire il pensiero e individuare errori nascosti!</p>
                            <div className="col-12">
                                <a href="#" class="btn btn-outline-dark rounded-0 p-2 px-5 m-auto " role="button" data-bs-toggle="button" aria-pressed="true">Aquistala subito!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Jumbotron