import ReactStars from "react-rating-stars-component";
import img_product from "../images/311782903beats3.jpg"
import img_product5 from "../images/MQTQ3.jpeg"
import img_product1 from "../images/prodcompare.svg"
import img_product2 from "../images/view.svg"
import img_product3 from "../images/add-cart.svg"
import img_product4 from "../images/wish.svg"

import { Link, useLocation } from "react-router-dom";
function ProductCard(props) {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-2"}`}>
                <Link to="/product/:id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={img_product4} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img className="img_product imd-fluid" src={img_product} alt="Producrimage" />
                        <img className="img_product imd-fluid" src={img_product5} alt="Producrimage" />
                    </div>
                    <div className="product-detalis">
                        <h6 className="brand">Havels</h6>
                        <h5 className="Product-title">
                            Kids Headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
                            At Vero eos et accusamus et insto odio digissimos ducimus qui
                            blanditiis praesentim voluptaum deleniti atque corrupti quos
                            dolores et quas ,olestias excepturi excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent">
                                <img src={img_product1} alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={img_product2} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={img_product3} alt="addcard" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default ProductCard;