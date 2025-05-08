import Count from "../../../common/Count";

 

const ChooseHomeOne = () => {
  return (
    <>
      <section className="choose-us-section fix mobile:!pt-[100px]   section-padding ">
            <div className="container">
                <div className="main-choose-us-wrapper">
                    <div className="line-shape">
                        <img src="assets/img/line-shape.png" alt="" />
                    </div>
                    <div className="choose-us-top">
                        <div className="section-title mb-0">
                            <h6 className="wow fadeInUp">
                            Our Unique Course Structure
                            </h6>
                            <h2 className="wow fadeInUp mobile:!text-[20px] !text-[30px] " data-wow-delay=".3s">
                            From Learning to Earning – A Complete Career Journey
                            </h2>
                        </div>
                        <div className="icon-items wow fadeInUp mobile:flex mobile:flex-col mobile:items-center mobile:justify-center" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content ">
                               <h2 className="flex gap-[5px] mobile:!text-[30px] mobile:justify-center"><span className="odometer" data-count="6"> <Count number={6}  /> </span>Months</h2>
                               <p className="mobile:text-start">
                               Paid Internship with a Stipend of ₹35K-50K
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="choose-us-bottom">
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-graduation"></i>
                            </div>
                            <div className="content">
                                {/* <p>Student Enrolled</p> */}
                                <h2 className="flex gap-[5px] mobile:!text-[30px]"><span className="odometer" data-count="12"><Count number={12}  /></span>-<span className="odometer" data-count="24"><Count number={24}  /></span>Months</h2>
                                <p className="mobile:text-start">
                                Intensive Training to Build Your Foundation
                                </p>
                            </div>
                        </div>
                        <div className="icon-items style-2 wow fadeInUp" data-wow-delay=".5s">
                            <div className="icon">
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                {/* <p>Instructors</p> */}
                                <h2 className="flex gap-[5px] mobile:!text-[30px] mobile:justify-center "><span className="odometer" data-count="6"><Count number={6}  /></span>Months</h2>
                                <p className="mobile:text-start">
                                Real-World Experience with Industry & LIVE Projects
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ChooseHomeOne;