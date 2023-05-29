import { forwardRef } from "react";
import { Input } from "../../components/Input/Input";

export const FormField = forwardRef (
  ({labelName, type, value, placeholder, onChange, error, ...rest}, ref) => {
  return (
    <>
    <div className="field">
        
        <label>
           {labelName}
        </label>
        <Input
        type = {type} 
        value = {value}
        placeholder={placeholder} 
        onChange={onChange} 
        ref = {ref}
        {...rest}
        />
          
       {error && <div className="red message">{error}</div>}
    
    </div>
    
        
    </>
  )
}
);
