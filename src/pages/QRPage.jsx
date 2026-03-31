import { Navigate, useNavigate } from "react-router-dom";
import "../css/QRPage.css";
import NavBar from "../components/NavBar";

export default function QRPage() {
    const navigate = useNavigate();
    
    const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23666769'/%3E%3C/svg%3E";

    return(
        <div className="qr-wrapper">
            < NavBar/>

            <div className="qr-page">
                <section className="qr-white">
                 <h2 className="qr-header">Instapay</h2>
                 <img src={PLACEHOLDER}></img>

                 <p className="qr-subtitle">We accept Gcash and PayMaya!</p>
                 <div className="qr-btns">
                    <button className="qr-download">Download QR</button>
                    <button className="qr-upload" onClick={()=> navigate("/confirmation")}>Upload Receipt Image</button>
                </div>
                </section>
            </div>
        </div>
    )
}