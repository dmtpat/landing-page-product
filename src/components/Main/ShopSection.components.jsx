import 'bootstrap/dist/css/bootstrap.min.css';
import Ducks from "../data/ducks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function ShopSection() {
    return (
        <div className='bg-light text-center'>
            <h2 className='fs-1'>La collezione di paperelle</h2>
            <p>Una paperella per ogni stile di programmazione</p>
            <div className="container text-start">
                <div className="row ">
                    {Ducks.map((duck) => (
                        <div className="col-4">
                            <div className="card border-0 bg-light" key={1} >
                                <img src={duck.imageUrl} className="card-img-top rounded-0 " />
                                <div className="card-body">
                                    <h5 className="card-title "><strong>{duck.title}</strong></h5>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <p className="card-text text-success"><strong>$ {duck.price}</strong></p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}
export default ShopSection