import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.module.css"
import Jumbotron from "./Jumbotron.components";
import Points from "./Points.components";
import ReviewsSection from "./Reviews.components";

function Main() {
    return (
        <main>
            <Jumbotron />
            <Points />
            <ReviewsSection />
        </main>
    )
}
export default Main