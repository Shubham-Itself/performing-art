import { Link } from "react-router-dom";
import MobileMenu from "../layouts/headers/MobileMenu";


 

const OffCanvas = ({setOpenCanvas, openCanvas} : any) => {
  return (
    <>
      <div className="fix-area">
            <div className={`offcanvas__info ${openCanvas ? "info-open" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-3 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo w-[200px]">
                                <Link to="/" className="font-bold">
                                    INDIAN INSTITUTE OF <span className="text-[#de4141]">CREATIVE</span> SKILLS
                                </Link>
                            </div>
                            <div className="offcanvas__close" onClick={() => setOpenCanvas(false)}>
                                <button>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                      <div className="flex gap-[20px] mb-3">
                      <p>Our Legacy</p>
                      <p>Associate with us</p>
                      </div>
                        <div className="mobile-menu fix mb-3 mean-container">
                          <MobileMenu />
                        </div>
                        {/* <div className="offcanvas__contact">
                            <h3>Information</h3>
                            <ul className="contact-list">
                                <li>
                                    <span>
                                        Address:
                                    </span>
                                    7300-7398 Colonial Rd,
                                    Brooklyn, NY 11209
                                </li>
                                <li>
                                    <span>
                                        Call Us:
                                    </span>
                                    <a href="tel:+00012345688">+000 123 456 88</a>
                                </li>
                                <li>
                                    <span>
                                        Email:
                                    </span>
                                    <a href="mailto:supportedus@gmail.com">supportedus@gmail.com</a>
                                </li>
                            </ul>
                            <div className="offcanvas-button">
                                <Link to="/sign-in" className="theme-btn style-2"><i className="far fa-user"></i> Admin</Link>
                                <Link to="/register" className="theme-btn yellow-btn">Enroll Now</Link>
                            </div>
                        </div> */}
                          <div className="flex flex-col gap-[10px]  ">
              
                <p>info@iicsindia.org</p>
                <p>+91 959-4949-959</p>
              
              </div>
                        {/* <h3 className="offcanvas-title">Hello There!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, </p> */}
                        <div className="social-icon d-flex align-items-center">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`offcanvas__overlay ${openCanvas? "overlay-open" : ""}`} onClick={() => setOpenCanvas(false)}></div>
    </>
  );
};

export default OffCanvas;