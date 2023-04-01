function runClock(){
    const cechet=()=>{
        let now =new Date()
        let options={
            hour:'numeric',
            minute:'numeric',
            second:'numeric',
        }
        let vremia=document.getElementById('vremia') 
        if(vremia!=null){
            vremia.innerHTML=now.toLocaleString('ru',options)
        }};
        cechet()
        setInterval(cechet,1000)
}


const button=document.querySelector('.btn-info')
// получаем значение импута
function handleButtonClick(){
    const inputVal=document.getElementById('exampleInputEmail1').value;
    if (inputVal==''){
        alert('Ошибка: введите город в строку поиска')
    
    }
    else {
        console.log(inputVal)
        fetchWeather(inputVal) 
    }
    
    
}
button.onclick=handleButtonClick;
lol()

function lol(){
     let formmm=document.getElementById('formm')
formmm.onsubmit=(event)=>{
    event.preventDefault()
}}



// функция запрашивает данные о погоде 
async function fetchWeather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&APPID=483f7cc145c4efc5f7411a867744ed88`
    try {
        const response=await fetch(url)

        if (response.ok) { 
  const data=await response.json()
        console.log('Data', data)
        
        serverdal(data)
        kartinki(data)
        
      let container=document.getElementById('cont')
        container.style.visibility = 'visible';
        // contrrr(data)
            
          } else if(response.status===404){
            alert("Введите правильно город или страну. Ошибка: " + response.status);
          }
        else {
            alert('HTTP: ' + response.status)
        }

      
        //  показать блок
    } catch(e){
        console.error(e)
    }
    
}

// function contrrr(){
// let blocc=document.getElementById('cont')
//       if(blocc.onclick()){
        
//       }
// }


function serverdal(data){
    let temp=document.getElementById('temperature')
    if(temp!=null){
        temp.innerHTML=data.main.temp
    
        let vlag=document.getElementById('vlajnost')
        if(vlag!=null){
            vlag.innerHTML=data.main.humidity
        }
     let inmoment=document.getElementById('namoment')
     if(inmoment!=null){
        inmoment.innerHTML=data.weather[0].description

     }   
     let ochuch=document.getElementById('ochuchenie')
     if(ochuch!=null){
        ochuch.innerHTML=data.main.feels_like
     }
     let veter=document.getElementById('skorost')
     if(veter!=null){
        veter.innerHTML=data.wind.speed
     }

    
    }
    // img.src="images/как ощущается температура.png"
}

function kartinki(data){
    const img=document.getElementById('meniai');

    if(data.weather[0].id >= 200 && data.weather[0].id < 600){
        // console.log('дождь')
        img.src='images/дождь.png'
    }
    else if(data.weather[0].id >= 802 && data.weather[0].id < 900){
    console.log('облочно')
    img.src='images/облочно.png'
    }
    else if(data.weather[0].id === 801){
        console.log('переменная облочность')
        img.src='images/переменая облочнось.png'
    }
    else if( data.weather[0].id >= 600 && data.weather[0].id < 700){
    console.log('снег')
    img.src='images/снег.png'
    }
    else if( data.weather[0].id === 800){
        console.log('солнечно')
        img.src="images/солнечно.png"
    }
    else{
        console.log('все остальное')
        img.src='images/погода по умолчанию.png'
    }



    

        // data.weather[0].id - погодные условия

        // дождь: data.weather[0].id >= 200 && data.weather[0].id < 600 
        // облачно: data.weather[0].id >= 802 && data.weather[0].id < 900
        // перем. облачность: data.weather[0].id === 801
        
        // снег: data.weather[0].id >= 600 && data.weather[0].id < 700
        // солнечно: data.weather[0].id === 800
        // погода по умолчанию: все остальное   

        // img.src = 'путь к картинке';
}
      


runClock()







    



//на клик показать аллерт с текстом
//на клик получать текс из импута