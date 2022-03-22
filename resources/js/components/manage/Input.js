import React from 'react';
import '../../assets/manage/sass/Input.scss';

const Input = (({
    label,
    name,
    type,
    value,
    idName,
    className,
    handleChange}) => {

  return ( 
        <>
            <label htmlFor={idName}>
                {label}
            </label> 
            <input
                type={type}
                name={name}
                id={idName}
                className={className}
                value={value}
                onChange={handleChange}
            />
        </>
    );

});
 
export default Input;