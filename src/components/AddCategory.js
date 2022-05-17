import React, { useState } from 'react'

import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue,setInputValue]=useState('')

    const handleInputChangue=(e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(catPrev=>[inputValue, ...catPrev]);
            setInputValue('')
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            value={inputValue}
            onChange={handleInputChangue}
            on
            />
        </form>
    </>
  )
}


AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
