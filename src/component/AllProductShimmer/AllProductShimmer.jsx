import React from 'react'

function AllProductShimmer() {
     const arr = new Array(12).fill("");
  return (
    <div>
          <section className="text-gray-600 body-font  mt-5 flex justify-center">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap  justify-start -m-4 ">
              
                  {arr.map((el,i)=>(
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full border-2 border-solid shadow rounded-lg animate-pulse
                 bg-slate-100 my-3 mx-7 cursor-pointer   "    >
                  <a className="block relative h-48 rounded-md overflow-hidden bg-slate-300 ">
                   
                  </a>
                  <div className="mt-4">
                    <div className=" h-[20px] rounded-md mb-1 bg-slate-300 w-[30%]"></div>
                    <div className="h-[20px] rounded-md mb-1 bg-slate-300 w-[90%]"></div>
                    <p className="h-[20px] rounded-md mb-1 bg-slate-300 w-[40%] "></p>
                  </div>
                </div>
                ))}
             

            </div>
          </div>
        </section>
    </div>
  )
}

export default AllProductShimmer