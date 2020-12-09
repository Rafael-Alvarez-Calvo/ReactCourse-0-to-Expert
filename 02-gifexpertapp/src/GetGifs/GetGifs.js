
export const GetGifs = async(category) =>{

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=52&api_key=SDjhfqG4VxMTu2BKkv1ksriZ5APoyWMS`)
    const {data} = await res.json()
    console.log(data)
    const gifs = data.map(d =>{
        return {
            id : d.id,
            title : d.title,
            url : d.images?.downsized_medium.url
        }
    })

    // console.log(gifs)
    return (gifs);
        // console.log(data);
    

}