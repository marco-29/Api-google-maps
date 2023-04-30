var map;
var capa_0;
var capa_1;
var capa_2;
var capa_3;
var capa_4;
var capa_5;
var capa_6;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: {lat: 19.0436653, lng: -98.1981438},
      mapTypeId: 'satellite'
    });

    capa_1 = new google.maps.KmlLayer({
        url: "https://jid.agency/dev/sistema_mapa/almacenamiento/archivos/puebla-estdo.kml",
        map: null,
    });

    capa_2 = new google.maps.KmlLayer({
      url: "https://jid.agency/dev/sistema_mapa/almacenamiento/archivos/2023-04-21_22-31-58_lista-cobaep-v2-formato-para-kml-v2.kml",
      map: null,
    });

    capa_3 = new google.maps.KmlLayer({
      url: "https://jid.agency/dev/sistema_mapa/almacenamiento/archivos/2023-04-21_23-04-25_lista-hospitales-v2-formato-para-kml.xlsx.kml",
      map: null,
    });

    capa_4 = new google.maps.KmlLayer({
      url: "https://jid.agency/dev/sistema_mapa/almacenamiento/archivos/ayuntamientos_puebla.kml",
      map: null,
    });

    capa_5 = new google.maps.KmlLayer({
      url: "https://jid.agency/dev/sistema_mapa/almacenamiento/archivos/universidades_puebla.kml",
      map: null,
    });

  var boton_capa_0 = document.getElementById('boton_capa_0');

  boton_capa_0.addEventListener('click', function(){
    if (boton_capa_0.checked === false) {
      capa_1.setMap(map), boton_capa_1.checked = true,
      capa_2.setMap(map), boton_capa_2.checked = true,
      capa_3.setMap(map), boton_capa_3.checked = true,
      capa_4.setMap(map), boton_capa_4.checked = true,
      capa_5.setMap(map), boton_capa_5.checked = true
    }
    else{
    capa_1.setMap(null), boton_capa_1.checked = false,
    capa_2.setMap(null), boton_capa_2.checked = false,
    capa_3.setMap(null), boton_capa_3.checked = false,
    capa_4.setMap(null), boton_capa_4.checked = false,
    capa_5.setMap(null), boton_capa_5.checked = false
    }
  })

  var boton_capa_1 = document.getElementById('boton_capa_1');

  boton_capa_1.addEventListener('click', function() {
    boton_capa_0.checked = false
    if (capa_1.getMap() === null) {
        capa_1.setMap(map);
    }
    else {
        capa_1.setMap(null);
    }
  });

  var boton_capa_2 = document.getElementById('boton_capa_2');

  boton_capa_2.addEventListener('click', function() {
    boton_capa_0.checked = false
    if (capa_2.getMap() === null) {
        capa_2.setMap(map);
    }
    else {
        capa_2.setMap(null);
    }
  });

  var boton_capa_3 = document.getElementById('boton_capa_3');

  boton_capa_3.addEventListener('click', function() {
    boton_capa_0.checked = false
    if (capa_3.getMap() === null) {
        capa_3.setMap(map);
    }
    else {
      capa_3.setMap(null);
    }
  });

  var boton_capa_4 = document.getElementById('boton_capa_4');

  boton_capa_4.addEventListener('click', function() {
    boton_capa_0.checked = false
    if (capa_4.getMap() === null) {
        capa_4.setMap(map);
    }
    else {
      capa_4.setMap(null);
    }
  });

  var boton_capa_5 = document.getElementById('boton_capa_5');

  boton_capa_5.addEventListener('click', function() {
    boton_capa_0.checked = false
    if (capa_5.getMap() === null) {
        capa_5.setMap(map);
    }
    else {
      capa_5.setMap(null);
    }
  });
}
  window.initMap = initMap;