import React from 'react'
import { useNavigate } from 'react-router'
import ModalSection from '../../component/ModalSection/ModalSection'
import EmptyCart from '../../component/EmptyCart/EmptyCart'


export default function Cart({carts,handleDec,handleInc,toRemove,getTotalCost,getPromoDiscount,promo ,setPromo,errorPromo}) {
    const navigates=useNavigate()
  return (
    <div>
        {
            carts.length===0? <EmptyCart/>:

                <>
                 <div className=" max-w-5xl max-md:max-w-xl mx-auto bg-[#f2f2f2] font-serif py-4 mt-20">
                        <h1 className="text-3xl font-bold text-gray-800 shadow-lg p-6 text-center">Shopping Cart</h1>
                    
                                
            
                        <div className="grid md:grid-cols-3 gap-8 mt-16 bg-[#f2f2f2]">
            
                             {/*cart section start  */}
                             {
                                carts.map((SelectedItems)=>
                               
                                
                            <div className="md:col-span-2 space-y-4 shadow-lg" key={SelectedItems.id}>
                                <div className="grid grid-cols-3 items-start gap-4">
                                    <div className="col-span-2 flex items-start gap-4">
                                        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                                            <img src={SelectedItems.thumbnail} className="w-full h-full object-contain" />
                                        </div>
            
                                        <div className="flex flex-col">
                                            <h3 className="text-base font-bold text-gray-800">{SelectedItems.title}</h3>
                                            <p className="text-xs font-semibold text-gray-500 mt-0.5">Brand: {SelectedItems.brand}</p>
            
                                            <button type="button" className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0" onClick={()=>toRemove(SelectedItems.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline" viewBox="0 0 24 24">
                                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                                </svg>
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>
            
                                    <div className="ml-auto">
                                        <h4 className="text-lg max-sm:text-base font-bold mr-5 text-gray-800">${(SelectedItems.price*SelectedItems.quantity).toFixed(2)}</h4>
            
                                        <div
                                            className="mt-6 flex items-center px-3 py-1.5 mr-5 shadow-md hover:bg-slate-300 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                <button onClick={()=>handleDec(SelectedItems.id)}>
            
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                            </svg>
                                                </button>
            
                                            <span className="mx-3 font-bold">{SelectedItems.quantity}</span>
            
                                            <button onClick={()=>handleInc(SelectedItems.id)}>
            
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
            
                                <hr className="border-gray-300" />
            
                            </div>
                                )
                             }
                             {/*cart section end  */}
            
                            <div className="bg-gray-100 rounded-md p-4 shadow-xl ">
                                <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b  border-gray-300 pb-2">Order Summary</h3>
            
                                <form className="mt-6">
                                    <div>
                                        <h3 className="text-base text-gray-800 font-semibold mb-4">Enter Promo Code</h3>
                                        <div className="space-y-3">
                                           
            
                                            <div className="relative flex items-center">
                                                <input type="text" placeholder="Code..." value={promo} onChange={(e)=>{setPromo(e.target.value)}}
                                                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none" />
                                            </div> 
                                            <span  className='text-red-500 mr-4-'>{errorPromo}</span><br />
                                            <button type="button" onClick={getPromoDiscount} className="text-white bg-[#2b6777] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300
                                             font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Apply</button>
                                        </div>
                                    </div>
                                </form>
            
                                <ul className="text-gray-800 mt-6 space-y-3">
                                    <li className="flex flex-wrap gap-4 text-sm">Items <span className="ml-auto font-bold">{carts.length}</span></li>
                                    <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">$ {getTotalCost().toFixed(2)}</span></li>
                                    <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">$5.00</span></li>
                                    <hr className="border-gray-300" />
                                    <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${(getTotalCost()+5.00).toFixed(2)}</span></li>
                                </ul>
            
                                <div className="mt-6 space-y-3">
                                    <ModalSection/>
                                    <button type="button" onClick={()=>navigates('/allproducts')} className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide hover:bg-[#2b6777] hover:text-white bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            
        }
    </div>
    
    
  )
}
