import "../../asset/style/style.css"
import Courosell from "../partial/courosell"
import ProfilRestoran from "../partial/profilRestoran"
import ProdukMakanan from "../partial/produkMakanan"
import MenuHome from "../partial/menuHome"
import LokasiRestoran from "../partial/lokasiRestoran"

const Home = () => {
    return (
        <div>
            <Courosell />
            <ProfilRestoran />
            <ProdukMakanan />
            <MenuHome />
            <LokasiRestoran />
        </div>
    )
}

export default Home;