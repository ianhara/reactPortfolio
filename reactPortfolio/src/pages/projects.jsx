import ProjectItem from '../components/projectItem'

const projectItems = [
    {
        imageSrc: "images/Screenshot 2024-06-26 192614.png",
        header: "Weather Forecast",
        subheader: "",
        text: "This project displays my ability to use CSS, API's, and simple javascript to display the weather"
    },
    {
        imageSrc: "images/testimonials/testimonial-image03.jpg",
        header: "name of project",
        subheader: "Product Manager",
        text: "this will be a different project"
    },
    {
        imageSrc: "images/testimonials/testimonial-image03.jpg",
        header: "Marie",
        subheader: "Marketing Consultant",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
    },
    // { imageSrc: , header: , subheader: , text: },
    // { imageSrc: , header: , subheader: , text: },
    // { imageSrc: , header: , subheader: , text: },
]


function Projects() {
    return <>
        <section className="testimonials section-padding" id="testimonials">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h3 className="mb-5 text-center">Projects</h3>
                        <div className="owl-carousel owl-theme" id="testimonials-carousel">
                            {
                                projectItems.map((p,i) =>
                                    <ProjectItem
                                        key={i}
                                        imageSrc={p.imageSrc}
                                        header={p.header}
                                        subheader={p.subheader}
                                        text={p.text}
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}
export default Projects