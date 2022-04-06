import Image from "next/image";
const Blog = () => {

    return (
				<div className="w-full bg-grey p-5">
					<style jsx>
						{`
							.blog{
								box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
							}
						`}
					</style>
					<div className="title mt-20 mb-10">
						<p className="text-center text-3xl font-semibold mb-4">Ikuti Pengumuman Terbaru Kami</p>
						<p className="text-center text-xl">Jangan sampai ketinggalan pengumuman hingga berita terbaru kami</p>
					</div>
					<div className="blogs flex w-full">
						<div className="blog-wrapper w-full flex justify-center items-center flex-col">
							<button className="p-2 rounded-lg bg-red-primary flex items-center w-fit mb-5">
									<p className="text-white">Pengumuman</p>
							</button>
							<div className="blog w-4/5 rounded-lg p-5">
								<div className="content">
									<div className="relative w-full h-[24vw]">
										<Image 
											src="/images/blog-1.png"
											layout="fill"
											objectFit="contain"
											alt=""
										/>
									</div>
									<p className="text-xl font-semibold">Pemberhentian Air Mengalir Sementara Pada Daerah...</p>
									<button className="py-2 px-6 rounded-lg bg-white flex items-center border-2 border-primary-color mt-2 ml-1">
										<p className="text-primary-color font-semibold text-lg">Lebih Lanjut</p>
									</button>
								</div>
							</div>
						</div>
						<div className="blog-wrapper w-full flex justify-center items-center flex-col">
							<button className="p-2 rounded-lg bg-yellow-primary flex items-center w-fit mb-5">
									<p className="text-white">Berita Terbaru</p>
							</button>
							<div className="blog w-4/5 rounded-lg p-5">
								<div className="content">
									<div className="relative w-full h-[24vw]">
										<Image 
											src="/images/blog-2.png"
											layout="fill"
											objectFit="contain"
											alt=""
										/>
									</div>
									<p className="text-xl font-semibold">PDAM Purwa Tirta Dharma memberikan bantuan...</p>
									<button className="py-2 px-6 rounded-lg bg-white flex items-center border-2 border-primary-color mt-2 ml-1">
										<p className="text-primary-color font-semibold text-lg">Lebih Lanjut</p>
									</button>
								</div>
							</div>
						</div>
						<div className="blog-wrapper w-full flex justify-center items-center flex-col">
							<button className="p-2 rounded-lg bg-red-primary flex items-center w-fit mb-5">
									<p className="text-white">Pengumuman</p>
							</button>
							<div className="blog w-4/5 rounded-lg p-5">
								<div className="content">
									<div className="relative w-full h-[24vw]">
										<Image 
											src="/images/blog-1.png"
											layout="fill"
											objectFit="contain"
											alt=""
										/>
									</div>
									<p className="text-xl font-semibold">Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal...</p>
									<button className="py-2 px-6 rounded-lg bg-white flex items-center border-2 border-primary-color mt-2 ml-1">
										<p className="text-primary-color font-semibold text-lg">Lebih Lanjut</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
    );
};

export default Blog;
