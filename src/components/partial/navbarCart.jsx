import { NavLink } from "react-router-dom";

const NavbarCart = () => {
    return (
        <div>
            {/* Cart Page Start */}
            <div className="container">
            <hr className="border border-2 opacity-50 m-0" style={{borderColor: "#D3AC48 !important"}}/>
                <div className="row mt-3 mb-5">
                <div className="col-12">

                    <div className="d-flex justify-content-center align-items-center pb-2">
                        <nav style={{bsBreadcrumbDivider: "'|'"}} aria-label="breadcrumb">
                            <ol className="breadcrumb text-decoration-none fw-semibold">
                            <li className="breadcrumb-item"><NavLink to="./" style={{textDecoration: "none", color: "#D3AC48"}}>Keranjang Belanja</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="./carttagihan" style={{textDecoration: "none", color: "#D3AC48"}}>Detail Tagihan</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="./cartpesanan" style={{textDecoration: "none", color: "#D3AC48"}}>Pesanan Selesai</NavLink></li>
                            </ol>
                        </nav>
                    </div>

                </div>
                </div>
            </div>
            {/* Cart Page End */}
        </div>
    )
}

export default NavbarCart;