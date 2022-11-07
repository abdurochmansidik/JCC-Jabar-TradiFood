const DataProduk = () => {
    return (
        <div>
            {/* Cari Produk Start */}
            <div className="container">
            <div className="row mt-3 pb-3">
                <div className="col-12">
                    <div className="col-5 col-md-3">
                        <div className="input-group">
                        <button type="button" className="btn btn-primary border-light" style={{backgroundColor: "#D3AC48"}}>Cari</button>
                        <input type="search" className="form-control" placeholder="Cari Nama User" aria-label="Search" aria-describedby="search-addon" width="10px"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* Cari Produk End */}

            {/* Data Produk */}
            <div className="container">
                <div className="row" style={{paddingBottom: "240px"}}>
                    <div className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Gambar</th>
                                <th scope="col">Nama Produk</th>
                                <th scope="col">Deskripsi</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Image</td>
                                <td>Mie Goreng Warsun</td>
                                <td>Mie Goreng dengan cita rasa jawa barat khas sunda</td>
                                <td>Mie</td>
                                <td>Rp. 20.000</td>
                                <td>Edit</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Tabel Form End */}
        </div>
    )
}

export default DataProduk;