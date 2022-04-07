import Image from "next/image";
import cn from "classnames";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Footer = () => {
	const [footerLinks, setFooterLinks] = useState([
		{ text: "Home", url:"#home", active:true },
		{ text: "Tentang Kami", url:"#about", active:false },
		{ text: "Blog", url:"#blog", active:false },
		{ text: "Karir", url:"#karir", active:false },
		{ text: "Galeri", url:"#galeri", active:false },
	])

	const changeFooterLink = (e) => {
		const selected = e.target.id;
		footerLinks.forEach(element =>{
			element.active = false;
		})
		footerLinks[selected].active = true;
		setFooterLinks(footerLinks);
		console.log(footerLinks)
	};

	changeFooterLink
    return (
        <div className="bg-primary-color px-40 h-[70vh] text-white flex justify-center items-center">
					<div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay:.2,
								ease: "linear",
						}} className="title h-[20vh] flex justify-center items-center">
							<div className="w-3/6 h-full p-5 flex items-end">
								<Image src="/images/logo-footer.png"
												width="110"
												height="100"
												alt=""/>
							</div>
							<div className="w-1/6 h-full p-5 flex items-end">
								<p className="text-3xl font-bold">NAVIGASI</p>
							</div>
							<div className="w-2/6 h-full p-5 flex items-end">
								<p className="text-3xl font-bold">KONTAK</p>
							</div>
						</motion.div>
						<div className="content h-[36vh] flex justify-center items-center">
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 1,
									delay:.4,
									ease: "linear",
							}} className="w-3/6 h-full p-5 flex flex-col justify-between">
								<p className="text-2xl font-semibold">PDAM Purwa Tirta Dharma </p>
								<p className="text-2xl font-semibold">Menyediakan air bersih yang sehat yang mampu memberikan kontribusi PAD pada kabupaten Grobogan</p>
								<div className="sosmed flex w-4/5 justify-between">
								<Image src="/images/fb-icon.png"
												width="40"
												height="40"
												alt=""/>
								<Image src="/images/tw-icon.png"
												width="40"
												height="40"
												alt=""/>
								<Image src="/images/ig-icon.png"
												width="40"
												height="40"
												alt=""/>
								<Image src="/images/yt-icon.png"
												width="40"
												height="40"
												alt=""/>
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
							}} className="w-1/6 h-full p-5 flex flex-col justify-between">
							{
								footerLinks.map((link, i) => (
									// <a href={link.url} className="border-b-2 w-fit text-xl">{link.text}</a>
									<a key={i} id={i} href={link.url} className={cn("w-fit text-xl",
									{ "border-b-2": link.active },
									{ "opacity-75": !link.active }
								 )} onClick={changeFooterLink}>{link.text}</a>
								))
							}
								{/* <a href="#" className="border-b-2 w-fit text-xl">Home</a>
								<a href="#" className="opacity-75 w-fit text-xl">Tentang Kami</a>
								<a href="#" className="opacity-75 w-fit text-xl">Blog</a>
								<a href="#" className="opacity-75 w-fit text-xl">Karir</a>
								<a href="#" className="opacity-75 w-fit text-xl">Galeri</a> */}
							</motion.div>
							<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay:.4,
								ease: "linear",
						}} className="w-2/6 h-full p-5 flex flex-col justify-between">
								<div className="flex items-baseline">
									<Image src="/images/maps-icon.svg"
												width="50"
												height="50"
												alt=""/>
									<p className="ml-4 text-xl">Jl. Gajah Mada No.3, Jetis Selatan, Purwodadi, Kec. Purwodadi, Kabupaten Grobogan, Jawa Tengah 58111</p>
								</div>
								<div className="flex items-baseline">
									<Image src="/images/call-icon.svg"
												width="20"
												height="20"
												alt=""/>
									<p className="ml-4 text-xl">+62 896 666 666</p>
								</div>
								<div className="flex items-baseline">
									<Image src="/images/mail-icon.svg"
									width="20"
									height="20"
									className="mr-2"
									alt=""/>
									<p className="ml-4 text-xl">hallo@purwatirtadharma.com</p>
								</div>
							</motion.div>
						</div>
					</div>
        </div>
    );
};

export default Footer;
