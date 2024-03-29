import React from 'react'
import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import imagewatch from '../images/watch.jpg'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Container from "../components/Container";

function Cart() {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumd title="Cart" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row d-flex flex-wrap">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="cart-data py-3 d-flex justify-content-between align-items-center ">
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img
                                        src={imagewatch}
                                        className='img-fluid'
                                        alt="watch"
                                    />
                                </div>
                                <div className='w-75'>
                                    <h5 className='title'>
                                        Kids Headphone bulk 10 pack multi colored for students</h5>
                                    <p className='Size mt-3'>Size : M</p>
                                    <p className='Color'>Color : #A85A5A</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className='price'>$ 100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input
                                        className='form-control'
                                        type="number"
                                        name=''
                                        min={1}
                                        max={10}
                                        id=''
                                    />
                                </div>
                            </div>
                            <div className='cart-col-4 '>
                                <h5 className='price'>$ 100</h5>
                                <AiFillDelete className='mx-2 fs-5' />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to="/Ecommeerce/store" className='button'>
                                Continue To Shopinng
                            </Link>
                            <div className='d-flex flex-column align-items-end '>
                                <h4>SubTotal: $ 1000</h4>
                                <p>Texes and shopping calclated at cheackout</p>
                                <Link to="/Ecommeerce/checkout" className='button' >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart