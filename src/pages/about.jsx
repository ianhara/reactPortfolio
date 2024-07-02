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
                        <h3>Skills</h3>
                        <p>java JavaScript CSS HTML Bootstrap Jquery React MongoDB SQL </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Employment</h3>
                        <p>Computer Science student at UNCG 2018-2020
                            Intern at TBM consulting firm as business analyst support.2021-2022.
                            server in upscale dining 2022-Currently Employed
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Hobbies/Interests</h3>
                        <p>I am a rock climber and a skiier I love the outdoors and also enjoy long distance running.</p>
                    </div>
                </div>
            </div>
        </section>

    </>
}
export default About