// import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const MarqueeOne = ({ style_2 }: any) => {
 
  return (
    <>
    <div className="hidden">
      {style_2}
    </div>
      <div className="marquee-section style-header">
        <div className={`mycustom-marque`}>
          <div className="scrolling-wrap !pl-0 mobile:!pr-[10px] mobile:!items-start mobile:!pb-0 ">
            <div className="comm justify-between w-full mobile:mb-[10px]">
              <div className="flex gap-[10px] mobile:gap-[1px] items-center mobile:flex-col mobile:items-start">
              <div className="flex gap-[10px] items-center hidden mobile:flex mobile:pl-[8px] ">
              {/* <Link to="/" className="header-logo">
                      <img
                        className="main-logo h-[50px] mobile:h-[42px]"
                        src="/assets/iics_image/iics_logo_main.webp"
                        alt="logo-img"
                        height="40"
                      />
                    </Link> */}
                <img
                  src="/assets/iics_image/skill-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                />
                <img
                  src="/assets/iics_image/nsdc-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                />
                <img
                  src="/assets/iics_image/mesc-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                />
              </div>
              <Link to="/" className="header-logo">
                      <img
                        className="main-logo h-[50px] mobile:h-[42px] mobile:w-[200px] object-contain"
                        src="/assets/iics_image/iics_logo_main.webp"
                        alt="logo-img"
                        height="40"
                      />
                    </Link>
                {/* <img
                  src="/assets/iics_image/skill-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                />
                <img
                  src="/assets/iics_image/nsdc-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                />
                <img
                  src="/assets/iics_image/mesc-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                /> */}
              </div>

              {/* <div className="flex gap-[20px] items-center">
               
              </div> */}

              <div className=" gap-[20px] items-center flex marqueSet:flex mobile:flex-col mobile:gap-0 mobile:leading-[20px] mobile:self-start">
              {/* <p>Our Legacy</p> */}
              {/* <p>Associate with us</p> */}
                <p className=" mobile:text-[10px]">info@iicsindia.org</p>
                <p className=" mobile:text-[10px]">+91 959-4949-959</p>
                <div className="flex gap-[10px] items-center mobile:hidden ">
              {/* <Link to="/" className="header-logo">
                      <img
                        className="main-logo h-[50px] mobile:h-[42px]"
                        src="/assets/iics_image/iics_logo_main.webp"
                        alt="logo-img"
                        height="40"
                      />
                    </Link> */}
                <img
                  src="/assets/iics_image/skill-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                />
                <img
                  src="/assets/iics_image/nsdc-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                />
                <img
                  src="/assets/iics_image/mesc-logo-small.webp"
                  alt="skill-logo"
                  className="h-[50px] mobile:h-[30px]"
                />
              </div>
              </div>

              {/* <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Experience Instructors</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Kindergarten Study</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Coupon Bonus</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Extra Coupon Bonus</div> */}
            </div>
            {/* <div className="comm">
                        <div></div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Education & University</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Online Education</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 230+ Quality Courses</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Experience Instructors</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Kindergarten Study</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Coupon Bonus</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Extra Coupon Bonus</div>
                    </div> */}
            {/* <div className="comm">
                        <div></div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Education & University</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Online Education</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 230+ Quality Courses</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Experience Instructors</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> Kindergarten Study</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Coupon Bonus</div>
                        <div className={`cmn-textslide ${style_2? "text-color-2" : ""}`}><i className="flaticon-mortarboard"></i> 25% Extra Coupon Bonus</div>
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeOne;
