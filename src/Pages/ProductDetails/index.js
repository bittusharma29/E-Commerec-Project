import Rating from '@mui/material/Rating';
import QuantityBox from '../../Components/quantityDropDown';
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductDetails = () => {
    return(
        <>
         <section className="ProductDetails section">
            <div className="container">
               <div className="row">
                <div className="col-md-3">
                  <div>
                    <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.png" alt="product" className="w-40 ml-5"/>
                  </div>
                </div>
                <div className="col-md-5">
                <h2 className="hd text-capitalize">Aashirvaad Atta - Superior MP Whole Wheat, No Maida | Pouch</h2>
                <ul className="list list-inline d-flex align-item-center">
                    <li className="list-inline-item">
                        <div className="d-flex align-items-center">
                        <span className="mr-2">Brands:</span>
                        <span>ITC</span>
                        </div>
                    </li>
                    
                    <li className='list-inline-item'>
                    <div className='d-flex align-items-center ml-0'>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' readOnly />
                    <span className='ml-2 cursor'>1Review</span>
                    </div>
                    </li>
                </ul>
                <div className='d-flex info mb-2'>
                    <span className='oldPrice'>₹1000</span><span className='netPrice text-danger ml-1'>₹500</span>
                </div>
                <span className='badge badge-success'>IN STOCK</span>
                <p className='mt-3'> lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <div className='d-flex align-items-center mt-4'>
                    <QuantityBox/>
                    <Button className='btn-blue btn-lg btn-big font-weight-bold '><ShoppingCartIcon/>ADD TO CART</Button>
                    <Button className="btn-round btn-small ml-4" variant="outlined"><FavoriteIcon /></Button>
                    <Button className="btn-round btn-small" variant="outlined ml-3"><CompareArrowsIcon /></Button>
                </div>
                </div>
               </div>
            </div>
            <br/>
            <hr/>
           <div className='d-flex justify-content-center align-items-center w-100'>
    
    <Card sx={{ minWidth: '100%' }} className='reviewCard d-flex align-items-center'>
      <CardContent>
        
        <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.47NEVXcBGruaDflMzJAsDwAAAA?rs=1&pid=ImgDetMain" minWidth="200px" />
      <h3>John Doe</h3>
      
    </Stack>
    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size='small' readOnly className='ml-6'/>
        <Typography variant="body2" >
          <p>packaging was very good. and product delivered in time</p>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    
    </div>
    <div className='d-flex justify-content-center align-items-center'>
      <div className='container'>
        <h3>Write A Review</h3>
        <form>
          <textarea rows="8" cols="60" placeholder='enter your review here'/>
        </form>
         <Button className='btn-blue btn-lg btn-big font-weight-bold '>Submit</Button>
      </div>
      </div>
         </section>
        </>
    )
}
export default ProductDetails;
