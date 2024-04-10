import { MdClose } from "react-icons/md";
import "./Search.scss";

import prod from "../../../assets2/products/img-6.png"

const Search = ({setShowSearch}) => {
    return <div className="search-modal">
        <div className="form-field">
            <input 
                type="text"
                autoFocus
                placeholder="Search for products" 
            />
            <MdClose onClick={() => setShowSearch(false)}/>
        </div>
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">Ester Chain</span>
                        <span className="desc">Rs. 699</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
