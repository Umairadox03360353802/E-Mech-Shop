import './App.css'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { AllProducts } from './component/AllProducts/AllProducts'
import { SignUp } from './Pages/SignUp/SignUp'
import { useEffect, useState } from 'react'
import Navebar from './component/Navbar/Navebar'
import Footer from './component/Footer/Footer'
import SingleProduct from './Pages/SingleProduct/SingleProduct'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import  { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './FirebaseAuth/FirebaseAuth'
import { signOut } from "firebase/auth";
import toast from 'react-hot-toast';



function App() {

  const [carts,setCarts]=useState([])
  const [promo,setPromo]=useState('')
  const [discount,setDiscount]=useState('')
  const [errorPromo,setErrorPromo]=useState('')
  const [userName,setUserName]=useState('')



  // add to cart
  function AddToCart(SelectedCarts) {

    const isProductExist=carts.find((finditem)=>finditem.id===SelectedCarts.id)

    if (isProductExist) {
      const updateCart=
       carts.map((item)=>
        
      item.id===SelectedCarts.id?{...item,quantity:item.quantity+1}:item
    )
      setCarts(updateCart);
      
    }else{

      setCarts([...carts,{...SelectedCarts,quantity:1}])
      toast.success('porduct has been added')
    }
    // console.log(carts)
  }

  // increase quantity
  const handleInc=(id)=>{
   const incQuantity= carts.map((item)=>
      item.id===id? {...item,quantity:item.quantity+1}:item
    )
    setCarts(incQuantity)
  }

  // decrease quantity
  const handleDec=(id)=>{
    const decQuantity= carts.map((item)=>
      item.id===id &&item.quantity>1? {...item,quantity:item.quantity-1}:item
    )
    setCarts(decQuantity)
  }

  // remove cart
  const toRemove=(id)=>{
    const removeProduct=carts.filter((removeItem)=>removeItem.id!==id)
    setCarts(removeProduct)
  }

  // for total pricing of items

  const getTotalCost=()=>{

    const toatalCaost=carts.reduce((total,cartReduceItem)=>{
       return     total + cartReduceItem.price * cartReduceItem.quantity
    },0)
    return toatalCaost-discount;
  }

// get discount on applying promo code
  const getPromoDiscount=()=>{
    if (promo==='umair20') {
      setDiscount(getTotalCost()*0.2)
      setPromo('')
      setErrorPromo('')
    }else if(promo===''){
      setErrorPromo('*Please enter promo code')
    }else{
      setErrorPromo('*Invalid code')
    }
  }

  // console.log(afterDiscount)

  // for changing user's sign-in state
  useEffect(() => {
  
  onAuthStateChanged(auth,(user)=>{
    if (user) {
      setUserName(user.displayName)
    }else{
      setUserName('')

    }
  })
    
  }, [userName])

  // for logout

  const handleLogout=()=>{
    
signOut(auth).then(() => {
  toast.success('Logout Successfully')
}).catch((err) => {
  toast.error(err.message)
});

  }
  

  
  
const router =createBrowserRouter([
  {
    path:'/',
    element:<>
      <Navebar carts={carts} userName={userName} handleLogout={handleLogout} />
      <Home AddToCart={AddToCart}/>
    </>
  },
  {
    path:'/cart',
    element:<>
    <Navebar carts={carts} handleLogout={handleLogout}/>
    
    <Cart carts={carts} handleInc={handleInc} handleDec={handleDec} toRemove={toRemove} 
          getTotalCost={getTotalCost} getPromoDiscount={getPromoDiscount} promo={promo} 
          setPromo={setPromo} errorPromo={errorPromo} />
  </>
  },
  {
    path:'/login',
    element:<>
    <Navebar carts={carts} userName={userName} handleLogout={handleLogout}/>
    
    <Login/>
  </>
  },
  {
    path:'/signup',
    element:<>
    <Navebar carts={carts} userName={userName} handleLogout={handleLogout}/>
    
    <SignUp/>
  </>
  },
  {
    path:'/allproducts',
    element:<>
    <Navebar carts={carts} userName={userName} handleLogout={handleLogout}/>
    
    <AllProducts />
  </>
  },
  {
    path:'/about',
    element:<>
    <Navebar carts={carts} userName={userName} handleLogout={handleLogout}/>
    
    <About />
  </>
  },
  {
    path:'/contact',
    element:<>
    <Navebar carts={carts} userName={userName} handleLogout={handleLogout}/>
    
    <Contact />
  </>
  },
  {
    path:'/singleproduct/:productId',
    element:<>
    <Navebar carts={carts} userName={userName} handleLogout={handleLogout}/>
    
    <SingleProduct addToCart={AddToCart} />
  </>
  },
])
  return(
    
    <div>
     
      <RouterProvider  router={router}/> 
      <Toaster/>
      <Footer/> 
    </div>

  ) 
  
  
}


export default App
