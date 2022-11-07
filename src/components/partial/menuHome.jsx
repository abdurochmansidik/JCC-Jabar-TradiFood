import React from "react";
import { Link } from 'react-router-dom'
import { getLabelMenu } from "../utils/datamenuMakanan";

const MenuHome = () => {

    const [menus] = React.useState(getLabelMenu());

    const MenuHome = menus.filter((menu) => menu.title.toLowerCase());

    return (
        <div>
            {/* Menu Makanan Start */}
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12">

                        <div className="judul text-center pb-3">
                            <h4>Menu Makanan</h4>
                         </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {MenuHome.map((menu) => (
                            <div key={menu.id}>
                                <div className="col">
                                    <div className="card bg-light" style={{height: "23rem"}}>
                                        <img src={menu.imageUrl} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title text-center fw-semibold" style={{color: "#101010", fontSize: "16px"}}><Link to={`/menu/${menu.id}`} style={{textDecoration: "none"}}>{menu.title} </Link> </h5>
                                            <p className="card-text" style={{fontSize: "14px"}}>{menu.description}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center pb-2 mb-2 m-3">
                                            <span className="text-dark fw-semibold text-decoration-none">{menu.harga}</span>
                                            <a href="/" className="fw-semibold text-decoration-none" style={{color: "#D3AC48"}}>{menu.label}</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            ))}
                        </div>

                    </div>
                </div>

                {/* Button Lihat Semua Menu Start */}
                <div className="row mt-4">
                    <div className="d-grid col-6 col-md-3 mx-auto">
                        <Link to="/menu" type="button" className="btn text-white" style={{backgroundColor: "#D3AC48"}}>Lihat Semua Menu</Link>
                    </div>
                </div>
                {/* Button Lihat Semua Menu End */}

            </div>
            {/* Menu Makanan End */}
        </div>
    )
}

export default MenuHome;

