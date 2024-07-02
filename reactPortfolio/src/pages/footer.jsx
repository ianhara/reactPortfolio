function Footer() {
    return <>
        <section className="section-padding"
            style={{
                backgroundColor: 'lightgrey'
            }}
            id="footer">
            <div className="container">
                <div className="row">



                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',



                    }} className="col-12">
                        <h3 className="mb-5 text-center">Links</h3>
                        <div className="social-links mt-2">
                            <a href="https://fb.com/tooplate" rel="noopener" className="fab fa-facebook"></a>
                            <a href="#" rel="noopener" className="fab fa-twitter"></a>
                            <a href="#" rel="noopener" className="fab fa-instagram"></a>
                            <a href="https://www.linkedin.com/in/ian-h-62737230a/" rel="noopener" className="fab fa-linkedin"></a>
                            <a href="#" rel="noopener" className="fab fa-youtube"></a>
                            </div>
                        <p className="copyright-text mt-5 pt-3">Copyright &copy; 2020 Ian Resume Page</p>
                    </div>



                </div>
            </div>
        </section >
    </>
}
export default Footer