import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useState } from "react";

const QuantityBox = () => {
    const [inputVal, setInputVal] = useState(1);

const minus = () => {
    if(inputVal!==1 && inputVal>0){
    setInputVal(inputVal - 1);
}
}
const plus = () => {
 setInputVal(inputVal + 1);
}
    return(
        <div className='quantityDrop d-flex align-items-center'>
        <Button onClick={minus}><FaMinusCircle /></Button>
        <input type='text' value={inputVal} />
        <Button className='plus' onClick={plus}><IoMdAddCircle /></Button>
        
       </div>
    )
}
export default QuantityBox;