const DataPesanan = () => {
    return (
        <div>
        {/* Cari Data Pesanan Start */}
        <div className="container">
        <div className="row mt-3 pb-3">
            <div className="col-12">
                <div className="row mb-4">

                <div className="col-5 col-md-3 d-flex justify-content-start">
                    <div className="input-group">
                    <button type="button" className="btn btn-primary border-light" style={{backgroundColor: "#D3AC48"}}>Cari</button>
                    <input type="search" className="form-control" placeholder="Cari User" aria-label="Search" aria-describedby="search-addon" width="10px"/>
                    </div>
                </div>

                </div>
            </div>
        </div>
        </div>
        {/* Cari Data Pesanan End */}

        {/* Data Pesanan Start */}
        <div className="container">
            <div className="row" style={{paddingBottom: "220px"}}>
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama Pesanan</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Lorem Ipsum 1</td>
                            <td>Mie</td>
                            <td>5</td>
                            <td>Selesai</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Lorem Ipsum 2</td>
                            <td>Mie</td>
                            <td>5</td>
                            <td>Sedang Diproses</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* Data Pesanan End */}
        </div>
    )
}

export default DataPesanan;