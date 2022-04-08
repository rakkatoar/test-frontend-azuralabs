import Image from "next/image";
import { motion } from "framer-motion";
const Benefit = () => {

    return (
				<div className="w-full h-[40vh] bg-grey font-quicksand">
					<div className="flex w-full h-full">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ top:[-10,0] }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay:.4,
								ease: "linear",
						}} className="title w-2/5 flex justify-center items-start flex-col p-20 bg-white">
							<p className="text-3xl mb-5 font-semibold">Kenapa Memilih Kami?</p>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
						</motion.div>
						<div className="content w-3/5 flex">
							<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 1,
										delay:.6,
										ease: "linear",
								}} className="bg-primary-color w-full flex justify-evenly items-center flex-col">
								<div className="rounded-full bg-white bg-opacity-50 w-[90px] h-[90px] flex justify-center items-center">
									<Image 
									src="/images/pro-icon.png"
									width="45"
									height="55"
									alt=""/>
								</div>
								<p className="text-white text-2xl">Profesional</p>
							</motion.div>
							<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 1,
										delay:.8,
										ease: "linear",
								}} className="bg-primary-color-light w-full flex justify-evenly items-center flex-col">
								<div className="rounded-full bg-white bg-opacity-50 w-[90px] h-[90px] flex justify-center items-center">
									<Image 
									src="/images/24-icon.png"
									width="50"
									height="50"
									alt=""/>
								</div>
								<p className="text-white text-2xl">24H Non-Stop</p>
							</motion.div>
							<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 1,
										delay:1,
										ease: "linear",
								}} className="bg-primary-color-lighter w-full flex justify-evenly items-center flex-col">
								<div className="rounded-full bg-white bg-opacity-50 w-[90px] h-[90px] flex justify-center items-center">
									<Image 
									src="/images/support-icon.png"
									width="50"
									height="50"
									alt=""/>
								</div>
								<p className="text-white text-2xl">Full Support</p>
							</motion.div>
						</div>
					</div>
				</div>
    );
};

export default Benefit;
