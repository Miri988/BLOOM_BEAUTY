import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "components";

import { Schema } from "./data";

import { FormField } from "containers";



export const SignInForm = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({resolver: yupResolver(Schema)});

    const onSubmitHandler = () => {
       

    }


    return (
        <>
            <div className="card auth">
                <div className="header large aligned center">
                    Register

                    <div className="subheader">
                    Please fill in the fields below:
                    </div>

                </div>
                
            
                <form className = "form" onSubmit={handleSubmit(onSubmitHandler)}>
                            
                    <FormField
                    type = "text" 
                    labelName = "First Name" 
                    error = {errors.firstName?.message}
                    {...register("firstName")}/>
                    
                    <FormField
                    type = "text" 
                    labelName = "Last Name" 
                    error = {errors.lastName?.message}
                    {...register("lastName")}/>
                    <FormField
                    type = "email" 
                    placeholder = "Email" 
                    error = {errors.email?.message}
                    {...register("email")}/>
                    <FormField
                    type = "password" 
                    placeholder = "Password" 
                    error = {errors.password?.message}
                    {...register("password")}/>
                    <FormField
                    type = "password" 
                    placeholder = "Confirm password" 
                    error = {errors.confirmPassword?.message}
                    {...register("confirmPassword")}/>
                    <div className="field">
                        <Button className = "fluid" type = "submit"> Register </Button>
                    </div>
                    
                </form>

            </div>
            
        </>
  )
}
