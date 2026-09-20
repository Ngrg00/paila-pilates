import "../styles/about.css"

function About({id}) {
    return (
        <section id={id} className="about">
            <div className="about-heading">
                <span>ABOUT</span>
                <h2>Paila Pilates</h2>
            </div>

            <div className="about-content">
                <h1>
                    Put <em>yourself</em> first.
                </h1>

                <div className="about-text">
                    <p>
                        At Paila Pilates, we believe movement is more than
                        exercise — it’s a way to reconnect with your body,
                        build strength, and create balance in everyday life.
                    </p>

                    <p>
                        Our Pilates sessions are designed to help you move
                        with intention, strengthen from within, and feel
                        confident in your body.
                    </p>

                    <p>
                        Whether you're new to Pilates or looking to deepen
                        your practice, Paila provides a welcoming space where
                        every movement has purpose.
                    </p>
                </div>

                <div className="about-statement">
                    Your body.
                    <br />
                    Your movement.
                    <br />
                    <strong>Your first step.</strong>
                </div>
            </div>
        </section>
    );
}

export default About