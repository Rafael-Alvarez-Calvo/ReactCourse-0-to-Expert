import { useState, useEffect} from "react"
import { GetGifs } from "../Helpers/GetGifs"


export const useFetchGifs = (category, limit = 25, page = 2) => {

    const [State, setState] = useState({
        data : [],
        loading : true
    })

    useEffect(() =>{ 
        GetGifs(category, limit, page)
            .then(imgs =>{
                setTimeout(() => {
                    // console.log(imgs)
                    setState({
                        data :imgs,
                        loading : false
                    })
        
                }, 750);
            })
    }, [category,limit,page])

    
    return State;
}
