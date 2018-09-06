import '../scss/main.scss';
//  import 'jquery';
//  import Popper from 'popper.js/dist/umd/popper.js';
//  window.Popper = Popper;
import 'bootstrap';
// var $ = require('jquery');

// $('.item').click(function () {
//   $('.collapse').collapse('hide');
// });


// let anchorlinks = document.querySelectorAll('a[href^="#"]')
//     console.log(anchorlinks)
 
//  for (let item of anchorlinks) { // relitere 
//      item.addEventListener('click', (e)=> {
//          console.log(123)
//          let hashval = item.getAttribute('href')
//          let target = document.querySelector(hashval)
//          target.scrollIntoView({
//              behavior: 'smooth',
//              block: 'start'
//          })
//          history.pushState(null, null, hashval)
//          e.preventDefault()
//      })
//  }



//  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });



const showcase = document.querySelector('.showcase');
const services = document.querySelector('.services');

const showServices =  `
  
<p class="section__title text-center">Services</p>
<div class="row">

    <div class="card col-md-3 col-sm-6 my-3 text-center">
        <div class="card__image mb-1">
            <i class="fas fa-project-diagram"></i>
        </div>
        <div class="card__content py-3">
            <h6 class="card__title font-weight-bold">Design</h6>
            <p class="card__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </p>
        </div>
    </div>

    <div class="card col-md-3 col-sm-6 my-3 text-center">
        <div class="card__image mb-1">
            <i class="fas fa-laptop-code"></i>
        </div>
        <div class="card__content py-3">
            <h6 class="card__title font-weight-bold">Development</h6>
            <p class="card__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </p>
        </div>
    </div>

                  <div class="card col-md-3 col-sm-6 my-3 text-center">
                        <div class="card__image mb-1">
                                <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="card__content py-3">
                          <h6 class="card__title font-weight-bold">Optimization</h6>
                          <p class="card__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </p>
                        </div>
                      </div>
        
                      <div class="card col-md-3 col-sm-6 my-3 text-center">
                            <div class="card__image mb-1">
                                    <i class="fas fa-cogs"></i>
                            </div>
                            <div class="card__content py-3">
                              <h6 class="card__title font-weight-bold">Support</h6>
                              <p class="card__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </p>
                            </div>
                          </div>
            
</div>

`

const header = document.querySelector('header');
function show() {
  showcase.innerHTML = showServices;
  // header.style.background = '#444'
}


services.addEventListener('click', function() {
  setTimeout(show,500)
})

document.addEventListener('DOMContentLoaded', getWeather);


// window.setInterval(refresh, 5000);

// function refresh() {
//   console.log(555)
//   getWeather()
// }




const weather = document.querySelector('.weather');
console.log(weather.textContent)

function getWeather() {
  const weather = document.querySelector('.weather');
  const city = 'Lublin';
  const key = '641ec68f4a3afe00e2783b32b4196e4c';

  
  console.log(123)
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
     
    
    xhr.onload = function() {
      if(this.status == 200) {
        const result = JSON.parse(xhr.responseText)
       console.log(result);
      showWeather(result)
    }
  }

  xhr.send();
  
}

function showWeather(data) {
  const sunrise = new Date(1000*data.sys.sunrise);
  const sunset = new Date(1000*data.sys.sunset);
  const hoursSunrise = sunrise.getHours();
  const hoursSunset = sunset.getHours();
  const minutesSunrise = "0" + sunrise.getMinutes();
  const minutesSunset = "0" + sunset.getMinutes();
  const sunriseTime = hoursSunrise + ':' + minutesSunrise.substr(-2);
  const sunsetTime = hoursSunset + ':' + minutesSunset.substr(-2);

  weather.innerHTML = `
  <img class="weather__icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
  <p class="weather__city">${data.name}, ${data.sys.country}</p>
  <p class="weather__temperature"><span class="title">Temperature:</span> ${data.main.temp}</p>
  <p class="weather__humidity"><span class="title">Humidity:</span> ${data.main.humidity}</p>
  <p class="weather__description"><span class="title">Conditions:</span> ${data.weather[0].description}</p>
  <p class="weather__sun"><span class="title">Sunrise/Sunset:</span> ${sunriseTime}/${sunsetTime} (Central European Time)</p>
  `;
}