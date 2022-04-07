import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";
const CarouselSection = () => {

    return (
				<div className="carousel-wrapper w-full p-16 bg-grey">
                    <style jsx>
                        {`
                            .carousel .control-dots .dot {
                                background: #3F3F3F !important;
                            }
                        `}
                    </style>
                    <motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							delay:.2,
							ease: "linear",
					}}>
                        <Carousel className="h-full" autoPlay showStatus={false} showThumbs={false} showArrows={false} dynamicHeight={false}>
                            <div className="h-[40vh] bg-dark-grey flex justify-center items-center rounded-lg">
                                <Image src="/images/blue-logo.png" width="180" height="120" alt="image1"/>
                            </div>
                            <div className="h-[40vh] bg-dark-grey flex justify-center items-center rounded-lg">
                                <Image src="/images/blue-logo.png" width="180" height="120" alt="image2" />
                            </div>
                            <div className="h-[40vh] bg-dark-grey flex justify-center items-center rounded-lg">
                                <Image src="/images/blue-logo.png" width="180" height="120" alt="image3"/>
                            </div>
                            <div className="h-[40vh] bg-dark-grey flex justify-center items-center rounded-lg">
                                <Image src="/images/blue-logo.png" width="180" height="120" alt="image4"/>
                            </div>
                        </Carousel>
                    </motion.div>
				</div>
    );
};

export default CarouselSection;
