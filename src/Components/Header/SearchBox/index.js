import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";
const SearchBox = () => {
    return(
        <>
         
         <div className="headerSearch ml-3 mr-3">
         <input type="text" placeholder="Search" />
         <Button><CiSearch/></Button>
     </div>
     
     </>
    )


}
export default SearchBox;