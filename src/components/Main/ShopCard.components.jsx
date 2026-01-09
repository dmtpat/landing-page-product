import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ShopCard(props) {
    const duck = props.duck;
    return (
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
    )
}
export default ShopCard