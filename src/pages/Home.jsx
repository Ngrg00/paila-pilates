import Header from "./Header"
import img from "../assets/home-img.jpg"
import "../styles/home.css"

function Home({id}) {
    return<section id={id} className="home">
             <img src={img} alt=""  className="home_img"/>

            <div className="text">
                <p className="p1">Move.</p>
                <p className="p2">Strengthen.</p>
                <p className="p3">Transform.</p>
                <p className="p4">Join us to transform your mind and body.</p>

                <button>Book now →</button>
            </div>
        </section>
}
export default Home