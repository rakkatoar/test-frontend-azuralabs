import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {

    return (
        <div className="bg-grey px-20">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							delay:.2,
							ease: "linear",
					}} className="w-[55%] mb-10 pl-20">
						<Image src="/images/quote-icon.png"
												width="50"
												height="50"
												alt=""/>
						<p className="text-4xl font-semibold pl-[50px]">Mari Kenali Kami dan Perjalanan Kami </p>
					</motion.div>
					<div className="flex">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay:.2,
								ease: "linear",
						}} className="w-3/5 px-20">
							<div className="bg-white p-12 h-full">
								<p className="text-3xl leading-[55px]">" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ".</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay:.4,
								ease: "linear",
						}} className="w-2/5 flex flex-col">
							<div className="photo w-full h-full relative mb-2">
								<Image src="/images/profile-photo.png"
												layout="fill"
												objectFit="cover"
												objectPosition="center"
												alt=""/>
							</div>
							<p className="text-xl font-semibold ">Ir.H.Ady Setiawan.SH</p>
							<p>President of PDAM Purwa Tirta Dharma</p>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							delay:.2,
							ease: "linear",
					}} className="w-full flex justify-center mt-10">
						<button className="py-2 px-12 rounded-lg bg-white flex items-center border-2 border-primary-color mt-2 ml-1">
							<p className="text-primary-color font-semibold text-lg">Lebih Lengkap</p>
						</button>
					</motion.div>
        </div>
    );
};

export default About;