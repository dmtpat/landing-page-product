import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./main.module.css"
import Jumbotron from "./Jumbotron.components";
import Points from "./Points.components";
import ReviewsSection from "./Reviews.components";
import ShopSection from './ShopSection.components';
import Faqs from "./Faqs.components.jsx"

function Main() {
    return (
        <main>
            <Jumbotron />
            <Points />
            <ReviewsSection />
            <ShopSection />
            <Faqs />
        </main>
    )
}
export default Main