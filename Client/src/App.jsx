import AdminLayout from "./components/adminview/layout"
import AuthLayout from "./components/auth/layout"
import ShoppingLayout from "./components/shoppingview/layout"
import AdminDashboard from "./pages/adminview/dashboard"
import AdminFeatures from "./pages/adminview/features"
import AdminOrders from "./pages/adminview/orders"
import AdminProducts from "./pages/adminview/products"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register" 
import {Routes,Route} from "react-router-dom"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shoppingview/home"
import ShoppingListing from "./pages/shoppingview/listing"
import ShoppingCheckout from "./pages/shoppingview/checkout"
import ShoppingAccount from "./pages/shoppingview/account"
import CheckAuth from "./components/common/check-auth"
import UnAuthPage from "./pages/unauthpage"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./store/auth-slice"
import { Skeleton } from "@/components/ui/skeleton"

function App() {
  

  const {user,isAuthenticated,isLoading}=useSelector(state =>state.auth)
  const dispatch =useDispatch()
  useEffect(()=>{
     dispatch(checkAuth())
  },[dispatch])

  if(isLoading){
    return(
      <div>
        <Skeleton className="h-[800px] w-[800px] bg-black " />
      </div>
    )
  }
  console.log(isLoading,user)
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
         <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
         }>
              <Route path="dashboard" element={<AdminDashboard/>}/>
              <Route path="orders" element={<AdminOrders/>}/>
              <Route path="features" element={<AdminFeatures/>}/>
              <Route path="products" element={<AdminProducts/>}/>
         </Route>
         <Route path="/shop" element={
           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
           </CheckAuth>
         }>

              <Route path="home" element={<ShoppingHome/>}/>
              <Route path="listing" element={<ShoppingListing/>}/>
              <Route path="checkout" element={<ShoppingCheckout/>}/>
              <Route path="account" element={<ShoppingAccount/>}/>
         </Route>
         <Route path="*" element={<NotFound/>}/>
         <Route path="/unauth-page" element={<UnAuthPage/>}/>
      </Routes>

      
    </div>
  )
}

export default App
