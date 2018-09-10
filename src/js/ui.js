class Ui {
  constructor() {
  this.weather = document.querySelector('.weather');
  }

  showWeather(data) {

    this.weather.innerHTML = `
    <img class="weather__icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
    <p class="weather__city">We're in ${data.name}, ${data.sys.country}</p>
    <p class="weather__temperature"><span class="point">Temperature:</span> ${data.main.temp}</p>
    <p class="weather__humidity"><span class="point">Humidity:</span> ${data.main.humidity}</p>
    <p class="weather__description"><span class="point">Conditions:</span> ${data.weather[0].description}</p>
    `;
  }
}

export const ui = new Ui()