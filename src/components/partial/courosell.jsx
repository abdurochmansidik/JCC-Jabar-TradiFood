import Courosell1 from '../../asset/img/courosell/sunda-food-1.jpg'
import Courosell2 from '../../asset/img/courosell/sunda-food-2.jpg'
import Courosell3 from '../../asset/img/courosell/sunda-food-3.jpg'

const Courosell = () => {
    return (
        <div>
            {/* Corousel Start */}
            <div className="container">
            <hr className="border border-2 opacity-50 m-0" style={{borderColor: "#D3AC48 !important"}}/>
                <div className="row mt-3">
                <div className="col-12">

                    <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner rounded-2">
                        <div className="carousel-item active">
                        <img src={Courosell1} className="d-block w-100" alt="..." height="280px"
                            style={{objectFit:"cover"}}/>
                        </div>
                        <div className="carousel-item">
                        <img src={Courosell2} className="d-block w-100" alt="..." height="280px"
                            style={{objectFit:"cover"}}/>
                        </div>
                        <div className="carousel-item">
                        <img src={Courosell3} className="d-block w-100" alt="..." height="280px"
                            style={{objectFit: "cover"}}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                </div>
                </div>
            </div>
            {/* Corousel End */}
        </div>
    )
}

export default Courosell;