import React from 'react'
import g1 from "../../assets/GalleryImg/g1.jpeg";
import g2 from "../../assets/GalleryImg/g2.jpg";
import g3 from "../../assets/GalleryImg/g3.jpg";
import g4 from "../../assets/GalleryImg/g4.jpg";
import g5 from "../../assets/GalleryImg/g5.jpg";
import g6 from "../../assets/GalleryImg/g6.webp";

const Gallery = () => {
    return (
        <>
            <section className="text-gray-600 body-font  bg-[#2b6777]">
                <h2 className="font-manrope font-serif shadow-2xl pb-5 font-bold text-6xl text-white mb-8 pt-10 text-center max-lg:text-center">
                          Gallery
                    </h2>
                <div className="container px-5 py-20 mx-auto flex flex-wrap">
                   
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2 ">
                            <div className="md:p-2 p-1 w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transform duration-500">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={g1} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transform duration-500">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={g2} />
                            </div>
                            <div className="md:p-2 p-1 w-full hover:scale-75 hover:translate-x-4 hover:skew-y-3 transform duration-500">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={g5} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2 ">
                            <div className="md:p-2 p-1 w-full hover:scale-75 hover:translate-x-4 hover:skew-y-3 transform duration-500">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={g4} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transform duration-500">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={g3} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transform duration-500">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={g6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery