const ProjectItem = ({ imageSrc, header, subheader, text, link }) => {
    return (
        <div className="item">
            <div className="testimonials-thumb d-flex">
                <div className="testimonials-info" style={testimonialsInfoStyle}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={imageSrc} style={imageStyle} alt="project image" />
                    </a>
                    <h6 className="mb-0">{header}</h6>
                    <span>{subheader}</span>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

const testimonialsInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
}

const imageStyle = {
    margin: 'auto',
    maxWidth: 500
}

export default ProjectItem;
