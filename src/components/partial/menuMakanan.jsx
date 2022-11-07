import React from "react";
import { Link } from "react-router-dom";
import { getLabelMenu } from "../utils/datamenuMakanan";

const MenuMakanan = () => {
    
    const [menus] = React.useState(getLabelMenu());

    const menuMakanan = menus.filter((menu) => menu.title.toLowerCase());
    
    return (
        <div>
            {/* Menu Makanan Start */}
            <div className="container">
                <hr className="border border-2 opacity-50 m-0" style={{borderColor: "#D3AC48 !important"}}/>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="row my-2 mb-4">

                            <div className="col-5 col-md-3">
                                <div className="input-group">
                                    <button type="button" className="btn btn-primary border-light" style={{backgroundColor: "#D3AC48"}}>Cari</button>
                                    <input type="search" className="form-control" placeholder="Cari Makanan" aria-label="Search" aria-describedby="search-addon" width="10px"/>
                                </div>
                            </div>

                            <div className="d-block d-md-none col-5 offset-2">
                                <div className="dropdown d-flex justify-content-end pb-3">
                                <button className="btn btn-secondary dropdown-toggle border-light" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "#D3AC48"}}>
                                    Kategori
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: "10px"}}>
                                    <li><a className="dropdown-item" href="/">Ayam</a></li>
                                    <li><a className="dropdown-item" href="/">Gurame</a></li>
                                    <li><a className="dropdown-item" href="/">Sop</a></li>
                                    <li><a className="dropdown-item" href="/">Sate</a></li>
                                </ul>
                                </div>
                            </div>

                            <div className="col judul text-center m-0 mt-1">
                                <h4>Menu Makanan</h4>
                            </div>

                            <div className="d-none d-md-block col-md-3">
                                <div className="dropdown d-flex justify-content-end">
                                <button className="btn btn-secondary dropdown-toggle border-light" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "#D3AC48"}}>
                                    Tampilkan Kategori
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: "14px"}}>
                                    <li><a className="dropdown-item" href="/">Gurame</a></li>
                                    <li><a className="dropdown-item" href="/">Ayam</a></li>
                                    <li><a className="dropdown-item" href="/">Sop</a></li>
                                    <li><a className="dropdown-item" href="/">Sate</a></li>
                                </ul>
                                </div>
                            </div>

                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {menuMakanan.map((menu) => (
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
                    <div className="col-12 justify-content-center d-flex">
                        {/* <!-- <button type="button" className="btn text-white" style="background-color: #D3AC48;">Lihat Semua Menu</button> --> */}
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                <a className="page-link" style={{color: "#D3AC48"}} href="/" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                <li className="page-item"><a className="page-link" style={{color: "#D3AC48"}} href="/">1</a></li>
                                <li className="page-item"><a className="page-link" style={{color: "#D3AC48"}} href="/">2</a></li>
                                <li className="page-item"><a className="page-link" style={{color: "#D3AC48"}} href="/">3</a></li>
                                <li className="page-item">
                                <a className="page-link" style={{color: "#D3AC48"}} href="/" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Button Lihat Semua Menu End */}

            </div>
            {/* Menu Makanan End */}
        </div>
    )
}

export default MenuMakanan;