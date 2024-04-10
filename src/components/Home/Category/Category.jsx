import "./Category.scss";
import img1 from "../../../assets2/category/img1.png"
import img2 from "../../../assets2/category/img2.png"
import img3 from "../../../assets2/category/img3.png"
import img4 from "../../../assets2/category/img4.png"

const Category = () => {
    return <div className="shop-by-category">
        <div className="categories">
            <div className="category">
                <img src={img1} alt="" />
            </div>
            <div className="category">
                <img src={img2} alt="" />
            </div>
            <div className="category">
                <img src={img3} alt="" />
            </div>
            <div className="category">
                <img src={img4} alt="" />
            </div>
        </div>
    </div>;
};

export default Category;
