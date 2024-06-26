function About() {
    return <>
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-12">
                        <h3 className="mb-4">This is Ians Resume</h3>

                      

                        <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                            <li><strong>Full Name :</strong> Ian Haralalka </li>

                            <li><strong>Date of Birth:</strong> 1 January 1997</li>

                            <li><strong>Website :</strong> github.com/ianhara</li>

                            <li><strong>Email :</strong> ianhara97@gmail.com</li>
                        </ul>
                    </div>

                    <div className="col-lg-5 mx-auto col-md-6 col-12">
                        <img src="images/true-agency.jpg" className="about-image img-fluid" alt="Ben's Resume HTML Template" />
                    </div>

                </div>
                <div className="row about-third">
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Projects</h3>
                        <p>Sed eu risus tincidunt, finibus dolor non, gravida ex. Donec lacinia mi nec erat tempus, vel consectetur ante scelerisque. Ut blandit, risus in venenatis ultricies, lacus tellus fermentum.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Development</h3>
                        <p>Cras et nisl vestibulum, accumsan elit sed, pretium enim. Vestibulum in condimentum magna. Maecenas quam magna, iaculis eu turpis et, commodo pulvinar leo.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Capabilities</h3>
                        <p>Duis at mollis leo, venenatis congue ex. Cras urna dui, gravida euismod lectus et, cursus tempor nulla. Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                    </div>
                </div>
            </div>
        </section>

    </>
}
export default About