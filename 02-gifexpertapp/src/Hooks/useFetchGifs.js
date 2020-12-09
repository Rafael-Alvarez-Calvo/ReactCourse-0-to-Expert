import { useState, useEffect} from "react"
import { GetGifs } from "../Helpers/GetGifs"


export const useFetchGifs = (category) => {

    const [State, setState] = useState({
        data : [],
        loading : true
    })

    useEffect(() =>{ 
        GetGifs(category)
            .then(imgs =>{
                setTimeout(() => {
                    // console.log(imgs)
                    setState({
                        data :imgs,
                        loading : false
                    })
        
                }, 750);
            })
    }, [category])

    
    return State;
}
