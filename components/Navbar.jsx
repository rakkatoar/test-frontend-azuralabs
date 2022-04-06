import Image from "next/image";
const Navbar = () => {

    return (
				<div className="w-full h-[80px] px-[5vw] flex items-center justify-between bg-primary-color fixed z-10 bg-opacity-50">
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
				</div>
    );
};

export default Navbar;
