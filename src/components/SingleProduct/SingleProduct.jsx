import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts"

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";

import prod from "../../assets2/single-product.png"

const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">
                    <span className="name">David Men's Leather Bracelet</span>
                    <span className="price">Rs. 799</span>
                    <span className="desc">Make a strong fashion statement with the "David" Triple-Layered Leather and Silver Chain Bracelet. Its unique design, combining leather, chains, and a striking black colour, allows you to create a stud look that's perfect for teenagers and your everyday outfits. Elevate your style and make a memorable impression with this exceptional piece of wrist wear. </span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>
                    </div>

                    <span className="divider"/>
                    <div className="info-item">
                        <span className="text-bold">Category:&nbsp;
                            <span>Bracelet</span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icon">
                                <FaFacebookF/>
                                <FaTwitter/>
                                <FaInstagram/>
                                <FaLinkedinIn/>
                                <FaPinterest/>
                            </span>

                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
