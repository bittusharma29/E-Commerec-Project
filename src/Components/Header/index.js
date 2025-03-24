import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.jpeg";
import CountryDropDown from '../CountryDropDown';
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";



const Header = () => {
    const Context = useContext(MyContext);
    return (
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"><b>Free shipping on all orders over $50</b></p>
                </div>
            </div>
         </div>
         <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">{/* 2 */}
                        <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                    </div>
                    <div className="col-sm-10 d-flex align-items-center part2">{/*10 */}
                        {
                            Context.countryList.length!==0 &&  <CountryDropDown/>
                        }
                   
                    
                    <SearchBox />
                   
                    {/* cart starts here*/}
                    <div className="part3 d-flex align-items-center">
                        <Button className="circle mr-3"><Link to={'/SignIn'}><FaUser /></Link></Button>
                        <div className="ml-auto cartTab d-flex align-items-center">
                            <span className="price">$3029</span>
                            <div className="position-relative ml-2">
                            <Button className="circle"><Link to={'/cart'}><BsCart4 /></Link></Button>
                            <span className="count d-flex align-items-center justify-content-center">1</span>
                            </div>
                            {/*ends here */}
                    </div>
                    </div>


                    </div>
                </div>
            </div>
        
         <Navigation />
         </header>
        </>
    )
    
}
export default Header;