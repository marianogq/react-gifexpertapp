// ATAJO rafc
import React, {useState} from 'react'
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z']);
    // const handleApp = () => {
    //     // FORMA CORRECTA
    //     // setCategories(cats => [...cats, 'Robotech']);
    //     setCategories([...categories, 'Robotech']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories = { setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}
