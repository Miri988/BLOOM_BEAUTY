import { forwardRef } from "react";

export const Input = forwardRef (
  ({type, value, placeholder, onChange,  ...rest}, ref) => {
  return (
    <>
    
        <input 
        type = {type} 
        value = {value}
        placeholder={placeholder} 
        autoComplete="true"
        onChange={onChange} 
        ref = {ref}
        {...rest}/>
          
       
    
    </>
  )
}
);
