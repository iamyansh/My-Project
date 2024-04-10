import "./Product.scss";

import prod from "../../../assets2/products/img-8.png"
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Royal Roman Men's Bracelet </span>
            <span className="price">&#8377;849</span>
        </div>
    </div>
};

export default Product;
