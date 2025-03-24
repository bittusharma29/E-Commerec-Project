import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import React from "react";
import Slider from "react-slick";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuantityBox from '../quantityDropDown';

const ProductModal = ({ open, closeProductModal, products, selectedProductIndex }) => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const selectedProduct = products[selectedProductIndex];

    return (
        <Dialog open={open} className='productModal'>
            <Button className="close_" onClick={closeProductModal}>
                <CloseIcon />
            </Button>
            <h4 className='mb-2 font-weight-bold'>{selectedProduct.name}</h4>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center mr-4'>
                    <span>Brands:</span>
                    <span className='ml-2'><b>{selectedProduct.brand}</b></span>
                </div>
                <Rating name="half-rating-read" defaultValue={selectedProduct.rating} precision={0.5} size="small" readOnly />
            </div>
            <hr />
            <div className='row mt-2 productDetailModal'>
                <div className='col-md-5'>
                    <Slider {...settings}>
                        {selectedProduct.images.map((image, index) => (
                            <div className='item' key={index}>
                                <img src={image} alt='item' />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='col-md-7'>
                    <div className='d-flex align-items-center'>
                        <span className="oldPrice mr-2">₹{selectedProduct.oldPrice}</span>
                        <span className="netPrice text-danger mr-2">₹{selectedProduct.newPrice}</span>
                        <span className="badge badge-primary mr-2">{selectedProduct.discount}%</span>
                    </div>
                    <span className="badge bg-success mt-4">{selectedProduct.stockStatus}</span>
                    <p className='mt-4'>{selectedProduct.description}</p>
                    <div className='d-flex align-items-center'>
                        <QuantityBox />
                        <Button className='btn-blue btn-lg btn-big btn-round ml-3'>ADD TO CART</Button>
                    </div>
                    <div className='d-flex align-items-center actions mt-3'>
                        <Button className="btn-round btn-small" variant="outlined"><FavoriteIcon />Add To Wishlist</Button>
                        <Button className="btn-round btn-small" variant="outlined ml-3"><CompareArrowsIcon />COMPARE</Button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default ProductModal;
