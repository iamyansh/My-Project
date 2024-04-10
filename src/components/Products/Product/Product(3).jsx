import "./Product.scss";

import prod from "../../../assets2/products/img-3.png"
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Bieber Chain</span>
            <span className="price">&#8377;699</span>
        </div>
    </div>
};

export default Product;
