import 'bootstrap/dist/css/bootstrap.min.css';
import style from './jumbotron.module.css'
import banner_image from "../../assets/banner-image.png";
function Jumbotron() {
    return (
        <div className="w-100">
            <div className="row row-cols-2 m-0">
                <div className="">
                    <img src={banner_image} alt="" />
                </div>
                <div className={style.ms_banner_bg} >
                    <div className="container">
                        <div className="row align-items-center">
                            <h2 className='col'>Rubber Duck Debuggings</h2>
                        </div>
                        <div className="row align-items-center ">
                            <p className='col'>Spiegare il codice a una paperella di gomma aiuta i programmatori a chiarire il pensiero e individuare errori nascosti!</p>
                        </div>
                        <div className="row align-items-center">
                            <button className='col'>AQUISTALA SUBITO!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Jumbotron