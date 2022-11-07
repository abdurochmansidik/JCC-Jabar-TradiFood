import React from 'react';
import { useParams } from 'react-router-dom';
import { getMenu } from '../utils/datamenuMakanan';

const DetailProduk = () => {

    const { id } = useParams();
    const [menu, setMenu] = React.useState({});
    React.useEffect(() => {
        setMenu(getMenu(id));
    }, [id]);

    return (
        <div>
            {/* Detail Produk Start */}
            <div className="container">
                <hr className="border border-2 border-light opacity-50 m-0" style={{borderColor: "#D3AC48"}}/>
                <div className="row mt-3 mb-4">
                    <div className="col-12">
                    
                        <div className="d-flex justify-content-between align-items-center pb-2">
                            <span className="text-dark fw-semibold text-decoration-none h5">Nama Makanan</span>
                            <a href="/menu" className="fw-semibold text-decoration-none h5" style={{color: "#D3AC48"}}>Kembali</a>
                        </div>

                        <div className="card h-80 bg-light">
                            <img src={menu.imageUrl} className="card-img-top" style={{width: "100%", height: "337px", objectFit: "cover"}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center fw-semibold pb-3" style={{color: "#101010", fontSize: "22px"}}>{menu.title}</h5>
                                <p className="card-text" style={{fontSize: "17px"}}>{menu.description}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pb-2 mb-2 m-3">
                                <span className="text-dark fw-semibold text-decoration-none h5">Rp.{menu.harga}</span>
                                <a href="#!" className="fw-semibold text-decoration-none h5" style={{color: "#D3AC48"}}>{menu.label}</a>
                            </div>

                            <div className="container">
                                <div className="row mt-5 pb-4">
                                    <form>
                                    <div className="justify-content-start gap-2 d-flex">
                                    <label>Tambah Ke Keranjang   <input type="number" name="name" /></label>
                                    <input type="submit" value="Checkout" />
                                    </div>
                                    </form>
                                </div>
                            </div>  
                            {/* Button Checkout Start */}

                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Detail Produk End */}
        </div>
    )
}

export default DetailProduk;


