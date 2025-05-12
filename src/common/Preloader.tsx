import { useState, useEffect } from "react";


export default function Preloader() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<>
			{isVisible && (
				<div id="preloader" className="preloader">
					<div className="animation-preloader">
						{/* <div className="edu-preloader-icon">
						
						</div> */}
						{/* <div className="w-64 h-64 mx-auto">
     
    </div> */}

						{/* First Line: INDIAN INSTITUTE */}
						<div className="txt-loading mobile:!text-[20px]">
							{"INDIAN INSTITUTE".split("").map((char, i) => (
								<span
									key={`line1-${i}`}
									data-text-preloader={char}
									className="letters-loading"
								>
									{char === " " ? "\u00A0" : char}
								</span>
							))}
						</div>

						{/* Second Line: OF CREATIVE SKILLS */}
						<div className="txt-loading mt-2 mobile:!text-[20px]">
							{"OF CREATIVE SKILLS".split("").map((char, i) => (
								<span
									key={`line2-${i}`}
									data-text-preloader={char}
									className="letters-loading"
								>
									{char === " " ? "\u00A0" : char}
								</span>
							))}
						</div>

						{/* <p className="text-center">Loading...</p> */}
						{/* <img src={animationLoader} alt="" /> */}
				
					</div>

					<div className="loader">
						<div className="row">
							<div className="col-3 loader-section section-left">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-left">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg"></div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}