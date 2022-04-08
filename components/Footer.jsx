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
	]);

	const [footerInfos, setFooterInfos] = useState([
		{ text: "Jl. Gajah Mada No.3, Jetis Selatan, Purwodadi, Kec. Purwodadi, Kabupaten Grobogan, Jawa Tengah 58111", icon:"/images/maps-icon.svg" },
		{ text: "+62 896 666 666", icon:"/images/call-icon.svg" },
		{ text: "hallo@purwatirtadharma.com", icon:"/images/mail-icon.svg" },
	])

	const [socialMedia, setSocialMedia] = useState([
		{icon: "/images/fb-icon.png", url:"https://facebook.com"},
		{icon: "/images/tw-icon.png", url:"https://twitter.com"},
		{icon: "/images/ig-icon.png", url:"https://instagram.com"},
		{icon: "/images/yt-icon.png", url:"https://youtube.com"},
	])
    return (
        <div className="bg-primary-color px-40 h-[70vh] text-white flex justify-center items-center font-roboto">
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
								<p className="text-xl 2xl:text-3xl font-bold">NAVIGASI</p>
							</div>
							<div className="w-2/6 h-full p-5 flex items-end">
								<p className="text-xl 2xl:text-3xl font-bold">KONTAK</p>
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
								<p className="text-xl 2xl:text-2xl font-medium">PDAM Purwa Tirta Dharma </p>
								<p className="text-xl 2xl:text-2xl font-medium leading-9">Menyediakan air bersih yang sehat yang mampu memberikan kontribusi PAD pada kabupaten Grobogan</p>
								<div className="sosmed flex w-4/5 justify-between">
									{
									socialMedia.map((media, i) => (
										<a key={i} id={i} target="_blank" href={media.url} className="hover:scale-110 duration-500"
										><Image src={media.icon}
										width="40"
										height="40"
										alt=""/></a>
									))
								}
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
									<a key={i} id={i} href={link.url} className={cn("w-fit text:lg 2xl:text-xl hover:opacity-100 duration-500",
									{ "border-b-2": link.active },
									{ "opacity-75": !link.active }
								 )}>{link.text}</a>
								))
							}
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
								{
									footerInfos.map((info, i) => (
										<div key={i} className={cn("flex items-baseline")}>
										<Image src={info.icon}
													width="20"
													height="20"
													alt=""/>
										<p className="ml-4 text-lg 2xl:text-xl w-4/5">{info.text}</p>
									</div>
									))
								}
							</motion.div>
						</div>
					</div>
        </div>
    );
};

export default Footer;
