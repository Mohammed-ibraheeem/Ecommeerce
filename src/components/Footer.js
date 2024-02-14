import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs"
import img1 from '../images/newsletter.png'

function Footer() {
    return (
        <>
            <footer className="py-5">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src={img1} alt="newslatter" />
                                <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-14">
                            <div className="input-group search">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    Hno : 277 Near Vill Chopal, <br />
                                    Sonipat, Haryana <br />
                                    Pricode: 131103
                                </address>
                                <a href="tel:+201555599924"
                                    className="mt-3 d-block mb-1 text-white">
                                    +201555599924
                                </a>
                                <a href="mailto:mohamefibrahem511998.com"
                                    className="mt-2 d-block mb-0 text-white">
                                    mohamefibrahem511998.com
                                </a>
                                <div className="social-icons mt-4 d-flex alingn-items-center gap-15">
                                    <a className='text-white' href=' '>
                                        <BsLinkedin className=' fs-4' />                                    </a>
                                    <a className='text-white' href=' '>
                                        <BsGithub className=' fs-4' />
                                    </a>
                                    <a className='text-white' href=' '>
                                        <BsInstagram className=' fs-4' />
                                    </a>
                                    <a className='text-white' href=' '>
                                        <BsYoutube className='fs-4' />
                                    </a>
                                    <a className='text-white' href=' '>
                                        <BsFacebook className=' fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1'>Shopping Policy</Link>
                                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Feq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()};
                                powered by Devoloper's corner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;