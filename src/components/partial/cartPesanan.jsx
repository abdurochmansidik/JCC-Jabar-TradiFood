// import { Link } from "react-router-dom";
import LogoBank1 from '../../asset/img/logoBank/bank-bni.png'
import LogoBank2 from '../../asset/img/logoBank/bank-bca.png'
import LogoBank3 from '../../asset/img/logoBank/bank-bri.png'
import LogoBank4 from '../../asset/img/logoBank/bank-mandiri.png'
import LogoBank5 from '../../asset/img/logoBank/bank-permata.png'

const CartPesanan = () => {
    return (
        <div>
            {/* Judul Start */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center pb-2">
                            <span className="text-dark fw-semibold text-decoration-none h5">Buat Pesanan</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Judul End  */}

            {/* Buat Pesanan Start */}
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-dark fw-semibold h6">Produk</p>
                    <p className="text-dark fw-semibold h6">Total</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-dark fw-normal h6">Cumi Goreng Tepung x1</p>
                    <p className="text-dark fw-normal text-center h6">Rp. 20.000</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-dark fw-normal h6">Subtotal</p>
                    <p className="text-dark fw-normal text-center h6">Rp. 20.000</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-dark fw-normal h6">Pengiriman</p>
                    <p className="text-dark fw-normal text-center h6">Rp. 0</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-dark fw-normal h6">Total</p>
                    <p className="text-dark fw-normal text-center h6">Rp. 20.000</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center pb-2">
                    <p className="text-dark fw-semibold h5">Metode Pembayaran</p>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2">
                    <p className="text-dark fw-semibold h6">Transfer Bank :</p>
                </div>
                </div>
            </div>
            </div>

            <div className="container">
            <div className="row">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6">
                
                <div className="col pb-2">
                    <div className="card-img">
                    <a href="/">
                        <img src={LogoBank1} alt="..." className="img-thumbnail"/>
                    </a>
                    </div>
                </div>

                <div className="col pb-2">
                    <div className="card-img">
                    <a href="/">
                        <img src={LogoBank2} alt="..." className="img-thumbnail"/>
                    </a>
                    </div>
                </div>

                <div className="col pb-2">
                    <div className="card-img">
                    <a href="/">
                        <img src={LogoBank3} alt="..." className="img-thumbnail"/>
                    </a>
                    </div>
                </div>

                <div className="col pb-2">
                    <div className="card-img">
                    <a href="/">
                        <img src={LogoBank4} alt="..." className="img-thumbnail"/>
                    </a>
                    </div>
                </div>

                <div className="col pb-2">
                    <div className="card-img">
                    <a href="/">
                        <img src={LogoBank5} alt="..." className="img-thumbnail"/>
                    </a>
                    </div>
                </div>

                </div> 
                </div>
                <hr/>
                <div className="col-md-12 d-flex justify-content-end pb-3">
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "#D3AC48", borderColor: "#D3AC48"}} data-target="#free">Proses Pembayaran</button>
                </div>
            </div>
            {/* Buat Pesanan Start */}

        </div>
    )
}

export default CartPesanan;