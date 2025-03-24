import React, { useContext, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(
  props, ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  /*for opening and closing country drop-down*/ const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  useEffect(() => {
    setCountryList(context.countryList);
  }, [context.countryList]);

  const selectCountry = (index, country) => {
    if (index >= 0 && index < countryList.length) {
      setSelectedTab(index);
      setisOpenModal(false);
      context.setselectedCountry(country);
    }
  }

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const filteredCountryList = [...context.countryList].filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(filteredCountryList);
    } else {
      setCountryList(context.countryList);
    }
  }
  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}> {/*for openingcountry drop-down*/}
        <div className="info d-flex flex-column">
          <span className='label'>Your Location</span>
          <span className='name'>{context.selectedCountry && context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...': context.selectedCountry || 'Select Location'}</span>
        </div>
        <span className='ml-auto'><FaAngleDown /></span>
      </Button>

      <Dialog open={isOpenModal} className='LocationModal' TransitionComponent={Transition}>
        <h4 className="mb-0">Choose Your Location</h4>
        <p>Enter your address and we will specify the offer to your area.</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}><CloseIcon /></Button>
        {/* for closing drop-down up */}
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search your area..." onChange={filterList} />
          <Button><CiSearch /></Button>
        </div>
        <ul className="countryList">
          {
            countryList?.length !== 0 && countryList?.map((item, index) => {
              return (
                <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                  className={`${selectedTab === index ? 'active' : ''}`}
                >{item.country}</Button></li>
              )
            })
          }
        </ul>
      </Dialog>
    </>
  )
}

export default CountryDropDown;