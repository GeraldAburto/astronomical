class NASAClient {
    getAstrononyPictureOfTheDay(dateNew) {
        const url = `https://api.nasa.gov/planetary/apod?date=${dateNew}&api_key=o4zE7xs1zFU20T7ITAyRVOYexcw5cTbnIdb5C3FB`
        try {
            return fetch(url)
                .then(res => res.json())
                .then((result) => {
                    return result
                })
        }
        catch (e) {
            console.log(e)
        }
    }
}
export default NASAClient