import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import AIChat from "@/components/AIChat";

export const metadata = {
	title: "Vivek | Portofolio",

	description:
		"Vivek, Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of Intervyou.",

	author: "Vivek Kumar",
	siteUrl: "https://www.viveks.my.id",
	applicationName: "Vivek ",

	keywords: [
		"vivek",
		"portofolio",
		"software engineer",
		"next.js",
		"ai solutions",
		"intervyou",
	],

	openGraph: {
		type: "website",
		url: "https://www.viveks.my.id",
		title: "Vivek | Portofolio",
		site_name: "Vivek | Portofolio",
		description: "My name is Vivek, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
      {
				url: "/og-image-rev.png",
				alt: "Vivek | Portofolio",
      },
		],
		site_name: "Vivek  | Portofolio",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<AIChat />
				<Analytics />
			</body>
		</html>
	);
}
