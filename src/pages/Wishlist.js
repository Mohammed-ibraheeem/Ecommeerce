import React from 'react'
import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import img_wishlist from "../images/cross.svg"
import img_wishlist1 from "../images/watch.jpg"

function Wishlist() {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumd title="Wishlist" />
            <div className="wishlist wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={img_wishlist}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src={img_wishlist1}
                                        className='img-fluit w-100'
                                        alt="watch"
                                    />
                                </div>
                                <div className='p-3'>
                                    <h5 className='title'>
                                        Honner T1 7.0 GB RAM 8 GB RAM 7 Inch Whit Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='Price'>
                                        $ 100
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={img_wishlist}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src={img_wishlist1}
                                        className='img-fluit w-100'
                                        alt="watch"
                                    />
                                </div>
                                <div className='p-3'>
                                    <h5 className='title'>
                                        Honner T1 7.0 GB RAM 8 GB RAM 7 Inch Whit Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='Price'>
                                        $ 100
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={img_wishlist}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src={img_wishlist1}
                                        className='img-fluit w-100'
                                        alt="watch"
                                    />
                                </div>
                                <div className='p-3'>
                                    <h5 className='title'>
                                        Honner T1 7.0 GB RAM 8 GB RAM 7 Inch Whit Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='Price'>
                                        $ 100
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist