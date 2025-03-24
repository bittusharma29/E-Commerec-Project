import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/quantityDropDown";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Cart = () => {
    return(
    <>
     <section className="section cartPage">
        <div className="container">
        <h2 className="hd mb-0 mt-4">
               YOUR CART
            </h2>
            <p>There are <b>3</b> product in your cart</p>
            <div className="row">
                <div className="col-md-8">     
            <div className="table-responsive">
             <table className="table">
                <thead>
                    <tr>
                    <th width="50%">
                        Product
                    </th>
                    <th>
                        Unit price
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Subtotal
                    </th>
                    <th>
                        Remove
                    </th>
                </tr>
                </thead>
             </table>
             <tbody>
                <tr>
                    <td width="50%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.png" alt="product" className="w-100"/>
                            </div>
                            <div className="info px-3">
                              <h6>Aashirvaad Atta - Superior MP Whole Wheat, No Maida | Pouch</h6>
                              <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>
                        </div>
                        </Link>
                    </td>
                    <td width="10%" className="text-left">₹500</td>
                    <td width="14%" className="text-align-center"><QuantityBox /></td>
                    <td width="10%" className="text-left">₹500</td>
                    <td width="10%" className="text-center"><CloseIcon/></td>
                </tr>
                <hr/>
                <tr>
                    <td width="50%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.png" alt="product" className="w-100"/>
                            </div>
                            <div className="info px-3">
                              <h6>Aashirvaad Atta - Superior MP Whole Wheat, No Maida | Pouch</h6>
                              <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>
                        </div>
                        </Link>
                    </td>
                    <td width="10%" className="text-left">₹500</td>
                    <td width="14%" className="text-align-center"><QuantityBox /></td>
                    <td width="10%" className="text-left">₹500</td>
                    <td width="10%" className="text-center"><CloseIcon/></td>
                </tr>
                <hr/>
                <tr>
                    <td width="50%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.png" alt="product" className="w-100"/>
                            </div>
                            <div className="info px-3">
                              <h6>Aashirvaad Atta - Superior MP Whole Wheat, No Maida | Pouch</h6>
                              <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>
                        </div>
                        </Link>
                    </td>
                    <td width="10%" className="text-left">₹500</td>
                    <td width="14%" className="text-align-center"><QuantityBox /></td>
                    <td width="10%" className="text-left">₹500</td>
                    <td width="10%" className="text-center"><CloseIcon/></td>
                </tr>
                <hr/>
             </tbody>
            </div>
                    </div>
                    <div className="col-md-3">
                     <div className="card border p-3 cartDetails">
                       <h4>CART TOTAL</h4>
                       <div className="d-flex align-items-center mb-3">
                         <span>Subtotal</span>
                         <span className="ml-auto text-red">₹500</span>
                       </div>
                       <div className="d-flex align-items-center mb-3">
                         <span>shipping</span>
                         <span className="ml-auto"><b>FREE</b></span>
                       </div>
                       <hr/>
                       <div className="d-flex align-items-center">
                         <span>Total</span>
                         <span className="ml-auto text-red font-weight-bold">₹500</span>
                       </div>
                       <br/>
                       <Button className='btn-blue btn-lg btn-big font-weight-bold '><ShoppingCartIcon/>ADD TO CART</Button>
                     </div>
                    </div>
           
        </div>
        </div>
     </section>
    </>)
}
export default Cart;