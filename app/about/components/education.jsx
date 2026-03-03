import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faTrophy,
	faAward,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">
							2018 - Present
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								Dr. A. P. J. Abdul Kalam Technical University
							</h2>
							<h3 className="text-md font-normal mb-3">
								Aktu | Information Technology
							</h3>
							{/* <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div> */}
							<div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									I hold a{" "}
									<span className="text-black font-medium">
										Bachelor of Technology in Information Technology
									</span>{" "}
									from{" "}
									<span className="text-black font-medium">
										Dr. A. P. J. Abdul Kalam Technical University
									</span>{" "}
									(2018–2022). My academic journey built a strong foundation in{" "}
									<span className="text-black font-medium">
										software engineering, data structures, and web technologies
									</span>
									, shaping my problem-solving and analytical skills.
									<br />
									<br />
									I am currently working as a{" "}
									<span className="text-black font-medium">
										Software Developer
									</span>{" "}
									with over{" "}
									<span className="text-black font-medium">
										2+ years of professional experience
									</span>
									, where I build and maintain production-grade applications using{" "}
									<span className="text-black font-medium">
										React.js, Redux Toolkit, and Next.js
									</span>
									. I focus on creating scalable UI architectures, integrating REST
									APIs, and optimizing performance for real-world systems.
									<br />
									<br />
									My education and hands-on industry experience together enable me to
									bridge{" "}
									<span className="text-black font-medium">
										clean engineering principles
									</span>{" "}
									with{" "}
									<span className="text-black font-medium">
										production-ready, maintainable software solutions
									</span>
									. I am passionate about continuous learning and building impactful
									digital products.
								</p>
							</div>

							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 4 out of 4
								</div>
							</div>
						</div>
					</motion.div>{" "}
					{/* Achievements Section - Right */}
					
						{/* Achievements Container with transparent bottom effect */}
					<div className="relative">
						<div className="space-y-4">
							{/* Show visible achievements */}

						</div>
					</div>
				</div>
			</section>
		</Wrapper>
	);
}
