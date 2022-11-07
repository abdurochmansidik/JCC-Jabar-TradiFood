// import '../../asset/js/register.js'

const Register = () => {

    return (
        <div>
        <div className="container">
            <hr className="border border-2 opacity-50 m-0" style={{borderColor: "#D3AC48 !important"}}/>
                <div className="row mt-5 pb-5">
                    <div className="col-md-6 offset-md-3">
                        <h4 className="text-center">Selamat Datang Di Jabar TradiFood</h4>
                        <h5 className="text-center">Silahkan Isi Data Informasi</h5>
                        <form >
                            {/* onSubmit="event.preventDefault()" */}
                        <div className="mb-3">
                            <label htmlFor="registrasiNama" className="form-label">Nama</label>
                            <input type="text" className="form-control" id="registrasiNama"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registrasiEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="registrasiEmail"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registrasiPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="registrasiPassword"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registrasiRole">Role</label>
                            <select className="form-select form-select-sm mt-2" aria-label=".form-select-sm example" id="registrasiRole">
                                <option value="0">User</option>
                                <option value="1">Admin</option>
                            </select>
                        </div>
                        
                        {/* Login Start */}
                        <div className="row mt-4">
                            <div className="d-grid col-6 col-md-3 mx-auto">
                            <a href="/" type="button" className="btn text-white" id="registrasiBtn" style={{backgroundColor: "#D3AC48"}}>Buat Akun</a>
                            </div>
                        </div>
                        {/* Login End */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;