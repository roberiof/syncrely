import Button from "@/components/atoms/Button/button";
import React from "react";
import Header from "../../molecules/Header/header";

export default function Hero() {
	return(
		<>
			<Header />
			<div className="flex gap-8 flex-col w-11/12 max-w-[1100px] justify-center m-auto">
				<h1 className="text-[40px] md:text-[60px] 2xl:text-[95px] leading-none block pt-48 m-auto">
          Reliable design partner 
          committed to your 
          company&rsquo;s growth.
				</h1>
				<div className="m-auto flex flex-col gap-8">
					<p className="max-w-screen-md text-xl">We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more exposure.</p>
					<Button className="slideToLeftEffect rounded-2xl px-20 py-4 text-2xl w-full flex justify-center lg:w-fit">
						Start Today
					</Button>
				</div>
			</div>
		</>
	);
}
