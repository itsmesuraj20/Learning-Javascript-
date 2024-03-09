const button =document.getElementById("stop-btn");


function showTime(){
    const current = new Date();
    const time = `${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`;
    document.getElementById("time").innerText = time;
}

let interval = setInterval(showTime,1000 );


button.addEventListener('click',()=>{
    clearInterval(interval);
});

