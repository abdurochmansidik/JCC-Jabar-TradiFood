import Restouran1 from '../../asset/img/restouran/restouran-1.png'

const ProfilRestoran = () => {
    return (
        <div>
            {/* Profil Restoran Start */}
            <div className="container">
                <div className="row mt-4">

                <div className="col-lg-6 col-md-12 col-sm-12 pb-3">
                    <div className="gambar-restoran">
                    <img src={Restouran1} className="card-img rounded-2 border-light" alt="..." height="400px"/>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="judul text-center pb-3">
                    <h4>Jabar TradiFood</h4>
                    </div>
                    <div className="deskripsi-restoran">
                    <p>Rumah Makan Jawa barat Traditional Food atau yang biasa disebut dengan Jabar TradiFood adalah rumah makan yang menyajikan masakan tradisional khas jawa Barat yaitu ciri khas Sunda yang berdiri pada tahun 2022 di desa Situ Daun, Kec. Tenjolaya, Jawa Barat.</p>
                    <p>Hidangan Jabar TradiFood dimasak dengan menggunakan resep turun menurun tradisional keluarga anda dengan menggunakan bumbu-bumbu dapoer terbaik sehingga terjamin cita rasa masakan Indonesia yang terbaik dan otentik.</p>
                    <p>Makanan yang dihidangkan tidak hanya untuk memuaskan selera tetapi untuk mengingatkan seseorang terhadap cita rasa yang sudah ada lama di Indonesia, sehingga semua orang yang menikmati masakan di dapoer anda akan terbawa menyusuri kekayaan cita rasa Indonesia akan bumbu bumbu dapoer yang ada di bumi tercinta kita Indonesia.</p>
                    </div>
                </div>

                </div>
            </div>
            {/* Profil Restoran End */}
        </div>
    )
}

export default ProfilRestoran;

