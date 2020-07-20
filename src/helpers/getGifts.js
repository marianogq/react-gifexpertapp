export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=9soch6YEpTGX4fFfUI0qM7gEvtMddkZ2`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // El signo "?"" despues de "images" es por si no devuelve un resultado
        }
    });
    return gifs;
}