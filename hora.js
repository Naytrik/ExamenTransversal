function mostrarHora(){
    let momentoActual, hora, minuto, segundos, horaImprimible;
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundos = momentoActual.getSeconds();

    if(segundos <10){
        segundos = '0' + segundos
    }

    horaImprimible = hora + " : " + minuto + " : " + segundos;

    // salida
    document.getElementById('mostrarHora').innerHTML = horaImprimible;
   }

setInterval(function () { mostrarHora();}, 1000);


//Consumo api hora

const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=3871336&units=metric&appid=0af522921c3782865ad4fe361cef686c';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    let info = data;
    document.getElementById('temperatura').innerHTML =`Temp Minima: 
    ${info.list[0].main.temp_min}° | Maxima: 
    ${info.list[0].main.temp_max}°`    
    console.log(data);
  })
  .catch(error => {
    // Manejar cualquier error ocurrido durante la solicitud
    console.error('Error:', error);
  });