import { NavLink } from 'react-router-dom';

const NavbarAdmin = () => {
    return (
        <div>
            {/* Admin Page End */}
            <div className="container">
                <hr className="border border-2 opacity-50 m-0" style={{borderColor: "#D3AC48 !important"}}/>
                <div className="row mt-3 mb-4">
                    <div className="col-12">
            
                    <div className="d-flex justify-content-center align-items-center pb-2">
                        <nav style={{bsBreadcrumbDivider: "'|'"}} aria-label="breadcrumb">
                        <ol className="breadcrumb text-decoration-none fw-semibold">
                            <li className="breadcrumb-item"><NavLink to="./" style={{textDecoration: "none", color: "#D3AC48"}}>Data Admin</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="./datauser" style={{textDecoration: "none", color: "#D3AC48"}}>Data User</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="./dataproduk" style={{textDecoration: "none", color: "#D3AC48"}}>Data Produk</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="./datapesanan" style={{textDecoration: "none", color: "#D3AC48"}}>Data Pesanan</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="./datapembelian" style={{textDecoration: "none", color: "#D3AC48"}}>Data Pembelian</NavLink></li>
                        </ol>
                        </nav>
                    </div>
            
                    </div>
                </div>
            </div>
            {/* Admin Page End */}
        </div>
    )
}

export default NavbarAdmin;