import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/Logo.jpeg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const SignIn = () => {
    const context = useContext(MyContext);
    useEffect(() => {
        context.setIsHeaderFooterShow(false); // Updated to match the correct function name
    }, []);

    return (
        <>
            <section className="section signInPage">
                <div className="shape-bottom">
                <svg fill='#fff' id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"
                style={{enableBackground:'new 0 0 1921 819.8'}}>
                    <path class="st0" d="M1921,413.1v406.7H0v0.5h0.41228.1,598.3c30,74.480.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z">
                </path>
                </svg>

                    </div>
                <div className="container">
                
                    <div className="box card p-3 shadow border-0">
                        
                      <div className="text-center">
                      <img src={Logo} width={200} alt="Logo"/>
                      </div>
                      <form className="mt-1">
                      <h2>Sign In</h2>
                        <div className="form-group">
                        <TextField id="standard-basic" label="Email" variant="standard" type="email"required className="w-100"/>
                        </div>
                        <div className="form-group">
                        <TextField id="standard-basic" label="Password" variant="standard" type="password" required className="w-100"/>
                        </div>
                        <a className="border-effect cursor" href="www.google.com">Forgot Password?</a>
                        <Button className="btn-blue btn-lg btn-big w-100 mt-2">Sign In</Button>
                        <p>Not Registered? <Link to="/signup" className="border-effect cursor">Sign Up</Link></p>
                        <h6 className="mt-3 text-center font-weight-bold">or Continue With Social Account</h6>
                        <ul className="list list-inline ml-5 mt-4 socials">
                            <li className="list-inline-item">
                                <Link to="#"><FaFacebook /></Link>
                            </li>
                            <li className="list-inline-item ">
                                <Link to="#"><FaGoogle /></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><FaInstagramSquare /></Link>
                            </li>
                            

                        </ul>
                      </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignIn;
