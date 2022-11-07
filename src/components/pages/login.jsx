// import '../../asset/js/login.js'

import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div>
            {/* login Start */}
            <div className="container">
            <hr className="border border-2 opacity-50 m-0" style={{borderColor: "#D3AC48 !important"}}/>
                <div className="row mt-5 pb-4">
                    <div className="col-md-6 offset-md-3">
                        <h4 className="text-center">Selamat Datang Di Jabar TradiFood</h4>
                        <h5 className="text-center">Silahkan Masuk</h5>
                        <div className="mb-3">
                            <label htmlFor="loginEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="loginEmail"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="loginPassword"/>
                        </div>
                        <div className="form-check mb-5">
                            <input className="form-check-input" style={{backgroundColor: "#D3AC48", borderColor: "#D3AC48"}} type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked" style={{color: "#D3AC48"}}>
                            Ingatkan Saya
                            </label>
                        </div>

                        {/* Login Start */}
                        <div className="row mt-4">
                            <div className="d-grid col-6 col-md-3 mx-auto">
                            <button type="button" className="btn text-white" id="loginBtn" style={{backgroundColor: "#D3AC48"}}>Login</button>
                            </div>
                        </div>
                        {/* Login End */}

                        <br/><br/>
                        <p className="text-center">Belum Punya Akun? <Link to="/register" className="text-decoration-none" style={{color: "#D3AC48"}}>Buat Akun Baru</Link></p>
                    </div>
                </div>
            </div>
            {/* login Start */}
        </div>
    )
}

export default Login;