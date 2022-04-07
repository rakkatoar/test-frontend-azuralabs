import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
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
											height="50"
											alt=""/>
					<div className="menus flex justify-between text-white w-2/5">
						<a href="#" className="border-b-2">Beranda</a>
						<a href="#">Tentang</a>
						<a href="#">Galeri</a>
						<a href="#">Blog</a>
					</div>
					<div className="right-navbar flex justify-between">
						<button className="p-2 rounded-md h-[42px] w-[42px] bg-white mr-4">
							<Image src="/images/search-icon.png"
											width="30"
											height="30"
											alt="" />
						</button>
						<button className="p-2 rounded-md bg-white">
								<p className="text-primary-color font-semibold">Customer Service</p>
						</button>
					</div>
				</motion.div>
				</div>
    );
};

export default Navbar;
