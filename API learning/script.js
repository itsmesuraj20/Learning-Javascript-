const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

async function getData(cityName){
    const promise =await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0ec5c680d0c04d41b73115348240703&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener('click',async ()=>{
    const value = input.value;
    const result = await getData(value);
    console.log(result);
});


//http://api.weatherapi.com/v1/current.json?key=0ec5c680d0c04d41b73115348240703&q=London&aqi=yes
