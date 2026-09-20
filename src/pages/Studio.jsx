import "../styles/studio.css"
import img1 from "../assets/studio.jpg"
import img2 from "../assets/studioPT.jpg"
import img3 from "../assets/studioM.webp"

function Studio({id}) {
    return (
        <section id={id} className="studio">

            <div className="studio-header">
                <span>STUDIO</span>

                <h1>
                    A space to <em>move,</em>
                    <br />
                    breathe & reconnect.
                </h1>
            </div>


            <div className="studio-intro">
                <p>
                    Step into a calm, welcoming environment designed to help
                    you slow down, focus on your movement, and make time for
                    yourself.
                </p>

                <p>
                    Our studio is thoughtfully designed with a warm,
                    minimalist atmosphere where every session feels personal
                    and intentional.
                </p>
            </div>


            <div className="studio-expect">

                <h2>What you can expect.</h2>

                <div className="studio-cards">

                    <div className="studio-card">
                        <span>01</span>
                        <img src={img1} alt="" className="img1"/>
                        <h3>Calm Environment</h3>
                        <p>
                            A peaceful space away from the everyday.
                        </p>
                    </div>

                    <div className="studio-card">
                        <span>02</span>
                        <img src={img2} alt="" className="img1"/>
                        <h3>Personal Attention</h3>
                        <p>
                            Small, focused sessions designed around you.
                        </p>
                    </div>

                    <div className="studio-card">
                        <span>03</span>
                        <img src={img3} alt="" className="img1"/>
                        <h3>Purposeful Movement</h3>
                        <p>
                            Equipment and space chosen to support your practice.
                        </p>
                    </div>

                </div>
            </div>


            <div className="studio-footer">
                <h2>
                    Your space to move.
                    <br />
                    <em>Your time to reconnect.</em>
                </h2>
            </div>

        </section>
    );
}

export default Studio;