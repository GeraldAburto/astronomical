class NASAClient {

    getAstrononyPictureOfTheDay() {
        const dateToday = new Date().toISOString().slice(0, 10);
        const url = `https://api.nasa.gov/planetary/apod?date=${dateToday}&api_key=o4zE7xs1zFU20T7ITAyRVOYexcw5cTbnIdb5C3FB`
        return fetch(url)
            .then(res => res.json())
            .then((result) => {
                return result
            })
    }
}
export default NASAClient