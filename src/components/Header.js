import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import img1 from '../images/compare.svg'
import img2 from '../images/wishlist.svg'
import img3 from '../images/user.svg'
import img4 from '../images/cart.svg'
import img5 from '../images/menu.svg'
function Header() {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white">
                                Free Shipping Over $100 & Free Returns
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline: <a className="text-white" href="te;:+91 826495423">+91 826495423</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">Dev Corner</Link>
                            </h2>
                        </div>
                        <div classNamelassName="col-5">
                            <div className="input-group search">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search product Here..."
                                    aria-label="Search product Here..."
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <FaSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5 c1">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img src={img1} alt="compare" />
                                        <p className="mb-0">
                                            compare
                                            <br />
                                            products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img src={img2} alt="whshlist" />
                                        <p className="mb-0">
                                            Favourite
                                            <br />
                                            whshlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img src={img3} alt="user" />
                                        <p className="mb-0">
                                            Login
                                            <br />
                                            My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <img src={img4} alt="cart" />
                                        <div className="d-flex flex-column gap-10 m-2">
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0 mt-2">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottem py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src={img5} alt="..." />
                                            <span className="me-3 d-inline-block"> Shop Categories </span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item text-white" to=" ">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to=" ">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to=" ">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex alingn-items-center gap-15 ">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/store">Our Store</NavLink>
                                        <NavLink to="/">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;