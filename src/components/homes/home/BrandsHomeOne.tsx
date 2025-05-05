 
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 

const BrandsHomeOne = () => {

	
	return (
		<>
			<section className="brand-section fix section-padding pt-0">
				<div className="container">
					<div className="brand-wrapper">
						<div className="section-title text-center">
							<h2 className="wow fadeInUp mb-3" data-wow-delay=".3s">
							Our Esteemed Partners
							</h2>
							<p className="wow fadeInUp" data-wow-delay=".5s mt-3">
								Education is the foundation of personal societal growth,
								empowering <br />
								individuals with knowledge, skills critical thinking.
							</p>
						</div>
						<Swiper
             spaceBetween={30}
             speed={1500}
             loop={true}
             autoplay={{
               delay: 1500,
               disableOnInteraction: false,
             }}
             modules={[Autoplay]}
             breakpoints={{
              1399: {
                  slidesPerView: 6,
              },
              1199: {
                  slidesPerView: 5,
              },
              991: {
                  slidesPerView: 5,
              },
              767: {
                  slidesPerView: 4,
              },
              575: {
                  slidesPerView: 3,
              },
              400: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          }}
             className="swiper brand-slider mt-3 mt-md-0">
							 
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/iwata.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/lakshay_one.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]" />
										

									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/schwarzkopf.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										
										<img src="assets/iics_image/partners/lakshay_two.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>

									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/makeup.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/moira.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/nilee_games.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/smoothOn.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]" />
									</div>
								</SwiperSlide>
            {/* swiper slider repite */}
			<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/iwata.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/schwarzkopf.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide ">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/lakshay_one.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
										

									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide ">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										
										<img src="assets/iics_image/partners/lakshay_two.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>

									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/makeup.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/moira.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/nilee_games.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center mobile:flex mobile:justify-center">
										<img src="assets/iics_image/partners/smoothOn.webp" alt="img" className="h-[152.3px] object-fit rounded-[20px]"/>
									</div>
								</SwiperSlide>
						 
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default BrandsHomeOne;
