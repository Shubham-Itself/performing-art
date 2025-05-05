import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";

import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import PublicNotesArea from "./PublicNotesArea";


 

const PublicNotes = () => {
  return (
    <>
    {/* <Preloader /> */}
      <HeaderOne />
      <BreadcrumbEvent title="Public Notice" subtitle="Public Notice" />
      <PublicNotesArea/>
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default PublicNotes;