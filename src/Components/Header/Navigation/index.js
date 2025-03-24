import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { FaBlog } from "react-icons/fa";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SpaIcon from '@mui/icons-material/Spa';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
    const handleMouseEnter = () => {
        console.log("handledMouseEnter called");
        setisopenSidebarVal(true);
    };
    const handleMouseLeave = () => {
        setisopenSidebarVal(false);
    }
    return (
        <>
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 navPart1">{/*3*/}
                        <div className='catWrapper'>
                        <Button className="allCatTab align-items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <span className="icon1 mr-2"><MdOutlineMenu /></span>
                            <span className="text">ALL CATEGORIES</span>
                           <span className="icon2 ml-2"><IoIosArrowDown /></span>
                        </Button>

                        <div className={`sidebarNav ${isopenSidebarVal ? 'open' : ''}`}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <ul>
                        <li><Link to="/"><Button>Men <ArrowForwardIosIcon className='ml-auto'/></Button></Link>
                        <div className='submenu'>
                        <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                            <Link to="/"><Button>Accessories</Button></Link>
                            </div></li>
                        <li><Link to="/"><Button>Women  <ArrowForwardIosIcon className='ml-auto'/></Button></Link>
                        <div className='submenu'>
                        <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                            <Link to="/"><Button>Accessories</Button></Link>
                            </div></li>
                        <li><Link to="/"><Button>Watches</Button></Link></li>                   
                        <li><Link to="/"><Button>kids  <ArrowForwardIosIcon className='ml-auto'/></Button></Link>
                        <div className='submenu'>
                        <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                            <Link to="/"><Button>Accessories</Button></Link>
                            </div>
                        </li>
                        <li><Link to="/"><Button>gift</Button></Link></li>                
                        <li><Link to="/"><Button>Brands</Button></Link></li>
                        </ul>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-sm-6 navPart2 d-flex align-items-center">{/*6*/}
                    <ul className='list list-inline ml-auto'>
                        <li className='list-inline-item'><Link to ='/'><Button><HomeIcon /> Home</Button></Link></li>
                        <li className='list-inline-item'><Link to ='/'><Button><CheckroomIcon />Men</Button></Link>
                        <div className="submenu shadow">
                            <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                        </div>
                        </li>
                        <li className='list-inline-item'><Link to ='/'> <Button><HeadphonesIcon />Women</Button></Link>
                        <div className="submenu shadow">
                            <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                        </div></li>
                        <li className='list-inline-item'><Link to ='/'> <Button><BakeryDiningIcon />Watches</Button></Link>
                        <div className="submenu shadow">
                            <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                        </div></li>
                        <li className='list-inline-item'><Link to ='/'><Button><SpaIcon/> kids</Button></Link>
                        <div className="submenu shadow">
                            <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                        </div></li>
                        <li className='list-inline-item'><Link to ='/'><Button><FaBlog />gift</Button></Link>
                        <div className="submenu shadow">
                            <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                        </div></li>
                        <li className='list-inline-item'><Link to ='/'><Button><SupportAgentIcon />Brands</Button></Link>
                        <div className="submenu shadow">
                            <Link to="/"><Button>Clothing</Button></Link>
                            <Link to="/"><Button>Footwear</Button></Link>
                            <Link to="/"><Button>Watches</Button></Link>
                        </div></li>
                    </ul>

                </div>
                </div>
                
            </div>
         </nav>

        </>
    )
}
export default Navigation;