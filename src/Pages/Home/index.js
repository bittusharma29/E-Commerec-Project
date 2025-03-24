import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.png";
import Button from '@mui/material/Button';
import { HiArrowSmRight } from "react-icons/hi";
import React, { useState } from "react";
import Slider from "react-slick";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import banner2 from "../../assets/images/banner2.png";
import HomeCat from "./homeCategories";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import banner5 from "../../assets/images/banner5.png";
import { CiMail } from "react-icons/ci";
import { FaTshirt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import ProductModal from "../../Components/ProductModal";

const Home = () => {
    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    const [isOpenProductModal, setisOpenProductModal] = useState(false);
    const [selectedProductIndex, setSelectedProductIndex] = useState(null);
    const [showAllProducts, setShowAllProducts] = useState(false);

    const viewProductDetails = (index) => {
        setSelectedProductIndex(index);
        setisOpenProductModal(true);
    }

    const closeProductModal = () => {
        setisOpenProductModal(false);
    }

    const products = [
        {
            id: 1,
            name: "Ensure Balanced Nutrition Drink Powder For Adults - Vanilla Flavored",
            brand: "Ensure",
            rating: 5,
            oldPrice: 199,
            newPrice: 149,
            discount: 35,
            description: "Skimmed Milk Powder, Maltodextrin, Sucrose, Edible Vegetable Oil (High Oleic Sunflower Oil, Soy Oil), Fructo-Oligosaccharide (4.0%), Flavourings (Nature Identical, Artificial Flavouring Substances - Vanilla), Minerals, Calcium Ãƒå¸-Hydroxy- Ãƒå¸-Methylbutyrate Monohydrate (Cahmb) (0.69%) Vitamins, and Antioxidant (Mixed Tocopherol)",
            images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/b5471f15-fc5a-4da1-8de3-fefeae54bb0c/Ensure-Balanced-Nutrition-Drink-Powder-For-Adults-Vanilla-Flavored.jpeg"]
        },
        {
            id: 2,
            name: "Dabur Vedic Tea",
            brand: "Dabur",
            rating: 4,
            oldPrice: 600,
            newPrice: 450,
            discount: 35,
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/a15dbf8b-1a59-42bd-b13a-e02b43dbd696/Dabur-Vedic-Tea.jpeg"]
        },
        {
          id: 3,
          name: "Starbucks Frappuccino Caramel Coffee Drink",
          brand: "StarBucks",
          rating: 5,
          oldPrice: 399,
          newPrice: 250,
          discount: 35,
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/7aa457f5-7a0c-4901-b388-50b52ac7bac1/Starbucks-Frappuccino-Caramel-Coffee-Drink.jpeg"]
      },
      {
        id: 4,
        name: "Horlicks Malt Based Food Drink Pouch",
        brand: "Horlicks",
        rating: 5,
        oldPrice: 699,
        newPrice: 400,
        discount: 13,
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/130d5c28-8b33-4f7f-b6c3-a03b8265804f/Horlicks-Malt-Based-Food-Drink-Pouch.jpeg"]
    },
    {
      id: 5,
      name: "Tata Tea Gold",
      brand: "Tata",
      rating: 5,
      oldPrice: 599,
      newPrice: 474,
      discount: 35,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1080,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/2f3eb3fd-7aaa-4695-931a-ffedbae68957/Tata-Tea-Gold.jpeg"]
  },
  {
    id: 6,
    name: "Red Label Natural Care Tea | with 5 Ayurvedic Ingredients",
    brand: "Red Label",
    rating: 5,
    oldPrice: 199,
    newPrice: 149,
    discount: 35,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/f162fc2b-26e5-4e0c-8504-1a8c031ee13b/Red-Label-Natural-Care-Tea-with-5-Ayurvedic-Ingredients.jpeg"]
},
{
  id: 7,
  name: "Bru Instant Coffee",
  brand: "Bru",
  rating: 5,
  oldPrice: 199,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/acc44780-935c-4678-b25f-7ffea5793494/Bru-Instant-Coffee.jpeg"]
},
{
  id: 8,
  name: "Anveshan A2 Gir Cow Ghee Traditional Bilona Method Cultured Curd Based Immunity Booster",
  brand: "Anveshan",
  rating: 5,
  oldPrice: 1999,
  newPrice: 999,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/3a61d93b-69d8-4b38-8393-bb06e4faad36/Anveshan-A2-Gir-Cow-Ghee-Traditional-Bilona-Method-Cultured-Curd-Based-Immunity-Booster.jpeg"]
},
{
  id: 9,
  name: "GTS Original Kolam Rice",
  brand: "GTS Original",
  rating: 5,
  oldPrice: 9999,
  newPrice: 1499,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/10866c85-de0d-412c-9cae-1e0417c660ad/GTS-Original-Kolam-Rice.jpeg"]
},
{
  id: 10,
  name: "Aashirvaad Atta - Superior MP Whole Wheat, No Maida | Pouch",
  brand: "ITC",
  rating: 5,
  oldPrice: 1299,
  newPrice: 499,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/afa00338-bc65-474a-9094-54c8b35798c1/Aashirvaad-Atta-Superior-MP-Whole-Wheat-No-Maida-Pouch.jpeg"]
},
{
  id: 11,
  name: "Fortune Sunlite Refined Sunflower Oil - Jar",
  brand: "Adani ",
  rating: 5,
  oldPrice: 199,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/717d7a97-85c2-4d0d-b2cf-0e4a0af3b947/Fortune-Sunlite-Refined-Sunflower-Oil-Jar.jpeg"]
},
{
  id: 12,
  name: "The Khao Project Bhut Jolokia Chilli Oil - Mild",
  brand: "Mild",
  rating: 5,
  oldPrice: 599,
  newPrice: 349,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/62cce9cd-628c-4c2a-b5d4-26a98d2cc33c/The-Khao-Project-Bhut-Jolokia-Chilli-Oil-Mild.jpeg"]
},
{
  id: 13,
  name: "Sundrop Peanut Butter 100% Natural - Crunchy",
  brand: "sundrop",
  rating: 5,
  oldPrice: 699,
  newPrice: 349,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-483,ar-483-658,pr-true,f-auto,q-80/inventory/product/639bfef5-e6dc-42c9-841c-240478c9f70a-/tmp/20230414-0737301/Sundrop-Peanut-Butter-100-Natural-Crunchy.jpeg"]
},
{
  id: 14,
  name: "Kwality Choco Flakes - Made With Whole Wheat Zero% Maida",
  brand: "Kwality",
  rating: 5,
  oldPrice: 599,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/0b37482a-def1-4cab-8dae-66ae8717f256/Kwality-Choco-Flakes-Made-With-Whole-Wheat-Zero-Maida.jpeg"]
},
{
  id: 15,
  name: "Tata Soulfull Millet Granola, Honey, Fruits, Nuts & Seeds, Breakfast Cereal",
  brand: "TaTa",
  rating: 5,
  oldPrice: 199,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/e9ce5b23-b939-4558-9fd9-b2467699af7e/Tata-Soulfull-Millet-Granola-Honey-Fruits-Nuts-Seeds-Breakfast-Cereal.jpeg"]
},
{
  id: 16,
  name: "Dabur Honey Squeezy, 100% Pure World's No.1 Honey Brand – Buy 1 Get 1 Free",
  brand: "Marico",
  rating: 5,
  oldPrice: 199,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/c518056b-dabd-43f4-8eee-43801244d759/Dabur-Honey-Squeezy-100-Pure-World-s-No-1-Honey-Brand-Buy-1-Get-1-Free.jpeg"]
},
{
  id: 17,
  name: "The Health Factory Zero Maida Bread - 100% Whole Wheat",
  brand: "The Health Factory",
  rating: 5,
  oldPrice: 199,
  newPrice: 49,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/5051c77d-0322-4d6d-a26c-15691bd074e9/The-Health-Factory-Zero-Maida-Bread-100-Whole-Wheat.jpeg"]
},
{
  id: 18,
  name: "Kissan Fresh Tomato Ketchup",
  brand: "Kissan",
  rating: 5,
  oldPrice: 199,
  newPrice: 129,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/5384ed9b-031e-4851-addd-235b4659f3f2/Kissan-Fresh-Tomato-Ketchup.jpeg"]
},
{
  id: 19,
  name: "MAGGI Rich Tomato Ketchup Bottle",
  brand: "MAGGI",
  rating: 5,
  oldPrice: 199,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/25462bae-b08b-45fb-879d-e64102511aa9/MAGGI-Rich-Tomato-Ketchup-Bottle.jpeg"]
},
{
  id: 20,
  name: "iD Malabar Parota",
  brand: "ID",
  rating: 5,
  oldPrice: 199,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/c0313394-a42d-4ff0-bc96-9cc55a8167f5/iD-Malabar-Parota.jpeg"]
},
{
  id: 21,
  name: "McCain French Fries",
  brand: "Mccain",
  rating: 5,
  oldPrice: 199,
  newPrice: 99,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-3481-3999,pr-true,f-auto,q-80/cms/product_variant/abcb14aa-3895-49f1-9c0e-2155d344131b/McCain-French-Fries.jpeg"]
},
{
  id: 22,
  name: "ITC Master Chef Crispy Spicy Chicken",
  brand: "Itc",
  rating: 5,
  oldPrice: 199,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1254,ar-1254-1254,pr-true,f-auto,q-80/cms/product_variant/67ba9bd1-15a8-4767-9e2b-1661694b8279/ITC-Master-Chef-Crispy-Spicy-Chicken.jpeg"]
},
{
  id: 23,
  name: "Amul Vanilla Magic Ice Cream Tub",
  brand: "amul",
  rating: 5,
  oldPrice: 199,
  newPrice: 149,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1021,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/fbd9b2d7-d1b6-4360-aedc-681679b19090/Amul-Vanilla-Magic-Ice-Cream-Tub.jpeg"]
},
{
  id: 24,
  name: "Havmor Mocha Brownie Fudge Ice Cream Tub",
  brand: "havmor",
  rating: 5,
  oldPrice: 399,
  newPrice: 299,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1021,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/d55df047-aa13-4cf4-bde7-4d07937b455d/Havmor-Mocha-Brownie-Fudge-Ice-Cream-Tub.jpeg"]
},
{
  id: 25,
  name: "Hocco Bix Cake Chocolate Chips Ice Cream Sandwich",
  brand: "hocco",
  rating: 5,
  oldPrice: 199,
  newPrice: 49,
  discount: 35,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  images: ["https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/dcba5cb9-ebb1-458e-b041-1bdefcb94f66/Hocco-Bix-Cake-Chocolate-Chips-Ice-Cream-Sandwich.jpg"]
},

        // Add more products as needed
    ];

    return (
        <>
            <HomeBanner />
            <HomeCat />
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="banner mt-4">
                                <img src={banner1} alt="banner" className="cursor w-100" />
                                </div>
                                <img src={banner2} alt="banner" className="cursor w-100 mt-2" />
                            
                            
                        </div>

                        <div className="col-md-10 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">New Arrivals</h3>
                                    <p className="text text-sml mb-0">Do not miss out on the latest trends.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto" onClick={() => setShowAllProducts(!showAllProducts)}>
                                    View All <HiArrowSmRight />
                                </Button>
                            </div>
                            {showAllProducts ? (
                              <div className="productGrid">
                              {products.map((product) => (
                                  <div className="item productItem" key={product.id}>
                                      <div className="imageWrapper">
                                          <img src={product.images[0]} className="w-100" alt="product" />
                                          <div className="actions">
                                              <Button onClick={() => viewProductDetails(product.id)}><BsArrowsFullscreen /></Button>
                                              <Button><IoMdHeartEmpty /></Button>
                                          </div>
                                      </div>
                                      <h5 className="brand mt-1">{product.brand}</h5>
                                      <h6>{product.name}</h6>
                                      <div className="d-flex">
                                          <span className="oldPrice">{product.oldPrice}</span>
                                          <span className="netPrice text-danger">₹{product.newPrice}</span>
                                          <span className="badge badge-primary">{product.discount}₹</span>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      ) : (
                            
                            <div className="product_row w-100 mt-4 ">
                                <Slider {...productSliderOptions}>
                                    {products.map((product, index) => (
                                        <div className="item productItem gap-10" key={product.id}>
                                            <div className="imageWrapper ">
                                                <img src={product.images[0]} className="w-100" alt="product" />
                                                <div className="actions">
                                                    <Button onClick={() => viewProductDetails(index)}><BsArrowsFullscreen /></Button>
                                                    <Button><IoMdHeartEmpty /></Button>
                                                </div>
                                            </div>
                                            <h5 className="brand mt-1">{product.brand}</h5>
                                            <h6>{product.name}</h6>
                                            <div className="d-flex ">
                                                <span className="oldPrice ">${product.oldPrice}</span>
                                                <span className="netPrice text-danger ">${product.newPrice}</span>
                                                <span className="badge badge-primary">{product.discount}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                      )}
                                             </div>

                        {isOpenProductModal && (
                            <ProductModal open={isOpenProductModal} closeProductModal={closeProductModal} products={products} selectedProductIndex={selectedProductIndex} />
                        )}
 <div className="d-flex mt-4 mb-5 bannerSec">
                                                     <div className="banner">
                                                      <img src={banner3}  alt="banner2" className="cursor w-100"/>
                                                      </div>
                                                     <div className="banner">
                                                      <img src={banner4}  alt="banner2" className=" impo cursor w-60"/>
                                                      </div>
                                                     </div>
                                                 </div>
                                             </div>
                                            </section>
                                            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                                           <div className="container">
                                             <div className="row">
                                               <div className="col-md-6">
                                                <p className="text-white mb-0">$100 discount for your first order.</p>
                                                <h3 className="text-white">Join Our NewsLetter And Get....</h3>
                                                <p className="text-light">join our email subscription now to get updates<br/> on promotiins and coupons.</p>
                                                <form>
                                                 <CiMail/>
                                                 <input type="text" placeholder="Enter your email"/>
                                                 <Button>Subscribe</Button>
                                                </form>
                                               </div>
                                               <div className="col-md-6">
                                                 <img src={banner5} alt="banner5" />
                                               </div>
                                     
                                             </div>
                                     
                                           </div>
                                            </section>
                                            <section>
                                             <footer>
                                               <div className="container">
                                                 <div className="topinfo row">
                                                   <div className="col d-flex align-items-center">
                                                     <span><FaTshirt/></span>
                                                     <span className="ml-2">trending</span>
                                                     </div>
                                                     <div className="col d-flex align-items-center">
                                                     <span><TbTruckDelivery/></span>
                                                     <span className="ml-2">free shipping</span>
                                                     </div>
                                                     <div className="col d-flex align-items-center">
                                                     <span><RiDiscountPercentFill /></span>
                                                     <span className="ml-2">daily mega-discounts</span>
                                                     </div>
                                                     <div className="col d-flex align-items-center">
                                                     <span><FaHandHoldingDollar /></span>
                                                     <span className="ml-2">Best price on the market</span>
                                                     </div>
                                                 </div>
                                               </div>
                                               <div className="copyright mt-3 pt-3 pb-3 d-flex">
                                       <p className="mb-0">Copyright 2025. All rights reserved</p>
                                       <ul className="list list-inline ml-auto mr-4 mb-0">
                                         <li className="list-inline-item">
                                           <a href="https://www.facebook.com">
                                             <FaFacebook />
                                           </a>
                                         </li>
                                         <li className="list-inline-item">
                                           <a href="https://twitter.com" >
                                             <FaSquareXTwitter />
                                           </a>
                                         </li>
                                         <li className="list-inline-item">
                                           <a href="https://www.instagram.com" >
                                             <FaInstagramSquare />
                                           </a>
                                         </li>
                                       </ul>
                                     </div>
                                             </footer>
                                            </section>
                                                 </>
                                         )
                                         
                                     }
                                     export default Home;  