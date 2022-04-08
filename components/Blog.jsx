import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import cn from "classnames";
const Blog = () => {
    const [blogs, setBlogs] = useState([
        {
            image: "/images/blog-1.png",
            title: "Pemberhentian Air Mengalir Sementara Pada Daerah ...",
            type: "Pengumuman",
            url: "blog/pemberhentian-air-mengalir-sementara-pada-daerah",
            urlType: "blog/pengumuman"
        },
        {
            image: "/images/blog-2.png",
            title: "PDAM Purwa Tirta Dharma memberikan bantuan ...",
            type: "Berita Terbaru",
            url: "blog/pdam-purwa-tirta-dharma-memberikan-bantuan",
						urlType: "blog/berita-terbaru"
        },
        {
            image: "/images/blog-3.png",
            title: "Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal ...",
            type: "Pengumuman",
            url: "blog/tarif-per-bulan-naik-menjadi-10%25-dari-tarif-normal",
						urlType: "blog/pengumuman"
        },
    ]);
    return (
        <div className="w-full bg-grey p-5 font-quicksand">
            <style jsx>
                {`
                    .blog {
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    }
                `}
            </style>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: "linear",
                }}
                className="title mt-20 mb-10"
            >
                <p className="text-center text-3xl font-semibold mb-4">
                    Ikuti Pengumuman Terbaru Kami
                </p>
                <p className="text-center text-xl">
                    Jangan sampai ketinggalan pengumuman hingga berita terbaru
                    kami
                </p>
            </motion.div>
            <div className="blogs flex w-full">
                {blogs.map((blog, i) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: i*0.2,
                            ease: "linear",
                        }}
                        key={i}
                        className="blog-wrapper w-full flex justify-center items-center flex-col"
                    >
											<a
                                    target="_blank"
                                    href={blog.urlType}
                                >
                        <button
                            className={cn(
                                "p-2 rounded-lg  flex items-center w-fit mb-5 hover:scale-105 duration-500",
                                { "bg-red-primary": blog.type == "Pengumuman" },
                                { "bg-yellow-primary": blog.type == "Berita Terbaru" }
                            )}
                        >
                            <p className="text-white">{blog.type}</p>
                        </button>
												</a>
                        <div className="blog w-4/5 rounded-lg p-5">
                            <div className="content">
                                <div className="relative w-full h-[24vw]">
                                    <Image
                                        src={blog.image}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                                <p className="text-xl font-semibold">
                                    {blog.title}
                                </p>
                                <a
                                    target="_blank"
                                    href={blog.url}
                                >
                                    <button className="py-2 px-6 rounded-lg bg-white flex items-center border-2 border-primary-color mt-2 ml-1 hover:scale-105 duration-500">
                                        <p className="text-primary-color font-semibold text-lg">
                                            Lebih Lanjut
                                        </p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
