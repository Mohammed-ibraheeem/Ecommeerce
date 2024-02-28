import React from 'react'
import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import img_blog from '../images/blog-1.jpg'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import Container from "../components/Container";
function SingleBlog() {
    return (
        <>
            <Meta title={"News"} />
            <BreadCrumd title="News" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Find By Categories
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row d-flex flex-wrap">
                            <div className="col-12 mb-3">
                                <div className='single-bloge-card'>
                                    <h5 className='title mb-4'>A Beautiful Sunday Morning Renaissance</h5>
                                    <div className="card-image">
                                        <img src={img_blog} className='img-fluid w-100 ' alt="blog" />
                                    </div>
                                    <p className='desc'>
                                        you're Only As Your Last Collection, Which is
                                        An Enormous Pressure. I Think There is Something About luxury -
                                        it's not somthing people need.
                                        but it's what they want. it reahhy puills at their heart.
                                        ihave a fantastic relationship with money. sceierisque sociosqu
                                        ullamcorper urna nisi mallis vestiblum pretium commado inceptos
                                        cum condimentum placreat diam venenatis
                                        blandit hac eget dis parturient a accumsan nisl ante vestibulum.
                                    </p>
                                    <p className='date'>11 JUNE, 2022 &nbsp; Mohamed</p>
                                    <div className='d-flex social-media mb-3'>
                                        <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                            <HiOutlineArrowNarrowLeft className='fs-4' />
                                            Back To blog
                                        </Link>
                                        <div className='col'>
                                            <div className="rounded float-end d-flex align-items-center gap-10" >
                                                <FaFacebook className='social' />
                                                <FaTwitter className='social' />
                                                <FaPinterest className='social' />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='Comment-card p-4'>
                                            <h3 className="Comment-title mt-0">Leave A Comment</h3>
                                            <form action="" className="d-flex flex-column gap-15">
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Name*" />
                                                    </div>
                                                    <div className='col-6'>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Email*" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <textarea
                                                        name=""
                                                        id=""
                                                        className="w-100 form-control"
                                                        cols="30"
                                                        rows="4"
                                                        placeholder="Comments*">
                                                    </textarea>
                                                </div>
                                                <div>
                                                    <button className="button border-0">Post Comment</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog