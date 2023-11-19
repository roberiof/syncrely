import Image from "next/image";
import React from "react";

export default function PostHero() {
	return(
		<>
			<p className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl text-primaryGrey py-96 w-11/12 max-w-[1300px] leading-tight m-auto">
            Monthly <span className="font-semibold text-white">flat-rate</span> design subscription  <span className="font-semibold text-primaryGreen">∞</span>  <span className="font-semibold text-white">Unlimited</span> requests & revisions  <span className="font-semibold text-primaryPurple">→</span>  Pause or cancel <span className="font-semibold text-white">anytime</span>
			</p>


			<div className="logoSlideContainer py-96">
				<Image
					src="./logo.svg"
					width={5300}
					height={5300}
					alt="logo"
					className="logoSlideCell"
				/>
				<Image
					src="./logo.svg"
					width={5300}
					height={5300}
					alt="logo"
					className="logoSlideCell ml-[600px]"
				/>
				<Image
					src="./logo.svg"
					width={5300}
					height={5300}
					alt="logo"
					className="logoSlideCell ml-[600px]"
				/>
				<Image
					src="./logo.svg"
					width={5300}
					height={5300}
					alt="logo"
					className="logoSlideCell ml-[600px]"
				/>
			</div>
		</>
	);
}
