import "./Product.scss";

import prod from "../../../assets2/products/img-5.png"
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Brain Men's Earing</span>
            <span className="price">&#8377;899</span>
        </div>
    </div>
};

export default Product;
