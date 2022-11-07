const DataPembelian = () => {
    return (
        <div>
            {/* Cari Data Pembelian Start */}
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
            {/* Cari Data Pembelian End */}

            {/* Data Pembelian Start */}
            <div className="container">
                <div className="row" style={{paddingBottom: "240px"}}>
                    <div className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama Pemesanan</th>
                                <th scope="col">Kategori</th>
                                <th scope="col">Status</th>
                                <th scope="col">Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Lorem Ipsum</td>
                                <td>Cumi Goreng Tepung</td>
                                <td>Selesai</td>
                                <td>Delete</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Data Pembelian End */}
        </div>
    )
}

export default DataPembelian;