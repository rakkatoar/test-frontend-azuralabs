import Image from "next/image";
import { motion } from "framer-motion";
const Contact = () => {

    return (
        <div className="bg-grey px-20 h-[80vh] flex justify-center items-center">
					<div className="w-4/6 flex">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay:.2,
								ease: "linear",
						}} className="left-section">
 							<p className="text-4xl font-semibold mb-5">Layanan berkualitas tinggi untuk masyarakat indonesia</p>
							<p className="mb-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
							<div className="flex">
								<button className="py-5 px-14 rounded-lg bg-primary-color flex items-center border-[3px] border-primary-color mt-2 mr-4">
									<p className="text-white font-semibold text-3xl">Kontak Kami</p>
								</button>
								<button className="py-5 px-14 rounded-lg bg-grey flex items-center border-[3px] border-primary-color mt-2">
									<p className="text-primary-color font-semibold text-3xl">Konsultasi</p>
								</button>
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
						}} className="right-section relative">
							<Image src="/images/contact.png"
												width="300"
												height="300"
												alt="" />
						</motion.div>
					</div>
        </div>
    );
};

export default Contact;
