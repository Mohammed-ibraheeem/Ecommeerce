import BreadCrumd from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import { CiMail } from "react-icons/ci";
import Container from "../components/Container";

function Contact() {
    return (
        <>
            <Meta title={"Contact"} />
            <BreadCrumd title="Contact" />
            <Container class1="contact-wrapper py-5 home-wrapper-2">
                <div className="row d-flex flex-wrap">
                    <div className="col-12">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27630.76289042088!2d31.182440960452546!3d30.041293995972975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846cd25871d93%3A0x74a1ef05b4ecdc48!2sAd%20Doqi%2C%20Dokki%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1708380546854!5m2!1sen!2seg"
                            width="600"
                            height="450"
                            className="border-0 w-100"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justfiy-content-between">
                            <div>
                                <h3 className="contact-title mt-0">Contact</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name" />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email" />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Mobile Number" />
                                    </div>
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            className="w-100 form-control"
                                            cols="30"
                                            rows="4"
                                            placeholder="comments">
                                        </textarea>
                                    </div>
                                    <div>
                                        <button className="button border-0">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title mt-0">Get in touch whit us</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <FaHome className="fs-5" />
                                            <address className="mb-0">Hno: 70 , Shobra , Cario  </address>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiPhoneCall className="fs-5" />
                                            <a href="tel:+0201120907793">
                                                0201120907793
                                            </a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <CiMail className="fs-5" />
                                            <a href="mailto:mohamefibrahem511998@gmail.com">
                                                mohamefibrahem511998@gmail.com
                                            </a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiInfoCircle className="fs-5" />
                                            <p className="mb-0"> Monday - Friday 10Am - 8pm</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Contact;