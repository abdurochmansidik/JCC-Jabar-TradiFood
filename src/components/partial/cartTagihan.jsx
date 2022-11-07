import { Link } from "react-router-dom";

const CartTagihan = () => {
    return (
        <div>
            {/* Judul Start */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center pb-2">
                            <span className="text-dark fw-semibold text-decoration-none h5">Buat Pesanan</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Judul End  */}

            {/* Input Form Start */}
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <form>
                        <div className="form-group row">
                        <label htmlFor="inputNamaPenerima" className="col-md-2 col-form-label">Nama Penerima :</label>
                        <div className="col-md-4 pb-3">
                            <input type="text" className="form-control" id="inputNamaPenerima" placeholder="Masukan Nama"/>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label htmlFor="inputNomorTelepon" className="col-md-2 col-form-label">Nomor Telepon :</label>
                        <div className="col-md-4 pb-3">
                            <input type="text" className="form-control" id="inputNomorTelepon" placeholder="Masukan Nomor Telepon"/>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label htmlFor="inputAlamatLengkap" className="col-md-2 col-form-label">Alamat Lengkap :</label>
                        <div className="col-md-4 pb-3">
                            <textarea type="text" className="form-control" id="inputAlamatLengkap" placeholder="Masukan Alamat Lengkap"></textarea>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label htmlFor="inlineFormCustomSelectPref" className="col-md-2 col-form-label">Tujuan :</label>
                        <div className="col-md-4 pb-3">
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            {/* <option selected>Plih Tujuan</option> */}
                            <option value="1">Bandung</option>
                            <option value="2">Subang</option>
                            <option value="3">Sumedang</option>
                            <option value="3">Cianjur</option>
                            <option value="3">Bogor</option>
                            </select>
                        </div>
                        </div>
                        <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-md-2 pt-0">Toko Cabang</legend>
                            <div className="col-md-8 pb-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Bandung</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Subang</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Sumedang</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Cianjur</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Bogor</label>
                            </div>
                            </div>
                        </div>
                        </fieldset>
                        <div className="form-group row">
                        <label htmlFor="inputTotalItem" className="col-md-2 col-form-label">Total Item :</label>
                        <div className="col-md-4 pb-3">
                            <input type="text" className="form-control" id="inputTotalItem" placeholder="Total Item + Jasa Antar"/>
                        </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-12 d-flex justify-content-end pb-4">
                        <Link to={"../cartpesanan"} type="submit"  className="btn btn-primary" style={{backgroundColor: "#D3AC48", borderColor: "#D3AC48"}}>Buat Pesanan</Link>
                    </div>
                </div>
            </div>
            {/* Input Form End */}
        </div>
    )
}

export default CartTagihan;