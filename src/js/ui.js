class Ui {
  constructor() {
  this.weather = document.querySelector('.weather');
  }

  showWeather(data) {
    const sunrise = new Date(1000*data.sys.sunrise);
    const sunset = new Date(1000*data.sys.sunset);
    const hoursSunrise = sunrise.getHours();
    const hoursSunset = sunset.getHours();
    const minutesSunrise = "0" + sunrise.getMinutes();
    const minutesSunset = "0" + sunset.getMinutes();
    const sunriseTime = hoursSunrise + ':' + minutesSunrise.substr(-2);
    const sunsetTime = hoursSunset + ':' + minutesSunset.substr(-2);

    this.weather.innerHTML = `
    <img class="weather__icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
    <p class="weather__city">We're in ${data.name}, ${data.sys.country}</p>
    <p class="weather__temperature"><span class="point">Temperature:</span> ${data.main.temp}</p>
    <p class="weather__humidity"><span class="point">Humidity:</span> ${data.main.humidity}</p>
    <p class="weather__description"><span class="point">Conditions:</span> ${data.weather[0].description}</p>
    <p class="weather__sun"><span class="point">Sunrise/Sunset:</span> ${sunriseTime}/${sunsetTime} (Central European Time)</p>`
  }
}

export const ui = new Ui()