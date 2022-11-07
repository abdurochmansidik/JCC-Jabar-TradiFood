const DataAdmin = () => {
    return (
        <div>

        {/* Cari User Start */}
        <div class="container">
        <div class="row mt-3 pb-3">
            <div class="col-12">
                <div class="col-5 col-md-3">
                    <div class="input-group">
                    <button type="button" class="btn btn-primary border-light" style={{backgroundColor: "#D3AC48"}}>Cari</button>
                    <input type="search" class="form-control" placeholder="Cari Nama User" aria-label="Search" aria-describedby="search-addon" width="10px"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* Cari User End */}

        {/* Data User */}
        <div className="container">
            <div className="row" style={{paddingBottom: "240px"}}>
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Gambar</th>
                            <th scope="col">Nama Admin</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Aksi</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Image</td>
                            <td>Lorem Ipsum</td>
                            <td>loremipsum@gmail.com</td>
                            <td>loremipsum123</td>
                            <td>Edit</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* Data User  */}
        </div>
    )
}

export default DataAdmin;