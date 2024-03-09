const button = document.getElementById("get-location");

async function getData(latitude, longitude) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0ec5c680d0c04d41b73115348240703&q=${latitude},${longitude}&aqi=yes`
    );
    return await promise.json();
}

async function gotLocation(position) {
    const result = await getData(
        position.coords.latitude,
        position.coords.longitude
    );
    console.log(result);
}

function failedToget() {
    console.log("There was some issue");
}

button.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToget);
});
    