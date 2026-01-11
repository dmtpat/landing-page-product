import 'bootstrap/dist/css/bootstrap.min.css';
import Ducks from "../data/ducks"
import ShopCard from './ShopCard.components';


function ShopSection() {
    return (
        <div id='paperelle' className='bg-light text-center'>
            <h2 className='fs-1'>La collezione di paperelle</h2>
            <p>Una paperella per ogni stile di programmazione</p>
            <div className="container text-start">
                <div className="row ">
                    {Ducks.map((duck) => (
                        <div className="col-4">
                            <ShopCard duck={duck} />
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}
export default ShopSection