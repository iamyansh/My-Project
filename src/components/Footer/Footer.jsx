import "./Footer.scss";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="tite">About</div>
                <div className="text">
                At Facetique Adornment, we are dedicated to curating an unparalleled collection of jewelry that transcends trends and embodies the essence of timeless beauty. Our passion lies in creating pieces that become cherished symbols, weaving stories that resonate with sophistication and style. Each creation is a testament to our commitment to craftsmanship, quality, and the celebration of individuality. 
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Kayaloram Rd, Punnamada, Kottankulangara, Alapuzha, Kerala, 688006
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 4353 4523 4543</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: hello@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Bracelets</span>
                <span className="text">Chain Pendants</span>
                <span className="text">Earrings</span>
                <span className="text">Leather Bracelets</span>
                <span className="text">Earrings</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Term & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    STORE 2023 created by our Team.
                </div>
                <img src={Payment} />
            </div>
        </div>
    </footer>;
};

export default Footer;
