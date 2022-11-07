const Footer = () => {
    return (
        <div>
            {/* Footer Start Start */}
            <footer className="d-flex flex-wrap justify-content-between align-items-center pb-4 pt-4 border-top bg-light">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 justify-content-center justify-content-md-start d-flex">
                    <span className="mb-3 mb-md-0 fw-semibold">&copy; 2022 - Jabar TradiFood | All rights reserved.</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="www.facebook.com"><svg className="bi" style={{color:"#D3AC48", fill:"currentColor", width:"24", height:"24"}}>
                    <use to="#facebook" />
                        </svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="www.instagram.com"><svg className="bi" style={{color:"#D3AC48", fill:"currentColor", width:"24", height:"24"}}>
                    <use to="#instagram" />
                        </svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="www.twitter.com"><svg className="bi" style={{color:"#D3AC48", fill:"currentColor", width:"24", height:"24"}}>
                    <use to="#twitter" />
                    </svg></a></li>
                    </ul>
                </div>
                </div>
            </footer>
            {/* Footer Start End */}
        </div>
    )
}

export default Footer;