import { Routes, Route } from "react-router-dom";
import NavbarAdmin from "../partial/navbarAdmin";
import DataAdmin from "../partial/dataAdmin";
import DataUser from '../partial/dataUser'
import DataProduk from '../partial/dataProduk'
import DataPesanan from '../partial/dataPesanan'
import DataPembelian from '../partial/dataPembelian'



const Admin = () => {
    return (
        <div>
            <NavbarAdmin />
            <Routes>
            <Route path='/' element={<DataAdmin />} />
            <Route path='/datauser' element={<DataUser />} />
            <Route path='/dataproduk' element={<DataProduk />} />
            <Route path='/datapesanan' element={<DataPesanan />} />
            <Route path='/datapembelian' element={<DataPembelian />} />
            </Routes>
        </div>
    )
}

export default Admin;