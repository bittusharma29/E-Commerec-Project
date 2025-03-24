import React from "react";
import Slider from "react-slick";
const HomeCat = () => {
        var productSliderOptions = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 8, 
            slidesToScroll: 1
          };
 return(

    <section className="homeCat col-md-12 ">
        <div className="container w-100">
        <Slider {...productSliderOptions}>
  <div className="item productItem2 ">
    <div className="imageWrapper2 ">
      <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-300-444,pr-true,f-auto,q-80/cms/category/08e817a4-96c6-478b-b240-cfab97050bc8.png" className="w-50" alt="product"/>
      
    </div>
    
  </div>
  <div className="item productItem2">
    <div className="imageWrapper2">
      <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png" className="w-50" alt="product"/>
      
    </div>
    
  </div>
  <div className="item productItem2">
    <div className="imageWrapper2">
      <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.png" className="w-50" alt="product"/>
      
    </div>
    
  </div>
  <div className="item productItem2">
    <div className="imageWrapper2">
      <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png" className="w-50" alt="product" />
      
  </div>
  </div>
  <div className="item productItem2">
    <div className="imageWrapper2">
      <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/47b3a34d-8f9f-42fe-97a0-4d8350748924.png" className="w-50" alt="product" />
    
  </div>
  </div>
  <div className="item productItem2">
    <div className="imageWrapper2">
      <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/92493ad5-6242-42f9-b951-dca41e55d744.png" className="w-50" alt="product"/>
      
  </div>
  </div>
  <div className="item productItem2">
    <div className="imageWrapper2">
      <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/b1909dfd-726c-412b-beb7-9553bc909363.png" className="w-50" alt="product"/>
    </div>
  </div>
  <div className="item productItem2">
    <div className="imageWrapper2">
      <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/f894b757-ab40-4635-beb4-af6278fb4223.png" className="w-50" alt="product"/>
     
  </div>
  </div>
 </Slider>
        </div>
        </section>
 )
}
export default HomeCat;