import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Hr from "@/components/Hr";
import Me from "@/public/image/m3.jpeg";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me}
									alt="Vivek"
									width={500}
									height={500}
									sizes="(max-width: 768px) 100vw, 50vw"
									className="w-full h-auto object-cover"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me}
									alt="Vivek"
									width={500}
									height={500}
									sizes="(max-width: 768px) 100vw, 50vw"
									className="w-full h-auto object-cover"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me}
									alt="Vivek"
									width={500}
									height={500}
									sizes="(max-width: 768px) 100vw, 50vw"
									className="w-full h-auto object-cover"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Vivek Kumar
					</h2>

					<p className="text-gray-600 text-justify title text-lg leading-relaxed">
						I am a{" "}
						<span className="text-black font-medium">
							Software Developer
						</span>{" "}
						with over{" "}
						<span className="text-black font-medium">
							2+ years of professional experience
						</span>{" "}
						specializing in building{" "}
						<span className="text-black font-medium">
							scalable, production-grade web applications
						</span>{" "}
						using modern frontend technologies. I focus on translating business
						requirements into clean, efficient, and maintainable user interfaces.
						<br />
						<br />
						I hold a{" "}
						<span className="text-black font-medium">
							Bachelor of Technology in Information Technology
						</span>{" "}
						from{" "}
						<span className="text-black font-medium">
							Dr. A. P. J. Abdul Kalam Technical University
						</span>{" "}
						(2018–2022), where I built a strong foundation in software engineering,
						problem-solving, and web development fundamentals.
						<br />
						<br />
						Currently, I work as a{" "}
						<span className="text-black font-medium">
							Software Developer
						</span>{" "}
						at{" "}
						<span className="text-black font-medium">
							Apex Tigre (Apex Group)
						</span>
						, contributing to real-world products such as a{" "}
						<span className="text-black font-medium">
							real estate Deal Tracker System
						</span>
						. My day-to-day work involves React.js, Redux Toolkit, Next.js, REST API
						integration, and performance optimization. I am passionate about
						continuous learning and building user-focused digital solutions that
						create real business impact.
					</p>

					{/* <Card /> */}
				</motion.div>
			</div>
		</>
	);
}
