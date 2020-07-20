import {useState, useEffect} from 'react';
import { getGifts } from '../helpers/getGifts';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category)
            .then(img => {

                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    });
                }, 3000);
                
            })
    },[category]);

    return state // { data: [], loading: true }
}
