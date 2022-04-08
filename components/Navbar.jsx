import Image from "next/image";
import { motion } from "framer-motion";
import cn from "classnames";
import { useState, useEffect } from "react";
const Navbar = () => {
	const [navbarLinks, setNavbarLinks] = useState([
		{ text: "Beranda", url:"#home", active:true },
		{ text: "Tentang", url:"#about", active:false },
		{ text: "Galeri", url:"#galeri", active:false },
		{ text: "Blog", url:"#blog", active:false },
	]);
	const [scrollState, setScrollState] = useState(false)
	useEffect(() => {
    const handleScroll = () => {
			if (window.scrollY >= 100) {
				setScrollState(true);
			} else {
				setScrollState(false);
			}
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
			
    return (
			<div>
				<motion.div
				initial={{ opacity: 0 }}
				animate={{ top:[-10,0] }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 1,
					delay:.2,
					ease: "linear",
			}} className={scrollState ? "navbar w-full h-[80px] px-[5vw] flex items-center justify-between bg-primary-color fixed z-10" : "navbar w-full h-[80px] px-[5vw] flex items-center justify-between bg-primary-color fixed z-10 bg-opacity-50"}>
					<style jsx>
						{`
							.navbar{
								transition-duration: .7s;
							}
						`}
					</style>
						<Image src="/images/logo.png"
											width="82"
											height="60"
											alt=""/>
					<div className="menus flex justify-between text-white w-2/5 font-lato">
						{
							navbarLinks.map((link, i) => (
								<a key={i} id={i} href={link.url} className={cn("hover:scale-105 duration-500",
								{ "border-b-2": link.active }
								)}>{link.text}</a>
							))
						}
					</div>
					<div className="right-navbar flex justify-between">
					<a href="#search">
						<button className="p-2 rounded-md h-[42px] w-[42px] bg-white mr-4 hover:scale-110 duration-500">
							<Image src="/images/search-icon.png"
											width="25"
											height="25"
											alt="" />
						</button>
						</a>
						<a href="#customer-service">
							<button className="p-2 rounded-md h-[42px] bg-white hover:scale-105 duration-500">
									<p className="text-primary-color font-semibold font-quicksand">Customer Service</p>
							</button>
						</a>
					</div>
				</motion.div>
				</div>
    );
};

export default Navbar;
