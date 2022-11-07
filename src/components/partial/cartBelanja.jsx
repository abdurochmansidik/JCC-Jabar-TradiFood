import { Link } from "react-router-dom";

const CartBelanja = () => {
    return (
        <div>
            {/* Judul Start */}
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="d-flex justify-content-between align-items-center pb-2">
                    <span className="text-dark fw-semibold text-decoration-none h5">Nama Makanan</span>
                </div>
                </div>
            </div>
            </div>
            {/* Judul End  */}

            {/* Cart */}
            <div className="container">
            <div className="row mt-3 mb-4">
                <div className="col-12">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-12 col-sm-12 hero-feature">
                    <div className="table-responsive" style={{paddingBottom: "220px"}}>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Ceklist</th>
                            <th scope="col" className="hidden-xs">Produk</th>
                            <th scope="col">Harga</th>
                            <th scope="col" className="td-qty align-content-center text-center">Jumlah</th>
                            <th scope="col">Total Harga</th>
                            <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 d-flex justify-content-end">
                        <Link type="button" to={"carttagihan"} className="btn btn-primary" style={{backgroundColor: "#D3AC48", border: "#D3AC48"}}>Detail Tagihan</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* End Cart */}
        </div>
    )
}

export default CartBelanja;