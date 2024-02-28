import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import image from "../images/main-banner-1.jpg"
import image1 from "../images/catbanner-01.jpg"
import image2 from "../images/catbanner-02.jpg"
import image3 from "../images/catbanner-03.jpg"
import image4 from "../images/catbanner-04.jpg"
//import image_servies1 from "../images/service.png"
//import image_servies2 from "../images/service-02.png"
//import image_servies3 from "../images/service-03.png"
//import image_servies4 from "../images/service-04.png"
//import image_servies5 from "../images/service-05.png"
import image_categories from "../images/laptop.jpg"
import image_categories1 from "../images/camera.jpg"
import image_categories2 from "../images/tv.jpg"
import image_categories3 from "../images/1676705699359.webp"
import image_categories4 from "../images/sony-dualshock-4-wireless-controller-ps4-white_1.webp"
import image_categories5 from "../images/61cIST+osWL._AC_UF894,1000_QL80_.jpg"
import image_categories6 from "../images/headphone.jpg"
import image_categories7 from "../images/acc.jpg"
import image_categories8 from "../images/speaker.jpg"
import image_categories9 from "../images/homeapp.jpg"
import image_brand from "../images/brand-01.png"
import image_brand1 from "../images/brand-02.png"
import image_brand2 from "../images/brand-03.png"
import image_brand3 from "../images/brand-04.png"
import image_brand4 from "../images/brand-05.png"
import image_brand5 from "../images/brand-06.png"
import image_brand6 from "../images/brand-07.png"
import image_brand7 from "../images/brand-08.png"
import image_famous1 from "../images/subbanner-01.webp"
import image_famous2 from "../images/subbanner-02.webp"
import image_famous3 from "../images/subbanner-03.webp"
import image_famous4 from "../images/subbanner-04.webp"
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProdectCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

function Home() {
    return (
        <>
            <Container class1="home-wrapper-1 py-5" >
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative ">
                            <img
                                src={image}
                                className="img-fluid rouneded-3"
                                alt="main-banner"
                            />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCGARGED FOR PRIS.</h4>
                                <h5>IPAD S13+ PRO.</h5>
                                <p>From $999.00 or $41.62/mo <br />
                                    for 24 mo. Footeote*
                                </p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10 justify-contect-between align-items-center">
                            <div className="small-banner position-relative ">
                                <img
                                    src={image1}
                                    className="img-fluid rouneded-3"
                                    alt="main-banner"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>BEST SALE</h4>
                                    <h5>Laptops Max</h5>
                                    <p>From $1699.00 or
                                        <br />
                                        $64.62/mo
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative ">
                                <img
                                    src={image2}
                                    className="img-fluid rouneded-3"
                                    alt="main-banner"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>Buy OPad Air</h5>
                                    <p>From $599.00 or
                                        <br />
                                        $49.91/mo for mo*
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative ">
                                <img
                                    src={image3}
                                    className="img-fluid rouneded-3"
                                    alt="main-banner"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>15% OFF</h4>
                                    <h5>Smartwatch 7</h5>
                                    <p>shop the latestband
                                        <br />
                                        styles and colors.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src={image4}
                                    className="img-fluid rouneded-3 "
                                    alt="main-banner"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>FREE ENGRAVING</h4>
                                    <h5>AirPods Max</h5>
                                    <p>
                                        High-fidelity playback &
                                        <br />
                                        ultra-low distortion
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-5" >
                <div className="row">
                    <div className="col-12">
                        <div className="servies d-flex alingn-items-center justify-content-between">
                            {services?.map((i, j) => {
                                return (
                                    <div className="d-flex align-items-center gap-15" key={j}>
                                        <img src={i.image} alt="servies" />
                                        <div>
                                            <h6>{i.title}</h6>
                                            <p className="mb-0">{i.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })
                            }
                            {/*<div className="d-flex align-items-center gap-15">
                                <img src={image_servies1} alt="servies" />
                                <div >
                                    <h6>Free Shopping</h6>
                                    <p className="mb-0">From all orders over $100</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src={image_servies2} alt="servies" />
                                <div>
                                    <h6>Daily Suprise Offers</h6>
                                    <p className="mb-0">Save up to 25% off</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src={image_servies3} alt="servies" />
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className="mb-0">Shop whit an exert</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src={image_servies4} alt="servies" />
                                <div>
                                    <h6>Affordable Prise</h6>
                                    <p className="mb-0">Get Factory direct price</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src={image_servies5} alt="servies" />
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p className="mb-0">100% Protected Payments</p>
                                </div>
    </div>*/}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-3 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Computers & Laptop</h6>
                                    <p> 8 Items</p>
                                </div>
                                <img src={image_categories} alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Cameras & Videos</h6>
                                    <p> 10 Items</p>
                                </div>
                                <img src={image_categories1} alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Smart Tvelevision</h6>
                                    <p> 12 Items</p>
                                </div>
                                <img src={image_categories2} alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Smart Watches </h6>
                                    <p> 13 Items</p>
                                </div>
                                <img src={image_categories3} className="image_categories3" alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p> 4 Items</p>
                                </div>
                                <img src={image_categories4} className="image_categories4" alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Mobiles & Tablets</h6>
                                    <p> 5 Items</p>
                                </div>
                                <img src={image_categories5} className="image_categories5" alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Headphones</h6>
                                    <p> 6 Items</p>
                                </div>
                                <img src={image_categories6} alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Accessories</h6>
                                    <p> 10 Items</p>
                                </div>
                                <img src={image_categories7} alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Portable Speekers</h6>
                                    <p> 8 Items</p>
                                </div>
                                <img src={image_categories8} alt="Camera" />
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <div>
                                    <h6>Home Appliances</h6>
                                    <p> 6 Items</p>
                                </div>
                                <img src={image_categories9} alt="Camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="featured-wapper py-5 home-wrapper-2">
                <div className="col-12">
                    <h3 className="section-heading">Featured Collection</h3>
                </div>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <Container class1="famous-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={image_famous1} className="img-fluid" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={image_famous2} className="img-fluid" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">Studio display</h5>
                                <h6 className="text-dark">600 nits of brightness.</h6>
                                <p className="text-dark">27-inch 5k Retina display</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={image_famous3} className="img-fluid" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">Smartphones</h5>
                                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                                <p className="text-dark">Now in Green. From $999.00or $41.62/mo. for 24mo. Footnote*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={image_famous4} className="img-fluid" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">Home Speaker</h5>
                                <h6 className="text-dark">Room-fikking sound.</h6>
                                <p className="text-dark">From $699 or $116.58/mo. for 12mo.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="special-wrapper py-5 home-wrapper-2">
                <div className="col-12">
                    <h3 className="section-heading">Special Products</h3>
                </div>
                <div className="row">
                    <div className="sp d-flex ">
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </Container >
            <Container class1="popular-wapper py-5 home-wrapper-2">
                <div className="col-12">
                    <h3 className="section-heading">our Popular Products</h3>
                </div>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <Container class1="marquee-warpper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-warpper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25"><img src={image_brand} alt="brand " /> </div>
                                <div className="mx-4 w-25"><img src={image_brand1} alt="brand " /> </div>
                                <div className="mx-4 w-25"><img src={image_brand2} alt="brand " /> </div>
                                <div className="mx-4 w-25"><img src={image_brand3} alt="brand " /> </div>
                                <div className="mx-4 w-25"><img src={image_brand4} alt="brand " /> </div>
                                <div className="mx-4 w-25"><img src={image_brand5} alt="brand " /> </div>
                                <div className="mx-4 w-25"><img src={image_brand6} alt="brand " /> </div>
                                <div className="mx-4 w-25"><img src={image_brand7} alt="brand " /> </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="blog-wapper py-5 home-wrapper-2">
                <div className="col-12">
                    <h3 className="section-heading">Our Latest Blogs</h3>
                </div>
                <div className="row d-flex flex-wrap">
                    <div className="col-3 mb-4">
                        <BlogCard />
                    </div>
                    <div className="col-3 mb-4">
                        <BlogCard />
                    </div>
                    <div className="col-3 mb-4">
                        <BlogCard />
                    </div>
                    <div className="col-3 mb-4">
                        <BlogCard />
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Home;