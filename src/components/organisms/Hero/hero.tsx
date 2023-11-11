import Button from "@/components/atoms/Button/button";
import React from "react";
import Header from "../../molecules/Header/header";

export default function Hero() {
	return(
		<div>
			<Header />
			<div className="flex gap-8 flex-col max-w-screen-2xl justify-center m-auto">
				<h1 className="text-[130px] leading-none w-fit block pt-48">
          Reliable design partner <br/>
          committed to your<br/>
          company&rsquo;s growth.

				</h1>
				<p className="max-w-screen-lg text-2xl">We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more exposure.</p>
				<Button className="slideToLeftEffect rounded-2xl px-24 py-6 text-2xl w-fit">
          Start Today
				</Button>
			</div>
		</div>
	);
}
