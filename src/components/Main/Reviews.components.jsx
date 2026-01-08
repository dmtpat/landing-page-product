import 'bootstrap/dist/css/bootstrap.min.css';
import Recensioni from "../data/reviews.js"
import ReviewCard from "./ReviewCard.components"

function Reviews() {
    return (
        <div id="recensioni" className="container">
            <div className="row text-center">
                <h2 className='col col-12'>Cosa ne pensano i nostri sviluppatori</h2>
                <div class="row">
                    <div className="col col-12">
                        <div className="container">
                            <div className="row">
                                <div className='carousel slide text-center'>
                                    <div class="d-flex justify-content-center mb-4">
                                        {Recensioni.map((review) => (
                                            <div class="carousel-item">
                                                <ReviewCard review={review} />
                                            </div>
                                        ))}
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
//  <div classNameNameName="card col-4" >

//                                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, distinctio excepturi, dolore eaque ipsa consectetur eligendi laboriosam alias quibusdam inventore molestiae eum quidem. Corrupti a iusto exercitationem voluptate ex.</p>
//                                                         <div classNameNameName="card-body">
//                                                             <p classNameNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                                                         </div>
//                                                     </div>
//                                                     <div classNameNameName="card col-4" >

//                                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, distinctio excepturi, dolore eaque ipsa consectetur eligendi laboriosam alias quibusdam inventore molestiae eum quidem. Corrupti a iusto exercitationem voluptate ex.</p>
//                                                         <div classNameNameName="card-body">
//                                                             <p classNameNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                                                         </div>
//                                                     </div>
//                                                     <div classNameNameName="card col-4" >

//                                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, distinctio excepturi, dolore eaque ipsa consectetur eligendi laboriosam alias quibusdam inventore molestiae eum quidem. Corrupti a iusto exercitationem voluptate ex.</p>
//                                                         <div classNameNameName="card-body">
//                                                             <p classNameNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//                                                         </div>
//                                                     </div>