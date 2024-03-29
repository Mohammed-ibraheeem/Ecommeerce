import React from 'react'
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import image_whatch from '../images/watch.jpg'
import image_headphone from '../images/311782903beats3.jpg'
import Container from "../components/Container";

function CheckOut() {
    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Dev Corner</h3>
                            <nav
                                style={{ "--bs-breadcrumb-divider": '>' }}
                                aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/Ecommeerce/cart" className='text-dark'>
                                            Cart
                                        </Link>
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page">
                                        Information
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page">
                                        Shopping
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className='title'>Contact information</h4>
                            <p className="user-detalis">
                                Mohamed(Mohamed@gmail.com)
                            </p>
                            <h4 className='mb-3'>Shopping Address</h4>
                            <form
                                action=""
                                className='d-flex gap-15 flex-wrap jusrify-content-between'
                            >
                                <div className='w-100'>
                                    <select
                                        name=""
                                        className='form=control form-select'
                                        id="">
                                        <option value="" selected disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder='First Name'
                                        className='form-control'
                                    />
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder='Last Name'
                                        className='form-control'
                                    />
                                </div>
                                <div className='w-100'>
                                    <input
                                        type="text"
                                        placeholder='Address'
                                        className='form-control'
                                    />
                                </div>
                                <div className='w-100'>
                                    <input
                                        type="text"
                                        placeholder='Apartment, Suite, etc'
                                        className='form-control'
                                    />
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder='City'
                                        className='form-control'
                                    />
                                </div>
                                <div className='flex-grow-1'>
                                    <select
                                        name=""
                                        className='form=control form-select'
                                        id="">
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder='ZipCode'
                                        className='form-control'
                                    />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/Ecommeerce/cart" className='text-dark'>
                                            <IoArrowBack className='gap-15 fs-5 m-2' />
                                            Return to Cart
                                        </Link>
                                        <Link to="/Ecommeerce/store" className='button'>
                                            Continue to Shopping
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className="d-flex gap-10 mt-0 mb-2 justify-content-between align-items-center">
                                <div className='checkout-card-left w-75 d-flex gap-15'>
                                    <div className='gap-15 d-flex align-items-center'>
                                        <div className='w-25 position-relative'>
                                            <span style={{ top: "-10px", right: "1px" }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                            <img
                                                src={image_whatch}
                                                className='img-fluid'
                                                alt="product"
                                            />
                                        </div>
                                        <div className='w-75'>
                                            <h5 className='title'>
                                                Kids Headphone bulk 10 pack multi colored for students</h5>
                                            <p className='Size mt-2'>s / #BSCEDE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-25 checkout-price'>
                                    <h5 className='total'>$ 100</h5>
                                </div>
                            </div>
                            <div className="d-flex gap-10 mt-3 mb-2 justify-content-between align-items-center">
                                <div className='checkout-card-left w-75 d-flex gap-15'>
                                    <div className='gap-15 d-flex align-items-center'>
                                        <div className='w-25 position-relative'>
                                            <span style={{ top: "-10px", right: "1px" }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                            <img
                                                src={image_headphone}
                                                className='img-fluid'
                                                alt="product"
                                            />
                                        </div>
                                        <div className='w-75'>
                                            <h5 className='title'>
                                                Kids Headphone bulk 10 pack multi colored for students</h5>
                                            <p className='Size mt-2'>s / #A85SA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-25 checkout-price'>
                                    <h5 className='total'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4' >
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>$10000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shopping</p>
                                <p className='mb-0 total-price'>$10000</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center py-4'>
                            <h4 className='total-price'>Total</h4>
                            <h5 className='total'>USD <b className='total-price-blod'> $25850</b></h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CheckOut;