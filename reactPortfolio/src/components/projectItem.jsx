

const projectItem = ({ imageSrc, header, subheader, text }) => {

    // images/testimonials/testimonial-image03.jpg


    return (
        <div className="item">
            <div className="testimonials-thumb d-flex">
                <div className="testimonials-info" style={testimonialsInfoStyle}>
                    <img src={imageSrc} style={imageStyle} alt="testimonials image" />
                    <h6 className="mb-0">{header}</h6>
                    <span>{subheader}</span>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}


const testimonialsInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}

const imageStyle = {
    margin: 'auto',
    maxWidth: 500
}

export default projectItem