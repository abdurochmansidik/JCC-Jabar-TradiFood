const User = () => {
    return (
        <div>

            {/* Judul Start  */}
            <div class="container">
            <hr className="border border-2 opacity-50 m-0" style={{borderColor: "#D3AC48 !important"}}/>
            <div class="row mt-3">
                <div class="col-12">
                <div class="d-flex justify-content-between align-items-center pb-2">
                    <span class="text-dark fw-semibold text-decoration-none h5">Riwayat Transaksi</span>
                </div>
                </div>
            </div>
            </div>
            {/* Judul End */}

            {/* Tabel Start */}
            <div className="container">
                <div className="row" style={{paddingBottom: "360px"}}>
                    <div className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Jenis Pesanan</th>
                                <th scope="col">Jumlah</th>
                                <th scope="col">Status Pembayaran</th>
                                <th scope="col">Jumlah Pembayaran</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Cumi Goreng Tepung</td>
                                <td>5</td>
                                <td>Dibayar</td>
                                <td>Rp.20.000</td>
                                <td>Selesai</td>
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

export default User;