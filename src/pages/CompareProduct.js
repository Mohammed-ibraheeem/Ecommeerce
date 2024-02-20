import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import img_compare from "../images/cross.svg"
import img_compare1 from "../images/watch.jpg"
function CompareProduct() {
    return (
        <>
            <Meta title={"Compare Product"} />
            <BreadCrumd title="Compare Product" />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative" >
                                <img
                                    src={img_compare}
                                    alt="cross"
                                    className="position-absolute cross  img-fluid"
                                />
                                <div className="product-card-image">
                                    <img
                                        src={img_compare1}
                                        alt="watch"
                                    />
                                </div>
                                <div className="product-card-details">
                                    <h5 className="title">
                                        Honner T1 7.0 GB RAM 8 GB RAM 7 Inch Whit Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price my-3">
                                        $ 100
                                    </h6>
                                    <div>
                                        <div className="product-details">
                                            <h5>Brand :</h5>
                                            <p>Sony</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Type :</h5>
                                            <p>Watches</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Sku</h5>
                                            <p>SKUOO4</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Availiabilty :</h5>
                                            <p>in Stock</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Color :</h5>
                                            <Color />
                                        </div>
                                        <div className="product-details">
                                            <h5>Size</h5>
                                            <div className="d-flex gap-10">
                                                <p>M</p>
                                                <p>XL</p>
                                                <p>XXL</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative" >
                                <img src={img_compare} alt="cross" className="position-absolute cross" />
                                <div className="product-card-image">
                                    <img src={img_compare1} alt="watch" />
                                </div>
                                <div className="product-card-details">
                                    <h5 className="title">
                                        Honner T1 7.0 GB RAM 8 GB RAM 7 Inch Whit Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price my-3">
                                        $ 100
                                    </h6>
                                    <div>
                                        <div className="product-details">
                                            <h5>Brand :</h5>
                                            <p>Sony</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Type :</h5>
                                            <p>Watches</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Sku</h5>
                                            <p>SKUOO4</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Availiabilty :</h5>
                                            <p>in Stock</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Color :</h5>
                                            <Color />
                                        </div>
                                        <div className="product-details">
                                            <h5>Size</h5>
                                            <div className="d-flex gap-10">
                                                <p>M</p>
                                                <p>XL</p>
                                                <p>XXL</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompareProduct;