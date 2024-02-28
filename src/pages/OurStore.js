import ReactStars from "react-rating-stars-component";
import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import image_random_p from "../images/311782903beats3.jpg"
import image_random_p1 from "../images/apple-watch-series-2-smartwatch-42mm-silver-stainless-steel-case-refurbished-excellent-sim-free-cheap-2922306666557.webp"
import image_drid1 from "../images/gr.svg"
import image_drid2 from "../images/gr2.svg"
import image_drid3 from "../images/gr3.svg"
import image_drid4 from "../images/gr4.svg"
import { useState } from "react";
import ProductCard from "../components/ProdectCard";
import Color from "../components/Color";
import Container from "../components/Container";

function OurStore() {
    const [grid, setGrid] = useState(4);
    //alert(grid);
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumd title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop By Categories
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
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">Availabity</h5>
                                <div>
                                    <div className="form-check">
                                        <input
                                            className="from-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="from-check-label" htmlFor=""
                                        >
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="from-check-input"
                                            type="checkbox"
                                            value=""
                                            id="" />
                                        <label
                                            className="from-check-label" htmlFor=""
                                        >
                                            Out Of Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-item-center gap-10">
                                    <div class="form-floating  d-flex flex-wrap">
                                        <input
                                            type="email"
                                            className="form-control "
                                            id="floatingInput"
                                            placeholder="From" />
                                        <label htmlFor="floatingInput">
                                            From
                                        </label>
                                    </div>
                                    <div class="form-floating ">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="To" />
                                        <label htmlForfor="floatingInput1">
                                            To
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div >
                                    <Color />
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input
                                            className="from-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-1"
                                        />
                                        <label
                                            className="from-check-label" htmlFor="color-1"
                                        >
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="from-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-2"
                                        />
                                        <label
                                            className="from-check-label" htmlFor="color-2"
                                        >
                                            M (0)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Product Tags
                            </h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Headphone
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Laptop
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Mobile
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Oppo
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Speaker
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Tablet
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Vivo
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Wire
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Random Product
                            </h3>
                            <div>
                                <div className="random-product mb-3 d-flex">
                                    <div className="w-25">
                                        <img src={image_random_p} className="img-fluid image_random_p " alt="headphone" />
                                    </div>
                                    <div className="w-75">
                                        <h5>Kids Headphones Bludk 10 Pack Multi Colored For...
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
                                        <b>$ 100.00 </b>
                                    </div>
                                </div>
                                <div className="random-product d-flex">
                                    <div className="w-25">
                                        <img src={image_random_p1} className="img-fluid image_random_p " alt="headphone" />
                                    </div>
                                    <div className="w-75">
                                        <h5>Apple Watch Series 2 - 42 HM Stainiess Steel... </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300.00 </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="row d-flex justify-content-betwen align-items-center">
                                <div className="col">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 " style={{ width: "100px" }}>Sort By:</p>
                                        <select
                                            style={{ width: "200px" }}
                                            name=" "
                                            class="form-select form-control" aria-label="Default select example"
                                            id=""
                                        >
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">Best Selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-dscending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">price, low to high</option>
                                            <option value="price-dscending">price, high to low</option>
                                            <option value="created-ascending">Date, new to old</option>
                                            <option value="created-dscending">Date, old to new</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className=" rounded float-end d-flex align-items-center  gap-10">
                                        <p className="totalproducts mt-2">21 Products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() => {
                                                setGrid(3);
                                            }}
                                                src={image_drid4}
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img onClick={() => {
                                                setGrid(4);
                                            }}
                                                src={image_drid3}
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img onClick={() => {
                                                setGrid(6);
                                            }}
                                                src={image_drid2}
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img onClick={() => {
                                                setGrid(12);
                                            }}
                                                src={image_drid1}
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}
export default OurStore;