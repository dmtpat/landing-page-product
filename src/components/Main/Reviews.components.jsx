import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from './Swiper.components.jsx'

function Reviews() {
    return (
        <div id="recensioni" className="container my-5 py-5">
            <div className="row text-center my-5">
                <h2 className='col col-12 display-2 fw-semibold'>Cosa ne pensano i nostri sviluppatori</h2>
                <div className="col">
                    <div class="row">
                        <div className="col-12">
                            <div className="container overflow-auto">
                                <div className="row flex-nowrap">
                                    <Swiper />
                                </div>
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