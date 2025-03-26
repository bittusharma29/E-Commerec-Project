import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { PiCheeseBold } from "react-icons/pi";
import { GiSlicedBread } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { GiMilkCarton } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import { useState, useCallback } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
const handleMouseEnter = useCallback(() => {
    console.log("handledMouseEnter called");
    setisopenSidebarVal(true);
}, []);

const handleMouseLeave = useCallback(() => {
    setisopenSidebarVal(false);
}, []);

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
                        <li><Link to="/"><Button>BREAD <ArrowForwardIosIcon className='ml-auto'/></Button></Link>
                        <div className='submenu'>
                            </div></li>
                        <li><Link to="/"><Button>BREAKFAST  <ArrowForwardIosIcon className='ml-auto'/></Button></Link>
                        <div className='submenu'>
                            </div></li>
                        <li><Link to="/"><Button>CANDY</Button></Link></li>                   
                        <li><Link to="/"><Button>CHEESE<ArrowForwardIosIcon className='ml-auto'/></Button></Link>
                        <div className='submenu'>
                            </div>
                        </li>
                        <li><Link to="/"><Button>DAIRY</Button></Link></li>                
                        <li><Link to="/"><Button>HOME</Button></Link></li>
                        </ul>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-sm-6 navPart2 d-flex align-items-center">{/*6*/}
                    <ul className='list list-inline ml-auto'>
                        <li className='list-inline-item'><Link to ='/'><Button><HomeIcon /> Home</Button></Link></li>
                        
                        <li className='list-inline-item'><Link to ='/'> <Button><GiSlicedBread />Bread</Button></Link>
                        <div className="submenu shadow">
                            
                        </div></li>
                        <li className='list-inline-item'><Link to ='/'> <Button><MdFreeBreakfast />Cereals</Button></Link>
                        <div className="submenu shadow">
                        </div></li>
                        <li className='list-inline-item'><Link to ='/'><Button><LuCandy/>Candy</Button></Link>
                        <div className="submenu shadow">
                        </div></li>
                        <li className='list-inline-item'><Link to ='/'><Button><PiCheeseBold />Cheese</Button></Link>
                        <div className="submenu shadow">
                        </div></li>
                        <li className='list-inline-item'><Link to ='/'><Button><GiMilkCarton />Dairy</Button></Link>
                        <div className="submenu shadow">
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
