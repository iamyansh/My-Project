import "./Banner.scss";
// import BannerImg from "../../../assets/Banner-img.webp"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>hi !</h1>
                <p>
                Welcome to Facetique Adornment, where elegance meets craftsmanship in the world of jewelry. We believe that every piece tells a story, a story of artistry, passion, and the unique beauty that lies within each facet. 
                </p>

                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>

            </div>
            {/* <img className="banner-img" src={BannerImg} alt="" /> */}
        </div>
    </div>;
};

export default Banner;
