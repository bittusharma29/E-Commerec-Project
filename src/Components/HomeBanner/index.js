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
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/h7a/h30/33182085316638/SS24-web_3u0--ej9.jpg" alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/h95/hf9/33279582535710/kraus-%26-Latin-Quarters-web600_398--o9u.jpg"  alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/h0a/haa/33279581913118/casio-fossil-web600_8--ek.jpg"  alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/hfb/hff/33279582371870/burberry-YSl-web600.jpg"  alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/hd0/h37/33279592103966/BIBA-%26-W-web600_39--alo.jpg"   alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/h47/h85/33279588368414/AE-%26-TH-web600_ue--j93.jpg"  alt="banner" className="w-100"/>
                </div>
                <div className="item">
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/h6d/hf2/33279582765086/stop-life-web600_y--gy.jpg"  alt="banner" className="w-100"/>
                </div>
             </Slider>
    </div>
    </div>
)
}
export default HomeBanner;