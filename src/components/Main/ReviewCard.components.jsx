import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';




function ReviewCard(props) {
    const review = props.review;
    return (
        <div id={review.id} className=" col col-4" >
            <p className="text-muted">{review.text}</p>
            {/* <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fa-solid fa-star" style="color: #FFD43B;"></i></li>
                <li><i className="fa-solid fa-star" style="color: #FFD43B;"></i></li>
                <li><i className="fa-solid fa-star" style="color: #FFD43B;"></i></li>
                <li><i className="fa-solid fa-star" style="color: #FFD43B;"></i></li>
                <li><i className="fa-solid fa-star" style="color: #FFD43B;"></i></li>
            </ul> */}
            <h5 className="mb-3">{review.author} - {review.date}</h5>
        </div>
    )
}
export default ReviewCard