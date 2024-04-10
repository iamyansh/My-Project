import "./Products.scss";
import Product1 from "./Product/Product(1)"
import Product2 from "./Product/Product(2)"
import Product3 from "./Product/Product(3)"
import Product4 from "./Product/Product(4)"
import Product5 from "./Product/Product(5)"
import Product6 from "./Product/Product(6)"
import Product7 from "./Product/Product(7)"
import Product8 from "./Product/Product(8)"

const Products = ({innerPage, headingText}) => {
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
            <Product1/>
            <Product2/>
            <Product3/>
            <Product4/>
            <Product5/>
            <Product6/>
            <Product7/>
            <Product8/>
        </div>
    </div>;
};

export default Products;
