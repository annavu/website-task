import { ui } from './ui';

class Weather {
  constructor(city) {
    this.apiKey = 'ad212554e2d234af7b7f27c519d0fe08';
    this.city = 'Lublin';
  }

  getWeather() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
     
    
    xhr.onload = function() {
      if(this.status == 200) {
        const result = JSON.parse(xhr.responseText)
       console.log(result);
        ui.showWeather(result)
    }
  }

  xhr.send();
  
  }

}

export const weather = new Weather();