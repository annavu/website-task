import '../scss/main.scss';
//  import 'jquery';
//  import Popper from 'popper.js/dist/umd/popper.js';
//  window.Popper = Popper;
import 'bootstrap';
import { weather } from './weather';
import { ui } from './ui';
import { servicesContent } from './content-var';
import { teamContent } from './content-var';
import { worksContent } from './content-var';
import { contactContent } from './content-var';
import { loadmap } from './gmaps';



const showcase = document.querySelector('.showcase');
const servicesBtn = document.querySelector('.services');
const teamBtn = document.querySelector('.team');
const worksBtn = document.querySelector('.works');
const contactBtn = document.querySelector('.contact');
const mapBtn = document.querySelector('.map');
const buttons = [servicesBtn, teamBtn, worksBtn, contactBtn, mapBtn];
const mapContainer = document.querySelector('.section-map');



document.addEventListener('DOMContentLoaded', weather.getWeather());

function show(content) {
  showcase.innerHTML = content;
}



buttons.forEach(function(clickedBtn) {
  clickedBtn.addEventListener('click', function() {
    if(clickedBtn == mapBtn) {
      mapContainer.classList.add('section-map--show');
      showcase.innerHTML = '';
    } else {
      mapContainer.classList.remove('section-map--show');
    }
  })
})



servicesBtn.addEventListener('click', function() {
  setTimeout(function() {
    show(servicesContent)
  },400)
})

teamBtn.addEventListener('click', () => {
  setTimeout(() => {
    show(teamContent)
  },500)
})

worksBtn.addEventListener('click', function() {
  setTimeout(show(worksContent),6000)
})

contactBtn.addEventListener('click', function() {
  setTimeout(function() {
    show(contactContent)
  },400)
})





// window.setInterval(refresh, 5000);

// function refresh() {
//   console.log(555)
//   getWeather()
// }





window.onload = loadmap.load;

window.onload()