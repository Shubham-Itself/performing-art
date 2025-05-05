
import {  useSearchParams } from 'react-router-dom';
const InstructorDetailsArea = ({leaderName , leaderDesignation ,  image , mentorMessage ,mentorBio}:any) => {
        // const location = useLocation();
        // const {leaderName , leaderImage , leaderDesig} = location.state || {}
        const [searchParams] = useSearchParams();
        const from = searchParams.get('from');
        
  return (
    <>
      <section className="team-details-section section-padding mt-[300px]">
            <div className="container">
                <div className="team-details-wrapper" style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)' }}>
                    <div className="team-details-items">
                        <div className="details-image w-[30%] mobile:w-full">
                            <img src={image} alt="img" />
                        </div>
                        <div className="team-details-content w-[82%] mt-0 mobile:w-full">
                            <h2 className='mobile:!text-[20px]'>
                               {leaderName}
                            </h2>
                            <span className='mobile:!text-[16px]'>{leaderDesignation}</span>
                            {/* <ul className="details-list">
                                <li>
                                    <i className="far fa-user"></i>
                                    50+ Students
                                </li>
                                <li>
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    (320+ Reviews)
                                </li>
                            </ul> */}
                            {/* <h3>
                                About Me
                            </h3> */}
                           {!from  && <p className="mt-4 mobile:!text-[12px]">
                                {mentorBio}
                            </p>}
                            {from =='message' && <p className="mt-4 mobile:!text-[12px]">
                               {mentorMessage}
                            </p>}
                            <div className="details-area">
                                {/* <Link to="/contact" className="theme-btn">Contact Me</Link> */}
                                {/* <h5>
                                    <Link to="/instructor-details">Follow Me</Link>
                                </h5> */}
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    {/* <a href="#"><i className="fab fa-dribbble"></i></a> */}
                                    {/* <a href="#"><i className="fab fa-behance"></i></a> */}
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default InstructorDetailsArea;