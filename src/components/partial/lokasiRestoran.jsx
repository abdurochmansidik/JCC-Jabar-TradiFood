import Restouran2 from '../../asset/img/restouran/restouran-2.png'
import {BsHouseFill, BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {IoCalendar} from 'react-icons/io5'

const LokasiRestoran = () => {
    return (
        <div>
            {/* Lokasi Restoran Start */}
            <div className="container">
                <div className="row mt-4">

                {/* Alamat Restoran Start */}
                <div className="col-lg-5 col-md-12 col-sm-12 pb-3">
                    <div className="col">
                    <div className="card h-100 bg-light">
                        <img src={Restouran2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <div className="card-title text-center h5">Jabar TradiFood</div>
                        <div className="d-flex align-content-center align-items-center gap-2">
                            <span className="BsHouseFill" style={{color: "#D3AC48", fontSize:"28px"}}><BsHouseFill /></span>
                            <p className="card-text fw-semibold" style={{fontSize: "14px"}}>9PH6+FH4, Situ Daun, Kec. Tenjolaya, Kabupaten Bogor, Jawa Barat 16370</p>
                        </div>
                        <div className="d-flex align-content-center align-items-center gap-2">
                            <span className="BsFillTelephoneFill" style={{color: "#D3AC48", fontSize:"28px"}}><BsFillTelephoneFill /></span>
                            <p className="card-text fw-semibold" style={{fontSize: "14px"}}>021000000</p>
                        </div>
                        <div className="d-flex align-content-center align-items-center gap-2">
                            <span className="MdEmail" style={{color: "#D3AC48", fontSize:"28px"}}><MdEmail /></span>
                            <p className="card-text fw-semibold" style={{fontSize: "14px"}}>jabartradifood@gmail.com</p>
                        </div>
                        <div className="d-flex align-content-center align-items-center gap-2">
                            <span className="IoCalendar" style={{color: "#D3AC48", fontSize:"28px"}}><IoCalendar /></span>
                            <p className="card-text fw-semibold" style={{fontSize:"14px"}}>Jam Buka : <br/>Setiap Hari 08 Pagi - 10 Malam</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Alamat Restoran End */}

                {/* Map Restoran Start */}
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="embed-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1873249678797!2d106.70653331469198!3d-6.62363866659163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69db8273b0b3db%3A0xc149d5575df571c2!2sVila%20Situ%20Daun!5e0!3m2!1sen!2sid!4v1666511950006!5m2!1sen!2sid" width="100%" height="530px" className="border border-1 rounded-1">
                    </iframe>
                    </div>
                </div>
                {/* Map Restoran End */}

                </div>
            </div>
            {/* Lokasi Restoran End */}
        </div>
    )
}

export default LokasiRestoran;