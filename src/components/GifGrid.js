import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // const [count,setCount]=useState(0)

    const {data,loading}=useFetchGifs(category);
    

    // const [images, setImages] = useState([])
  
    // useEffect(() => {
    //     getGifs(category).then(setImages)
    // }, [category]) 

    
    //  getGifs()
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
            {loading && <h2>Cargando...</h2>}

                {/* <button onClick={()=>setCount(count+1)}>{count}</button> */}
                {
                    data.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    })
                }
            </div>
        </>
    )
}
