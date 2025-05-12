

const HeroHomeOne = () => {
  // React Router v6+ hook for navigation



  return (
    <>
      <section className="fix relative ">
        <img
          src="/assets/landing_page/acting.webp"
          alt="banner_imahe "
          className="w-[100%] mobileBanner:hidden"
        />
         <img
          src="/assets/landing_page/amit_behl_mobile.webp"
          alt="banner_imahe "
          className="w-[100%] mobileBanner:block hidden"
        />
        <div className="contact-section-2 section-padding p-0 absolute">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6">
        <div className="contact-form-items !mt-0 !p-[40px]">
          <div className="title text-center">
            <h2 className="wow fadeInUp !text-[16px]">Registration Form</h2>
            <p className="wow fadeInUp" data-wow-delay=".1s">
              The fee of Rs. 2000 needs to be paid to complete the registration form and proceed with your application process.
            </p>
          </div>
          <form id="registration-form" onSubmit={e => e.preventDefault()}>
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input type="text" name="fullName" placeholder="Full Name" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <input type="date" name="dob" placeholder="Date of Birth" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input type="number" name="phone" placeholder="Phone Number" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <input type="email" name="email" placeholder="Email Address" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <select name="program" defaultValue="">
                    <option value="" disabled>Select Programme</option>
                    <option value="program1">Program 1</option>
                    <option value="program2">Program 2</option>
                    <option value="program3">Program 3</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <select name="location" defaultValue="">
                    <option value="" disabled>Select Program Preferences</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input type="text" name="referral" placeholder="Any Referral" />
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                <div className="form-check d-flex align-items-center gap-2">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the terms and conditions.
                  </label>
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                <button type="submit" className="theme-btn">
                  Proceed
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
      
      </section>
    </>
  );
};

export default HeroHomeOne;