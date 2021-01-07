
export const GetGifs = async(category, limit = 25, page = 1) =>{

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&offset=${limit * page}&api_key=SDjhfqG4VxMTu2BKkv1ksriZ5APoyWMS`)
    const {data} = await res.json()
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