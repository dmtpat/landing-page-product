import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'




function ReviewCard(props) {
    const review = props.review;

    return (
        <div id={review.id} className=" col col-4 pt-4 pb-4 px-5 h-100 " >
            <p className="p-5">"{review.text}"</p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0 pb-0 mt-auto pt-auto">
                <li><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /></li>
                <li><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /></li>
                <li><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /></li>
                <li><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /></li>
                <li><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /></li>
            </ul>
            <h5 className="mb-3 mt-auto pe-0 pt-auto">{review.author} - {review.date}</h5>
        </div>

    )
}
export default ReviewCard