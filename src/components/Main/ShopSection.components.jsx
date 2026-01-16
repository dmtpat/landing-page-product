import 'bootstrap/dist/css/bootstrap.min.css';
import Ducks from "../data/ducks"
import ShopCard from './ShopCard.components';


function ShopSection() {
    return (
        <div id='paperelle' className='bg-light text-center my-5 py-5'>
            <h2 className=' display-2 fw-semibold pt-5'>La collezione di paperelle</h2>
            <p className='fs-5 pb-4'>Una paperella per ogni stile di programmazione</p>
            <div className="container text-start">
                <div className="row ">
                    {Ducks.map((duck) => (
                        <div className="col-12 col-lg-4">
                            <ShopCard duck={duck} />
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}
export default ShopSection