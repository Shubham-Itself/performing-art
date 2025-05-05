// import { Link } from "react-router-dom";
// import menu_data from "../../data/menu_data";
import  { useEffect, useState } from "react";
import { useScrollStore } from "../../components/store/storeScroll";

const NavMenu = () => {

	const [showScroll, setShowScroll] = useState(false);


  const landingPageNavMenu = [
    { label: 'About', key: 'about' },
    { label: 'Program Structure', key: 'program-structure' },
    { label: 'Unique Course', key: 'unique-course' },
    { label: 'Journey', key: 'journey' },
    {label:'Student Life' , key:'student-life'},
    { label: 'Industry Speak', key: 'industry-speak' },
  
  ]
  const setScrollToSection = useScrollStore((state) => state.setScrollToSection);
	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	// const scrollTop = () => {
	// 	window.scrollTo({ top: 0, behavior: "smooth" });
	// };

  // const slugify = (text: string) => 
  //   text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop , { passive: false });
		return () => window.removeEventListener("scroll", checkScrollTop );
	}, []);
  return (
    <>
      <ul>
        {landingPageNavMenu.map((item, i) => (
          <li className="has-dropdown menu-thumb specialCase:!me-[17px]" key={i}>
            <button
            

            onClick={() => setScrollToSection(item.key)}
            
            className="!text-[16px] !font-[500] text-black">
              {/* <span className="head-icon">
                <i className={item.icon}></i>
              </span> */}
              {item.label}
              {/* {item.img_dropdown || item.has_dropdown ? (
                <i className="fas fa-chevron-down"></i>
              ) : null} */}
            </button>
            {/* {item.img_dropdown && (
              <ul className="submenu has-homemenu !w-auto !left-0  border border-white/30 rounded-br-[10px] rounded-bl-[10px]">
                <li>
                  <div className="homemenu-items">
                    <div className="row">
                      {item.sub_menus?.map((sub_item, sub_index) => (
                        <React.Fragment key={sub_index}>
                          {sub_item?.link && !sub_item.inner_menu && (
                            <li >
                              <Link to={sub_item.link} className="!text-[14px] !font-[400]">{sub_item.title}</Link>
                            </li>
                          )}

                          {sub_item?.inner_menu && sub_item?.inner_menus && (
                            <li className="has-dropdown">
                              <Link to={sub_item.link || '#'} className="!text-[14px] !font-[400]">
                                {sub_item.title }
                                <i className="fas fa-angle-right"></i>
                              </Link>
                              <ul className="submenu" style={{insetInlineStart : '111%' ,  'minWidth': sub_item.title === 'About' ? '650px' : ''}}>
                                {sub_item.inner_menus.map(
                                  (innerMenu, index) => (
                                    <li key={index} >
                                      <Link  to={
    [
      "Shri Jayant Chaudhary",
      "Shri Atul Kumar Tiwari",
      "Shri Ved Mani Tiwari",
    ].includes(innerMenu.title ?? '')
      ? `/details/${encodeURIComponent(innerMenu.title ?? '')}?from=message`
      : innerMenu.link || "#"
  } className="!text-[14px] leading-[22px] !font-[400]">
   {[
  "Shri Jayant Chaudhary",
  "Shri Atul Kumar Tiwari",
  "Shri Ved Mani Tiwari"
].includes(innerMenu.title ?? '') 
  ? `${innerMenu.subHead}` 
  : innerMenu.title}
                                       
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {item.has_dropdown && (
            
              <ul className={`submenu border border-white/30 rounded-br-[10px] rounded-bl-[10px] capitalize !p-[20px] ${item.title === 'PROGRAMS'? '!w-[550px]':''} `}>
               
                {item.sub_menus?.map((sub_item, sub_index) => (
                  <React.Fragment key={sub_index}>
                    {sub_item?.link && !sub_item.inner_menu && (
                      <li>
                        <Link  to={
    [
      'Digital Content Creation',
      'Events And Experiential Media',
      'Performing Arts and Media Management',
      'Hair, Makeup & Prosthetics',
      'Sound Recording and Sound Design',
      '3D Game Art',
      'Advance Gaming and Extended Reality (XR) Innovations',
      'Journalism, PR, Image Strategization & Brand Custodianship Program'
    ].includes(sub_item.title || '')
      ? `/courses-details/${encodeURIComponent(sub_item.title?.toString() || '')}`
      : sub_item.link
  } className="!text-[14px] leading-[22px] !font-[400]">{sub_item.title }</Link>
                      </li>
                    )}

                    {sub_item?.inner_menu && sub_item?.inner_menus && (
                      <li className="has-dropdown !font-[400]">
                        <Link to={sub_item.link || ''} className="!text-[14px] !font-[400]">
                          {sub_item.title}
                          <i className="fas fa-angle-right"></i>
                        </Link>
                        <ul className="submenu" style={{insetInlineStart : '112%'}}>
                          {sub_item.inner_menus.map((innerMenu, index) => (
                            <li key={index} onClick={scrollTop}>
                              <Link to={innerMenu.title  == 'How To Apply' || innerMenu.title == 'Eligibility Criteria' || innerMenu.title == 'Fees & Support' || innerMenu.title == 'Sample Papers' ? innerMenu.link || "#" : 
                               `/courses-details/${encodeURIComponent(innerMenu.title?.toString() || '')}`} state={{
                                titleCourse: innerMenu.title,
                                mentor: innerMenu.mentorName,
                                duration:innerMenu.duration,
                                courseType:innerMenu.courseType,
                                fees:innerMenu.fees,
                                courseInfo:innerMenu.courseInfo,
                                studentsSeat:innerMenu.studentsSeat,
                                enrollmentDeadLine:innerMenu.enrollmentDeadLine,
                                courseStartDate:innerMenu.courseStartDate,
                                industryMentors: innerMenu.industryMentors
                              }} className="!text-[14px] !font-[400]">
                                {innerMenu.title }
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
