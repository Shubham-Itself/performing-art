import { Link } from "react-router-dom";

 

const TopCategoryHomeTwo = () => {
  return (
    <>
       <section className="top-category-section-2 pb-0 section-padding fix footer-bg">
            <div className="circle-shape">
                <img src="assets/img/circle-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="text-white wow fadeInUp mobile:!text-[15px]">
                    Your Journey to Media & Entertainment: Application and Program Structure
                    </h6>
                   
                </div>
                <div className="top-category-wrapper-2 mt-4 mt-md-0 !bg-transparent">
                    <div className="row ">
                        <div className="">
                            <div className="top-category-left-items mb-5 mb-lg-0">
                                <div className="row gap-y-[1.5rem] justify-center">
                                    <div className="!w-[250px] wow fadeInUp" data-wow-delay=".2s">
                                        <div className=" top-category-box !border-none bg-1 border-left-none border-top-none h-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />
                                            <Link to="#" className="relative z-20">
                                                <div className="icon hover:!text-">
                                                    {/* <i className="flaticon-graphic-design"></i>
                                                     */}
                                                     <p>1</p>
                                                </div>
                                                <div className="content">
                                                    <h6 className="!text-[14px] mb-[15px]">Application Form Submission</h6> 
                                                    <p className="!text-[12px] leading-[18px]">Begin by filling out the online application form with accurate academic and personal details.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="!w-[250px] wow fadeInUp" data-wow-delay=".4s">
                                        <div className="top-category-box !border-none bg-2 border-left-none border-top-none h-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

                                            <Link to="#" className="relative z-20">
                                                <div className="icon">
                                                <p>2</p>
                                                </div>
                                                <div className="content">
                                                    <h6 className="!text-[14px] mb-[15px]">Entrance Exam</h6>
                                                    <p className="!text-[12px] leading-[18px]">Appear for the online entrance exam designed to assess your aptitude and creative potential.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="!w-[250px] wow fadeInUp" data-wow-delay=".6s">
                                        <div className="top-category-box !border-none bg-3 border-left-none border-bottom-none border-top-none overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

                                            <Link to="#" className="relative z-20">
                                                <div className="icon">
                                                <p>3</p>
                                                </div>
                                                <div className="content">
                                                    <h6 className="!text-[14px] mb-[15px]">Portfolio Submission / Audition</h6>
                                                    <p className="!text-[12px] leading-[18px]">Submit your portfolio (for design/content courses) or appear for an audition (for performing arts-related programs), as applicable.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="!w-[250px] wow fadeInUp" data-wow-delay=".8s">
                                        <div className="top-category-box !border-none bg-4 border-left-none border-bottom-none border-top-none h-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

                                            <Link to="#" className="relative z-20">
                                                <div className="icon">
                                                <p>4</p>
                                                </div>
                                                <div className="content">
                                                <h6 className="!text-[14px] mb-[15px]">Personal Interview</h6>
                                                <p className="!text-[12px] leading-[18px]">Attend a personal interview with mentors. Final selection is based on your overall performance across all stages.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="!w-[250px] wow fadeInUp" data-wow-delay=".8s">
                                        <div className="top-category-box !border-none bg-4 border-left-none border-bottom-none border-top-none h-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

                                            <Link to="#" className="relative z-20">
                                                <div className="icon">
                                                <p>4</p>
                                                </div>
                                                <div className="content">
                                                <h6 className="!text-[14px] mb-[15px]">Personal Interview</h6>
                                                <p className="!text-[12px] leading-[18px]">Attend a personal interview with mentors. Final selection is based on your overall performance across all stages.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-4 col-lg-6">
                        <h2 className=" wow fadeInUp mobile:!text-[12px] !text-[25px] mt-[30px] text-center mobile:!text-[18px] mobile:mb-[20px]" data-wow-delay=".3s">
                    The Most Innovative Program in Media <span className="text-[#de4141]">&</span> Entertainment
                    </h2>
                            <div className="courses-image mb-5 mb-lg-0">
                                
                                <img src="/assets/iics_image/how_to_join_center.webp" alt="img" className="wow img-custom-anim-left w-[350px] h-[500px] object-cover rounded-t-[60px]" />
                                <div className="bg-shape">
                                    <img src="assets/img/boy-bg-shape.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="top-category-left-items">
                                <div className="row g-0">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="top-category-box bg-5 border-right-none border-top-none h-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

                                            <Link to="#" className="relative z-20">
                                                <div className="icon">
                                                <p>1</p>
                                                </div>
                                                <div className="content">
                                                <h6 className="!text-[14px] mb-[15px]">Unique Course Structure – 12+6+6 Model </h6>
                                                <p className="!text-[12px] leading-[18px]">One year of intensive learning, followed by 6 months of live industry projects and 6 months of paid internship</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="top-category-box bg-6 border-right-none border-top-none h-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

                                            <Link to="#" className="relative z-20">
                                                <div className="icon">
                                                <p>2</p>
                                                </div>
                                                <div className="content">
                                                <h6 className="!text-[14px] mb-[15px]">Mentorship by Industry Icons</h6>
                                                <p className="!text-[12px] leading-[18px]">Learn directly from celebrities, award-winning professionals, and global experts in the creative domain.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="top-category-box bg-7 border-right-none border-bottom-none border-top-none overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

                                            <Link to="#" className="relative z-20">
                                                <div className="icon">
                                                <p>3</p>
                                                </div>
                                                <div className="content">
                                                <h6 className="!text-[14px] mb-[15px]">Real-World Learning Environment </h6>
                                                <p className="!text-[12px] leading-[18px]">Study in actual studios and production settings, not just classrooms — with hands-on exposure from Day 1.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="top-category-box bg-8 border-right-none border-bottom-none border-top-none overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/60  pointer-events-none" />

                                            <Link to="#" className="relative z-20">
                                                <div className="icon">
                                                <p>4</p>
                                                </div>
                                                <div className="content">
                                                <h6 className="!text-[14px] mb-[15px]">Focus on Entrepreneurship</h6>
                                                <p className="!text-[12px] leading-[18px]">Empowering students with the skills and mindset to lead, innovate, and thrive in the global media and entertainment landscape. </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="category-bottom-title wow fadeInUp" data-wow-delay=".3s">
                    <h3>Find your Best Online Courses?</h3>
                    <Link to="/courses-details" className="theme-btn hover-white">Get Started</Link>
                </div> */}
            </div>
            <div className="mycustom-marque mt-[20px]">
                <div className="scrolling-wrap style-2">
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Media</div>
                        <div className="cmn-textslide stroke-text">Entertainment</div>
                    </div>
                    <div className="comm">
                    <div className="cmn-textslide stroke-text">Media</div>
                    <div className="cmn-textslide stroke-text">Entertainment</div>
                    </div>
                    <div className="comm">
                    <div className="cmn-textslide stroke-text">Media</div>
                    <div className="cmn-textslide stroke-text">Entertainment</div>
                    </div>
                    <div className="comm">
                    <div className="cmn-textslide stroke-text">Media</div>
                    <div className="cmn-textslide stroke-text">Entertainment</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default TopCategoryHomeTwo;