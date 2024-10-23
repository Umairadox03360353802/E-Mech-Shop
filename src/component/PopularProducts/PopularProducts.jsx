import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function PopularProducts({AddToCart}) {


    const [PopularProduct, setPopularProduct] = useState([])


    useEffect(() => {
        const PopularProductFetch = async () => {
            try {

                const res = await axios("https://dummyjson.com/carts/20")
                console.log(res.data.products)
                setPopularProduct(res.data.products)
            }
            catch (err) {
                toast.error(err.message)

            }
        };
        PopularProductFetch();
    }, [])

    return (
        <div>
            <section className="py-24 bg-[#c8d8e4]">
            <hr className=" my-8 bg-gray-400 mx-20 border-gray-400 "></hr>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mt-20">
                    <h2 className="font-manrope shadow-2xl pb-5 font-bold font-serif text-5xl text-[#2b6777] mb-16 text-center max-lg:text-center ">
                          Popular Products 
                    </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 ">
                    {PopularProduct.filter((item,index)=>index<=3).map((popularItem) => (

                            <a  onClick={()=>AddToCart(popularItem)} className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-[#f2f2f2] rounded-xl shadow-md p-4 transition-all duration-500"  key={popularItem.id} >
                                <div className="">
                                    <img src={popularItem.thumbnail} alt="face cream image"
                                        className="w-full aspect-square rounded-2xl object-cover" />
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-stretch justify-between">
                                        <h6
                                            className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-[#52ab98]">
                                            {popularItem.title}</h6>
                                        <h6 className="font-semibold text-xl leading-8 text-[#2b6777] px-4">${popularItem.price}</h6>
                                    </div>
                                    
                                </div>
                            </a>
                        ))}
                        </div>
                </div>
            </section>

        </div>
    )
}

export default PopularProducts