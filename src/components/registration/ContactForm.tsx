
import Dropdown from "../../common/dropdown/Dropdown";

 
const ContactForm = () => {
    // const [selectedOption, setSelectedOption] = useState('');

    // const handleChange = (event:any) => {
    //   setSelectedOption(event.target.value);
    // };
  return (
    <>
       <section className="contact-section-2 section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="contact-form-items !mt-0">
                            <div className="title text-center">
                                <h2 className="wow fadeInUp">Send Us Message</h2>
                            </div>
                            <form id="contact-form" onSubmit={e => e.preventDefault()}>
                                <div className="row g-4">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <input type="text" name="name" id="name" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="form-clt">
                                            <input type="text" name="number" id="number" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <input type="text" name="email" id="email3" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="form-clt">
                                            <input type="text" name="address" id="address" placeholder="Address" />
                                        </div>
                                    </div>
                                    <Dropdown/>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <textarea name="message" id="message" placeholder="Write message"></textarea>
                                        </div>
                                    </div>
                              
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                                        <button type="submit" className="theme-btn">
                                           Enquire Now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactForm;