function runClock(){
    const tick=()=>{
        let now =new Date()
        let options={
            hour:'numeric',
            minute:'numeric',
            second:'numeric',
        }
        let clock=document.getElementById('clock') 
        if(clock!=null){
            clock.innerHTML=now.toLocaleString('ru',options)
        }};
        tick()
        setInterval(tick,1000)
}

const button = document.querySelector('.btn-info')
// получаем значение импута
function handleButtonClick(){
    const inputVal=document.getElementById('cityInput').value;
    if (inputVal === '') {
        alert('Ошибка: введите город в строку поиска')
    } else {
        console.log(inputVal)
        fetchWeather(inputVal) 
    }
}
button.onclick = handleButtonClick;

const form = document.getElementById('form')
form.onsubmit = (event) => {
    event.preventDefault();
}

// функция запрашивает данные о погоде 
async function fetchWeather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&APPID=483f7cc145c4efc5f7411a867744ed88`;
    try {
        const response = await fetch(url);

        if (response.ok) { 
            const data=await response.json()
            console.log('Data', data)
        
            showData(data);
            showImages(data);
        
            const container = document.getElementById('container');
            container.style.visibility = 'visible';            
          } else if (response.status===404) {
            alert("Введите правильно город или страну. Ошибка: " + response.status);
          }
        else {
            alert('HTTP: ' + response.status)
        }
    } catch(e){
        console.error(e)
    }
}

function showData(data) {
    const temp = document.getElementById('temperature');
    if(temp !== null){
        temp.innerHTML = data.main.temp;
    }
    
    const vlag = document.getElementById('vlajnost');
    if(vlag !== null){
        vlag.innerHTML=data.main.humidity
    }
    
    const inmoment = document.getElementById('namoment');
    if(inmoment !== null) {
        inmoment.innerHTML=data.weather[0].description
    }

    const ochuch = document.getElementById('ochuchenie');
    if(ochuch !== null){
        ochuch.innerHTML=data.main.feels_like
    }

    const veter = document.getElementById('skorost');
    if(veter !== null) {
        veter.innerHTML=data.wind.speed
    }
}

function showImages(data){
    const img = document.getElementById('meniai');

    if(data.weather[0].id >= 200 && data.weather[0].id < 600) {
        img.src='images/дождь.png'
    } else if(data.weather[0].id >= 802 && data.weather[0].id < 900){
        img.src='images/облочно.png';
    } else if(data.weather[0].id === 801) {
        img.src='images/переменая облочнось.png'
    } else if( data.weather[0].id >= 600 && data.weather[0].id < 700) {
        img.src='images/снег.png'
    } else if( data.weather[0].id === 800) {
        img.src="images/солнечно.png"
    } else {
        img.src='images/погода по умолчанию.png'
    }

    // data.weather[0].id - погодные условия

    // дождь: data.weather[0].id >= 200 && data.weather[0].id < 600 
    // облачно: data.weather[0].id >= 802 && data.weather[0].id < 900
    // перем. облачность: data.weather[0].id === 801
    
    // снег: data.weather[0].id >= 600 && data.weather[0].id < 700
    // солнечно: data.weather[0].id === 800
    // погода по умолчанию: все остальное   
}

runClock()







    



//на клик показать аллерт с текстом
//на клик получать текс из импута