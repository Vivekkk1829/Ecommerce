
import CommonForm from "@/components/common/form"
import { loginFormControls, registerFormControls } from "@/config"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";
import {toast } from 'sonner';

const initialState={
    email:'',
    password:''
}

function AuthLogin() {
    const [formData,setFormData]=useState(initialState)
    const dispatch =useDispatch();
    function onSubmit(event){
        event.preventDefault()
        dispatch(loginUser(formData)).then((data)=>{
            console.log(data);
            if(data?.payload?.success){
                 toast.success(data?.payload?.message)
            }else{
                 toast.error(<div className="text-red-700">
                    {data?.payload?.message}
                 </div>)
            }
            
        })

    }
    return(
        <div className="mx-auto w-full max-w-md space-y-6">
              <div className="text-center">
                 <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign In to Your Account</h1>
                 <p className="mt-2">
                    Don't have an Account?
                     <Link to="/auth/register" className="font-medium ml-2 text-primary hover:underline">Register</Link>
                 </p>
              </div>
              <CommonForm
               formControls={loginFormControls}
               buttonText={'Sign In'}
               formData={formData}
               setFormData={setFormData}
               onSubmit={onSubmit}
              />
        </div>
    )
}

export default AuthLogin