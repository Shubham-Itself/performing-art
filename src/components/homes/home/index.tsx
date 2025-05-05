// import MarqueeOne from "../../../common/MarqueeOne";
// import Preloader from "../../../common/Preloader";
import { useEffect, useRef } from "react";
import ScrollTop from "../../../common/ScrollTop";
import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
// import ChooseHomeTwo from "../home-2/ChooseHomeTwo";
import CoursesHomeTwo from "../home-2/CoursesHomeTwo";
import HeroHomeTwo from "../home-2/HeroHomeTwo";
import TopCategoryHomeTwo from "../home-2/TopCategoryHomeTwo";
import InstagramHomeThree from "../home-3/InstagramHomeThree";

// import BlogHomeOne from "./BlogHomeOne";
// import BrandsHomeOne from "./BrandsHomeOne";
import ChooseHomeOne from "./ChooseHomeOne";

import HeroHomeOne from "./HeroHomeOne";

// import PopularCoursesHomeOne from "./PopularCoursesHomeOne";
// import ImportantCtaArea from "./ImportantCtaArea";
import Performing_art_structure from "./Performing_art_structure";
import { useScrollStore } from "../../store/storeScroll";






const HomeOne = () => {

	const scrollToSection = useScrollStore((state) => state.scrollToSection);
	const setScrollToSection = useScrollStore((state) => state.setScrollToSection);
  
	const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
	  about: useRef(null),
	  'program-structure': useRef(null),
	  'unique-course': useRef(null),
	  journey: useRef(null),
	  'student-life': useRef(null),
	  'industry-speak': useRef(null),
	};
  
	useEffect(() => {
	  if (scrollToSection && sectionRefs[scrollToSection]?.current) {
		sectionRefs[scrollToSection].current!.scrollIntoView({ behavior: 'smooth' });
		setScrollToSection(null);
	  }
	}, [scrollToSection, sectionRefs, setScrollToSection]);
	

	// Scroll to CoursesHomeTwo when the button is clicked
	// const handleScrollToCourses = () => {
	//   if (coursesRef.current) {
	// 	coursesRef.current.scrollIntoView({ behavior: 'smooth' });
	//   }
	// };

	return (
		<> 
		{/* <Preloader /> */}
			<HeaderOne />
      <HeroHomeOne  />
      {/* <FeatureHomeOne /> */}
      {/* <TopCategoryHomeOne /> */}
      {/* <AboutHomeOne /> */}
	  {/* <ImportantCtaArea onSchoolButtonClick={handleScrollToCourses}/> */}
	  <div ref={sectionRefs.about}>
	  <HeroHomeTwo/>
	  </div>
	 
	<div ref={sectionRefs['program-structure']} >
	<Performing_art_structure/>
	</div>
	  <div ref={sectionRefs['unique-course']}>
	  <ChooseHomeOne /> 
	  </div>

	  <div ref={sectionRefs.journey}>
	  <TopCategoryHomeTwo/>
	  </div>
	
	  {/* <div ref={coursesRef}>
	  <PopularCoursesHomeOne />
	  </div> */}
			
			{/* <MarqueeOne /> */}
	<div ref={sectionRefs['student-life']}>
	<InstagramHomeThree/>
	</div>
			
			{/* <ChooseHomeTwo/> */}
			{/* <TeamHomeOne /> */}
			{/* <NewsletterHomeOne /> */}
			{/* <TestimonialHomeOne /> */}
			<div ref={sectionRefs['industry-speak']}>
			<CoursesHomeTwo/>
			</div>
		
		
			{/* <BrandsHomeOne /> */}
			{/* <BlogHomeOne /> */}
			{/* <MarqueeOne />  */}
			<FooterOne />  
			<ScrollTop />    
		</>
	);
};

export default HomeOne;
