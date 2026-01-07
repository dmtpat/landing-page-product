import 'bootstrap/dist/css/bootstrap.min.css';
import invisible from "../../assets/invisible.png"
import Jumbotron from "./Jumbotron";
function Main() {
    return (
        <main>
            <Jumbotron />
            <div className='container'>
                <div className="row">
                    <div className="col-4 container text-center">
                        <div className="row"><div className="col"></div></div>
                        <div className="row"><div className="col"></div></div>
                        <div className="row"><div className="col"></div></div>
                    </div>
                    <div className="col-4">
                        <img src={invisible} alt="" />
                    </div>
                    <div className="col-4 container text-center">
                        <div className="row"><div className="col"></div></div>
                        <div className="row"><div className="col"></div></div>
                        <div className="row"><div className="col"></div></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main