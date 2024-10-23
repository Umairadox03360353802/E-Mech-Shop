import React from 'react'
import axios from 'axios'
import loginBg from '../../assets/login-bg.jpg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import AllProductShimmer from '../AllProductShimmer/AllProductShimmer'






export const AllProducts = () => {

  const navigates = useNavigate()


  const [Categories, setCategories] = useState([])
  // const [SelectProducts, setSelectProducts] = useState(null)
  const [TotalProducts, setTotalProducts] = useState([])
  const [OriginalProducts, setOriginalProducts] = useState([])
  const [searchProducts, setSearchProducts] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')



  const AllProductsCategoryUrl = 'https://dummyjson.com/products/category-list';
  const TotalProductsUrl = 'https://dummyjson.com/products';



  //  for all categories
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios(AllProductsCategoryUrl)
        // console.log(res.data)
        setCategories(res.data)
      }
      catch (error) {
        console.log(error)

      }
    };
    getAllProductsCategory();
  }, [])


  // total product items
  useEffect(() => {
    const getTotalProducts = async () => {
      try {

        const res = await axios(TotalProductsUrl);
        // console.log(res +'all products')
        setTotalProducts(res.data.products)

        setOriginalProducts(res.data.products)

      }

      catch (error) {
        console.log(error)
      }
    }
    getTotalProducts()

  }, [])


  //  filter product
  const filterProduct = (filterCategory) => {
    // setSelectProducts(filterCategory)
    const data = filterCategory ? OriginalProducts.filter((item) => item.category == filterCategory) : OriginalProducts
    setTotalProducts(data)

  }

  // search product
  const handleSearchButton = () => {

    const searchProduct = OriginalProducts.filter((searchProductItem) =>
      searchProductItem.title.toLowerCase().includes(searchProducts.toLowerCase())
    )
    setTotalProducts(searchProduct)
  }

  // filter by price range
  const handlePriceRange = () => {
    const priceRangeProduct = OriginalProducts.filter((productItem) =>
      (!minPrice || productItem.price >= minPrice) && (!maxPrice || productItem.price <= maxPrice)
    )
    setTotalProducts(priceRangeProduct)
  }


  return (
    <div>

      <>
        <div>
          <div className='relative' >
            <img src={loginBg} alt=" waite....." className='object-cover object-center w-full h-[300px]' />
            <div className='w-full h-[300px] bg-black absolute top-0 opacity-45'></div>
            <h2 className='absolute text-white top-[50%] left-[10%] font-serif font-semibold text-5xl'>All Produtcts</h2>
          </div>
        </div>


        <div className='flex flex-col items-center bg-[#2b6777] pb-6 pt-4'>

          {/* select product ctegory */}
          <div className='flex  flex-wrap m-5  '>
            <select className='rounded-md font-serif' onChange={(e) => { filterProduct(e.target.value) }}>
              <option >Choose Your Ctaegory</option>
              {Categories.filter((filterItems) =>
                !['womens-bags', 'laptops', 'sunglasses', 'sports-accessories', 'motorcycle', 'smartphones',
                   'tablets', 'mobile-accessories', 'vehicle', 'tops', 'womens-dresses', 'womens-jewellery',
                    'womens-shoes', 'womens-watches']
                  .includes(filterItems))
                .map((Allitems, index) => (

                  <option  value={Allitems} key={index}>{Allitems}</option>
                )
                )}
            </select>
          </div>

          {/* search bar */}
          <div className="flex rounded-md border-none bg-[#f2f2f2] overflow-hidden max-w-md mx-auto font-[sans-serif]">
            <input type="email" placeholder="Search Something..." onChange={(e) => setSearchProducts(e.target.value)}
              className="w-full outline-none rounded-s-md bg-[#f2f2f2]  font-serif text-gray-600 text-sm px-4 py-3" />
            <button type='button' onClick={handleSearchButton} className="flex items-center justify-center bg-[#c8d8e4] text-black  px-5">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-black ">
                <path 
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303
               2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </button>
          </div>

          <div className='text-center m-4'>
            <input type="text" placeholder='Min price'
              className='border-none p-2 ml-3 font-serif bg-[#f2f2f2]  rounded-md' onChange={(e) => setMinPrice(e.target.value)} />

            <input type="text" placeholder='Max price'
              className='border-none p-2 ml-3 font-serif bg-[#f2f2f2]  rounded-md' onChange={(e) => setMaxPrice(e.target.value)} />
            <button className='p-2 ml-4 rounded-md bg-[#c8d8e4] text-black font-serif
            '
              onClick={handlePriceRange}
            >Filter by Price</button>
          </div>
        </div>



        {/* Total Product item list */}


        {TotalProducts==0 ?

          <AllProductShimmer />:
          

          <section className="text-gray-600 body-font bg-[#c8d8e4]  flex justify-center">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap  justify-start -m-4 ">
                {TotalProducts.map((item) => (

                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg  rounded-lg
                 bg-[#ffffff] my-3 mx-7 cursor-pointer  " key={item.id} onClick={() => { navigates(`/singleproduct/${item.id}`) }} >
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="object-fill object-center w-full h-full block " src={item.thumbnail} />
                    </a>
                    <hr className="h-px my-8 bg-gray-400 border-0 "></hr>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest font-Pacifico title-font mb-1">{item.brand}</h3>
                      <h2 className="text-[#52ab98] title-font text-lg font-serif font-medium">{item.title}</h2>
                      <p className="mt-1 font-Dancing-Script">${item.price}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </section>

        }



      </>
    </div>
  )
}
