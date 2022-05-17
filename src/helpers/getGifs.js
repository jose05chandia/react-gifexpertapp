export const getGifs = async (category) => {
    const api_key='O0bGE5bGM45aMmHYfU2CVW2V1HkWS1vY'
    const limit=10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(category)}&limit=${limit}`;  
    console.log(encodeURI(category))
    const resp = await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(gifs)
    return gifs
}