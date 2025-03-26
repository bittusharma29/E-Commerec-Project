import React from "react";
import Slider from "react-slick";
const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true
      };
return(
    <div className="container mt-3">
      <div className="homeBannerSection">
             <Slider {...settings}>
                <div className="item">
                  <img src="https://static.vecteezy.com/system/resources/previews/038/046/770/non_2x/horizontal-sale-banner-template-for-vegetarian-or-organic-product-vector.jpg" alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://img.freepik.com/premium-vector/realistic-fresh-spicy-snacks-beer-with-crackers-cheese-condiments-header_1284-56674.jpg?w=1380"  alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://img.freepik.com/free-psd/happy-hour-discount-template_23-2151349611.jpg?t=st=1742973364~exp=1742976964~hmac=cfefee4fae5e1768b534174b7ecc46c7baa250f23b582c898938704819c37291&w=1380"  alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://img.freepik.com/premium-photo/white-bread-ears-corn-are-aliens-selective-focus_74760-21444.jpg?w=1380"  alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://img.freepik.com/premium-photo/crispy-potato-snack-chips-bowl-dark-textured-background-perfect-sharing-enjoying-alone-delicious-treat-any-occasion_1138521-19743.jpg?w=1380"   alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://img.freepik.com/free-vector/antibacterial-hand-soap-promo_52683-66971.jpg?t=st=1742973550~exp=1742977150~hmac=7098d6c7421aa720b3d88d62a1a075b392e74a86bafdc0bf932912b323ba9ea4&w=1380"  alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://img.freepik.com/premium-vector/realistic-cleaning-products-ad_767391-744.jpg?w=1380"  alt="banner" className="w-100"/>
                </div>
             </Slider>
    </div>
    </div>
)
}
export default HomeBanner;