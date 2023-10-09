const apiKey = 'a83f4fafecd32ef986738cf20cf1e343'; 

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`) 
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}
export default getWeather;