import React, { useState } from 'react'
import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProdectCard";
import ReactStars from "react-rating-stars-component";
import image_headphone1 from "../images/311782903beats3.jpg"
import image_headphone2 from "../images/MQTQ3.jpeg"
import image_headphone3 from "../images/50041207b.avif"
import image_headphone4 from "../images/Restored-Beats-by-Dr-Dre-Solo2-White-Wired-NOT-WIRELESS-on-Ear-Headphones-MH8X2AM-B-Refurbished_11df1421-23f9-4862-9def-9e2597f9e109.2c284166a4548dfbde760d0003d26635.webp"
import image_headphone5 from "../images/2701855-8284395-thickbox.jpg"
import { ZoomImage } from 'react-image-zoom-on-hover';
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { CiHeart, CiDeliveryTruck } from "react-icons/ci";
import { BsSnapchat } from "react-icons/bs";
import { PiRulerLight } from "react-icons/pi";
import { BiCapsule } from "react-icons/bi";
import image_payments1 from "../images/payment1.png"
import image_payments2 from "../images/payment2.jpg"
import image_payments3 from "../images/payment3.png"
import image_payments4 from "../images/payment4.png"
import image_payments5 from "../images/payment5.png"
import image_payments6 from "../images/payment6.png"
import Container from "../components/Container";

function SingleProduct() {

    const [orderedProduct, setorderedProduct] = useState(true);
    console.log(setorderedProduct);
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumd title="Product Name" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row products">
                    <div className="col-6 ">
                        <div className='product-image'>
                            <div className="main-product-image">
                                <div>
                                    <ZoomImage imageUrl={image_headphone4} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <ZoomImage imageUrl={image_headphone2} className='image_headphone' alt='head-phone' />
                                <ZoomImage imageUrl={image_headphone3} className='image_headphone' alt='head-phone' />
                                <ZoomImage imageUrl={image_headphone1} className='image_headphone' alt='head-phone' />
                                <ZoomImage imageUrl={image_headphone5} className='image_headphone' alt='head-phone' />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title mb-4'>
                                    Kids Headphones Bludk 10 Pack Multi Colored For students
                                </h3>
                            </div>
                            <div className="border-bottom py-2">
                                <p className="price mt-2">$ 100</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        isHalf={false}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0  t-review'>Bases on 2 Reviews</p>
                                </div>
                                <a className='review-btn' href='#review'>Write a Review</a>
                            </div>
                            <div className="border-bottom py-2">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className="product-heading">Type :</h5>
                                    <p className="product-data"> Headphone</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className="product-heading">Brand :</h5>
                                    <p className="product-data"> Havelis</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className="product-heading">Categories :  </h5>
                                    <p className="product-data"> headphones, our store, smart watches</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className="product-heading">Tags :</h5>
                                    <p className="product-data">
                                        headphone  &nbsp;
                                        laptop  &nbsp;
                                        mobile  &nbsp;
                                        oppo  &nbsp;
                                        speaker  &nbsp;
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className="product-heading">Avaliability :</h5>
                                    <p className="product-data"> 541 In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h5 className="product-heading">Size </h5>
                                    <div className='d-flex flex-wrap gap-15 '>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column '>
                                    <h5 className="product-heading">Color </h5>
                                    <Color />
                                </div>
                                <div className='d-flex gap-15 align-items-center my-2'>
                                    <h5 className="product-heading">Quantity :</h5>
                                    <div className=''>
                                        <input
                                            type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{ width: "70px" }}
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex  align-items-center gap-30 ms-3'>
                                        <button className='button border-0' type="submit">Add To Cart</button>
                                        <button to="/signup" className='button signup'> Buy It Now</button>
                                    </div>
                                </div>
                                <div className='d-flex gap-15 align-items-center'>
                                    <div >
                                        <a href=' '>
                                            <TbGitCompare className='fs-5 me-2 mb-1' />
                                            Add to Compare
                                        </a>
                                    </div>
                                    <div >
                                        <a href=' '>
                                            <CiHeart className='fs-5 me-2 mb-1' />
                                            Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    <CiDeliveryTruck className='fs-5 me-2 ' />
                                                    Shopping & Returns
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <span>Free Shopping and returns avaliable on all orders!
                                                        <br />
                                                        We shop all Us Domestic orders whtin <b>5-10 business Days!</b>
                                                    </span>                                                       </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-2">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item border-0">
                                        <h2 class="accordion-header" id="flush-headingtwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapsetwo">
                                                <BsSnapchat className='fs-5 me-2' />
                                                Materials
                                            </button>
                                        </h2>
                                        <div id="flush-collapsetwo" class="accordion-collapse collapse" aria-labelledby="flush-headingtwo" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <span>
                                                    Running Shoes Cushions Yoyr Stride Whit Soft From To Keep You Running in Comfort. Lightweight Knit Material
                                                    Wraps Your Foot In Breathable Support. While a Minmalsit desgin fils in just about anywhere your day taks you.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-2">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item border-0">
                                        <h2 class="accordion-header" id="flush-headingthree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree" aria-expanded="false" aria-controls="flush-collapsethree">
                                                <PiRulerLight className='fs-5 me-2' />
                                                Dimensions
                                            </button>
                                        </h2>
                                        <div id="flush-collapsethree" class="accordion-collapse collapse" aria-labelledby="flush-headingthree" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <span>
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th className='head' scope="col">Size</th>
                                                                <th className='head' scope="col">Chest</th>
                                                                <th className='head' scope="col">Neck</th>
                                                                <th className='head' scope="col">Sieev</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th className='left-head' scope="row">Small</th>
                                                                <td>36-38*</td>
                                                                <td>14-14.5*</td>
                                                                <td>32.5*</td>
                                                            </tr>
                                                            <tr>
                                                                <th className='left-head' scope="row">Medium</th>
                                                                <td>39-41*</td>
                                                                <td>15-15.5*</td>
                                                                <td>33.5*</td>
                                                            </tr>
                                                            <tr>
                                                                <th className='left-head' scope="row">Large</th>
                                                                <td>42-44*</td>
                                                                <td>16-16.5*</td>
                                                                <td>34.5*</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-2">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item border-0">
                                        <h2 class="accordion-header" id="flush-headingfour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                                <CiHeart className='fs-5 me-2' />
                                                Care Instructions
                                            </button>
                                        </h2>
                                        <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <span>
                                                    Use a soft damp cloth and adrop of mild soap to remove any haze. Air dry
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-15 align-items-center my-3 mx-4'>
                                <span >
                                    <BiCapsule className='fs-5 me-2' />
                                    Share
                                </span>
                            </div>
                            <div className='payment p-3 my-5'>
                                <div className="title d-flex align-items-center gap-15">
                                    Payment Methods
                                </div>
                                <div className='Methods d-flex align-items-center gap-10 my-4 p-2' >
                                    <div className='image_payments img-fluid'>
                                        <img className='img1' src={image_payments1} alt="" />
                                    </div>
                                    <div className='image_payments img-fluid'>
                                        <img src={image_payments2} alt="" />
                                    </div>
                                    <div className='image_payments img-fluid'>
                                        <img src={image_payments3} alt="" />
                                    </div>
                                    <div className='image_payments img-fluid'>
                                        <img className='img1' src={image_payments4} alt="" />
                                    </div>
                                    <div className='image_payments img-fluid'>
                                        <img src={image_payments5} alt="" />
                                    </div>
                                    <div className='image_payments img-fluid'>
                                        <img src={image_payments6} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wapper py-5 home-wrapper-2 Description">
                <div className="row">
                    <div className="col-12">
                        <h3 className='mb-2 p-1'>Description</h3>
                        <div className='bg-white p-3 Description-card'>
                            <p className='title'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
                                architecto iure itaque rerum facilis sapiente laudantium, eveniet exercitationem
                                ea nam fuga voluptatum laboriosam ut optio consequuntur provident delectus labore. Nemo?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
                                architecto iure itaque rerum facilis sapiente laudantium, eveniet exercitationem
                                ea nam fuga voluptatum laboriosam ut optio consequuntur provident delectus labore. Nemo?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
                                architecto iure itaque rerum facilis sapiente laudantium, eveniet exercitationem
                                ea nam fuga voluptatum laboriosam ut optio consequuntur provident delectus labore. Nemo?
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wapper py-5 home-wrapper-2 Reviews">
                <div className="row">
                    <div className="col-12">
                        <h3 className='mb-2 p-1'>Reviews</h3>
                        <div id='review' className="review-inner-wrapper">
                            <div className='Reviews-card d-flex justify-content-between align-items-end'>
                                <div>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Bases on 2 Reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline mb-2' href=" ">
                                                Write a Review
                                            </a>
                                        </div>
                                    )}
                            </div>
                            <div className="review-form mt-4">
                                <form action="" className="d-flex flex-column gap-15 p-3">
                                    <h6 className='mb-2'>Write A Reviews</h6>
                                    <div>
                                        Name
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your Name" />
                                    </div>
                                    <div>
                                        Email
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Your Email" />
                                    </div>
                                    <div>
                                        Rating
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        Reviews Title
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Give Your Reviews a Title" />
                                    </div>
                                    <div>
                                        Body of Reviews (1500)
                                        <textarea
                                            name=""
                                            id=""
                                            className="w-100 form-control"
                                            cols="30"
                                            rows="4"
                                            placeholder="Write Your Comments Here">
                                        </textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className="button border-0">Submit Reviews</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h5 className='mt-2'>Navdeep</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            isHalf={false}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur
                                        voluptate numquam, corporis optio adipisci, quas consectetur repellat magni
                                        commodi inventore perspiciatis tempore suscipit aspernatur nostrum deleniti
                                        unde voluptas nulla?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wapper py-5 home-wrapper-2">
                <div className="col-12">
                    <h3 className="section-heading mb-4">You May Also Like</h3>
                </div>
                <div className="row d-flex flex-wrap">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
        </>
    )
}

export default SingleProduct;