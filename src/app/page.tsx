import Hero from "@organisms/Hero/hero";
import PostHero from "@organisms/PostHero/postHero";
import React from "react";

export default function Home() {
	return (
		<main className="bg-primaryBlack min-h-screen">
			<Hero />
			<PostHero />
		</main>
	);
}
