import "./CartItem.scss";
import {MdClose} from "react-icons/md"
import prod from "../../../assets2/cart-item.png";
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Ian Men's Bracelet</span>
                <MdClose className="close-btn"/>
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>5</span>
                    <span>x</span>
                    <span className="highlight">&#8377;499</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
