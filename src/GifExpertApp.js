import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp=()=>{
    const [categories, setCategories]=useState(['Dragon Ball'])

    // const handleAdd=()=>{
    //     const newCat=['Yogioh'];
    //     setCategories([...categories,newCat])
    // }
    return(
        <>
        <h2>GitExpertApp</h2>

        <AddCategory 
            setCategories={setCategories}
        />
        <hr />

        
        <ul>
            {categories.map(category=>{
                return <GifGrid category={category}/>
            })}
        </ul>
        </>
    )
}

export default GifExpertApp;