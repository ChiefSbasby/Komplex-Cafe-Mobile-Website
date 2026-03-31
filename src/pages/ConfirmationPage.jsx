import { useNavigate } from "react-router-dom";
import "../css/ConfirmationPage.css";
import NavBar from "../components/NavBar";


export default function ConfirmationPage() {
    
        return(
            <div className="confirmation-wrapper">
                < NavBar/>
    
                <div className="confirmation-page">
                    <section className="confirmation-white">
                     <h2 className="confirmation-header">Your order is being prepared!</h2>
                     
                     <p className="reference-number">REF NO. 12345</p>
    
                     <p className="confirmation-subtitle">Please save this reference number to claim your order</p>
                    </section>
                </div>
            </div>
        )
    
}