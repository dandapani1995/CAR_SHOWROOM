import React from 'react';
export default function InputBox({ label, type, value, name, onChange, placeholder }) {

   return (
       <div className='custom-input'>
          <label for={name}>{label}</label>
            <input
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            />  
       </div>
   );
}