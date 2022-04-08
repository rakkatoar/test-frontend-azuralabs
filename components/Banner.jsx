import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Banner = () => {
    const [socialMedia, setSocialMedia] = useState([
        { icon: "/images/fb-icon.png", url: "https://facebook.com" },
        { icon: "/images/ig-icon.png", url: "https://instagram.com" },
        { icon: "/images/tw-icon.png", url: "https://twitter.com" },
        { icon: "/images/yt-icon.png", url: "https://youtube.com" },
    ]);
    return (
        <div>
            <div className="w-full h-screen font-quicksand flex justify-between items-center px-[5vw] bg-[url('/images/banner.png')] bg-no-repeat bg-cover">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ scale: [0.95, 1.005, 1] }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: "linear",
                    }}
                    className="w-2/5"
                >
                    <p className="text-white text-4xl 2xl:text-5xl mb-8 leading-[50px] 2xl:leading-[60px] font-semibold">
                        Menjadi Perusahaan Air Minum Modern
                    </p>
                    <p className="text-white text-2xl 2xl:text-3xl mb-6 leading-[40px] 2xl:leading-[50px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <a href="#contact">
                        <button className="p-5 rounded-lg bg-white hover:scale-105 duration-500 flex items-center text-primary-color">
                            <Image
                                src="/images/phone-icon.png"
                                width="30"
                                height="30"
                                alt=""
                            />
                            <p className="font-semibold ml-4 text-xl 2xl:text-2xl">
                                Hubungi Kami
                            </p>
                        </button>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ scale: [0.95, 1.005, 1] }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: "linear",
                    }}
                    className="flex flex-col items-center h-[52vh] mt-12"
                >
                    <p className="rotate-90 text-white mb-[90%] text-lg ml-3">
                        Social Media
                    </p>
                    <div className="flex flex-col items-end h-full justify-between">
                        {socialMedia.map((media, i) => (
                            <a key={i} id={i} target="_blank" rel="noreferrer" href={media.url}>
                                <Image
                                    src={media.icon}
                                    width={i == 3 ? 45: 30}
                                    height={i == 3 ? 45: 30}
                                    className="hover:scale-110 duration-500"
                                    alt=""
                                />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
