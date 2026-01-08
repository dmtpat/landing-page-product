import 'bootstrap/dist/css/bootstrap.min.css';
import style from './jumbotron.module.css'
import banner_image from "../../assets/banner-image.png";
function Jumbotron() {
    return (
        <div id="home" className="container-fluid mt-5">
            <div className="row row-col-2 row-col-sm-1 p-0 mt-5">
                <div className="col ">
                    <img src={banner_image} alt="" />
                </div>
                <div className={`col ${style.ms_banner_bg}`} >
                    <div className="container text-center">
                        <div className="row">
                            <h2 className='col'>Rubber Duck Debuggings</h2>
                        </div>
                        <div className="row ">
                            <p className='col'>Spiegare il codice a una paperella di gomma aiuta i programmatori a chiarire il pensiero e individuare errori nascosti!</p>
                        </div>
                        <div className="row ">
                            <a href="#" class="btn btn-outline-dark rounded-0 p-2 m-auto " role="button" data-bs-toggle="button" aria-pressed="true">Aquistala subito!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Jumbotron