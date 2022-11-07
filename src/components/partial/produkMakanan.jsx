import ProdukTerbaru1 from '../../asset/img/produkTerbaru/gurame-goreng-kremes.jpg'
import ProdukTerbaru2 from '../../asset/img/produkTerbaru/gurame-goreng-menari-warsun.jpg'
import ProdukTerbaru3 from '../../asset/img/produkTerbaru/gurame-saos-mangga.jpg'
import ProdukTerbaru4 from '../../asset/img/produkTerbaru/sop-gurame spesial-warsun.jpg'
import RekomendasiMakanan1 from '../../asset/img/rekomendasiMakanan/ayam-cengek-dan-cabe-hejo.jpg'
import RekomendasiMakanan2 from '../../asset/img/rekomendasiMakanan/ayam-kalasan-warsun.jpg'
import RekomendasiMakanan3 from '../../asset/img/rekomendasiMakanan/ayam-kremes.png'
import RekomendasiMakanan4 from '../../asset/img/rekomendasiMakanan/sate-ayam.jpg'

const ProdukMakanan = () => {
    return (
        <div>
            {/* Judul Start */}
            <div className="container">
                <div className="row text-center mt-4">

                {/* Produk Terbaru Start */}
                <div className="col-lg-6">

                    <div className="judul text-center pb-3">
                    <h4>Produk Terbaru</h4>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 pb-3 g-4">

                    <div className="col">
                        <div className="card h-100 bg-light">
                        <img src={ProdukTerbaru1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="/" className="card-text fw-semibold text-decoration-none" style={{color:"#101010"}}>Gurame Goreng Kremes</a>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 bg-light">
                        <img src={ProdukTerbaru2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="/" className="card-text fw-semibold text-decoration-none" style={{color:"#101010"}}>Gurame Goreng WarSun</a>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 bg-light">
                        <img src={ProdukTerbaru3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="/" className="card-text fw-semibold text-decoration-none" style={{color:"#101010"}}>Gurame Saos Mangga</a>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 bg-light">
                        <img src={ProdukTerbaru4} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="/" className="card-text fw-semibold text-decoration-none" style={{color:"#101010"}}>Gurame Saos Mangga</a>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                {/* Produk Terbaru End */}

                {/* Rekomendasi Makanan Start */}
                <div className="col-lg-6">

                    <div className="judul text-center pb-3">
                    <h4>Rekomendasi Makanan</h4>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 g-4">

                    <div className="col">
                        <div className="card h-100  bg-light">
                        <img src={RekomendasiMakanan1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="/" className="card-text fw-semibold text-decoration-none" style={{color:"#101010"}}>Sop Gurame Spesial WarSun</a>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 bg-light">
                        <img src={RekomendasiMakanan2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="/" className="card-text fw-semibold text-decoration-none" style={{color:"#101010"}}>Ayam Kalasan WarSun</a>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100  bg-light">
                        <img src={RekomendasiMakanan3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="/" className="card-text fw-semibold text-decoration-none" style={{color:"#101010"}}>Ayam Kremes</a>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100  bg-light">
                        <img src={RekomendasiMakanan4} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="/" className="card-text fw-semibold text-decoration-none" style={{color:"#101010"}}>Sate Ayam</a>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                {/* Rekomendasi Makanan End */}

                </div>
            </div>
            {/* Judul Start End */}
        </div>
    )
}


export default ProdukMakanan;