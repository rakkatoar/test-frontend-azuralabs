import Image from "next/image";
const Banner = () => {

    return (
        <div>
					<div className="w-full h-screen flex justify-between items-center px-[5vw] bg-[url('/images/banner.png')] bg-no-repeat bg-cover">
						<div className="w-2/5">
							<p className="text-white text-5xl mb-8 leading-[60px]">Menjadi Perusahaan Air Minum Modern</p>
							<p className="text-white text-3xl mb-6 leading-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
							<button className="p-5 rounded-lg bg-white flex items-center">
								<Image src="/images/phone-icon.png"
												width="30"
												height="30"
												alt="" />
								<p className="text-primary-color font-semibold ml-4 text-2xl">Hubungi Kami</p>
						</button>
						</div>
						<div className="flex flex-col items-center h-[52vh] mt-12">
							<p className="rotate-90 text-white mb-[90%] text-lg ml-3">Social Media</p>
							<div className="flex flex-col items-end h-full justify-between">
								<Image src="/images/fb-icon.png"
													width="30"
													height="30"
													alt="" />
								<Image src="/images/ig-icon.png"
													width="30"
													height="30"
													alt="" />
								<Image src="/images/tw-icon.png"
													width="30"
													height="30"
													alt="" />
								<Image src="/images/yt-icon.png"
													width="40"
													height="40"
													alt="" />
							</div>
						</div>
					</div>
        </div>
    );
};

export default Banner;
