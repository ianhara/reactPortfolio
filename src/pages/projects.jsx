import ProjectItem from '../components/projectItem'
//find a way to bring back the carousel
const projectItems = [
    {
        imageSrc: "images/recipe-roamer.png",
        header: "Recipe Roamer",
        subheader: "A unique recipe creation project",
        text: "Recipe roamer is a tool to create a recipe from odd ingredients you enter as well as locate specific foods.",
        link: "https://octozek.github.io/RecipeRoamer/"
    },
    {
        imageSrc: "images/weather-forecast.png",
        header: "Weather Forecast",
        subheader: "Quick forecasting tool using city and state",
        text: "This beginning stage project displays my ability to use CSS, API's, and simple javascript to display the weather",
        link:"https://ianhara.github.io/Weather/"
    },
    {
        imageSrc: "images/e-auto-care.png",
        header: "E-Auto-Care",
        subheader: "full stack car service scheduling platform",
        text: "leveraging mysql for database users can log in and view their profile and vehicles with services and appointment times",
        link: "https://e-auto-care-6acb9e4162bf.herokuapp.com/"
    },
    // { imageSrc: "", 
    //     header:"" , 
    //     subheader:"" , 
    //     text: "",
    // link: ""},
 
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
                                        {...p}
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