import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  userCoordinateLng:number;
  userCoordinateLat:number;
  destCoordinateLng:number;
  destCoordinateLat:number;
   

  constructor(private router: Router) {

  }

  ngOnInit() {
  //  navigator.getBattery().then(data => console.log(data))

    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken")
    .set('pk.eyJ1Ijoic2F1cmFiaGJhZ2FkZSIsImEiOiJjazJ3eWcyajAwa3F4M3FvOXNkcXZsd2ljIn0.YeODOTRRyp6SDwFNMH-Xvg');
    var coordinates = document.getElementById('coordinates');
    let map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [77.618436, 12.929369], // starting position [lng, lat]
      zoom: 13 // starting zoom
    });
  
    // Bangalore center location = 12.954517,77.3507367 (from Google Maps)
    /*
      BBox Bound
      12.420498, 77.464691 South-west
      13.225842, 77.736004 North-east
    */

    var geoMarker = new mapboxgl.Marker({
        draggable: true,
      }).setLngLat([77.3507367,12.954517])
      .addTo(map);


    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      // marker: {
      //   draggable: true,
      //   color: 'orange'
      // },
      marker: false,
      countries: 'in',
      bbox: [77.464691, 12.420498, 77.736004, 13.225842],
      filter: function (item) {
        // returns true if item contains Bangalore asa place
        return item.context.map(function (i) {
        // id is in the form {index}.{id} per https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
        // this example attempts to find the `place` named 'Bangalore'
        return (i.id.split('.').shift() === 'place' && i.text === 'Bangalore');
        }).reduce(function (acc, cur) {
        return acc || cur;
        });
      },
      mapboxgl: mapboxgl
      // trackProximity: true
    });


    // map.addControl(geocoder);

    function onDragEnd() {
      var lngLat = geoMarker.getLngLat();
      coordinates.style.display = 'block';
      coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
      console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat);
    }

    geoMarker.on('dragend', onDragEnd);

    // geocoder.on('results', onDragEnd);

    // console.log(geocoder.accessToken);

    // geocoder.on('result', (result) => {
    //     geocoder.on('results', (results) => {
    //       console.log(results);
    //       console.log(results.features[0].center);
    //       // console.log(results.features[0]);

    //       this.destCoordinateLat = results.features[0].center[1];
    //       this.destCoordinateLng = results.features[0].center[0];
    //       geoMarker.setLngLat(results.features[0].center);
    //       // console.log("Coordinates type: " + typeof(results.features[0].center[0]));

    //       var userCoordinate = [this.userCoordinateLat, this.userCoordinateLng];
    //       var destCoordinate = [this.destCoordinateLat, this.destCoordinateLng];

    //       this.router.navigateByUrl(`/routing/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);       
    //     });
    // });

    geocoder.on('results', (results) => {
        console.log(results.features[0].center);
        // console.log(results.features[0]);

        this.destCoordinateLat = results.features[0].center[1];
        this.destCoordinateLng = results.features[0].center[0];
        geoMarker.setLngLat(results.features[0].center);
        // console.log("Coordinates type: " + typeof(results.features[0].center[0]));

        // var userCoordinate = [this.userCoordinateLat, this.userCoordinateLng];
        // var destCoordinate = [this.destCoordinateLat, this.destCoordinateLng];

        // this.router.navigateByUrl(`/routing/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);       
    });

    var geoLocate = new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
    });

    map.addControl(geoLocate);

    geoLocate.on('geolocate', (Position) => {
        console.log('User Longitude: ' + Position.coords.longitude + 
                    'User Latitude: ' + Position.coords.latitude);

        this.userCoordinateLat = Position.coords.latitude;
        this.userCoordinateLng = Position.coords.longitude;
            

        var geoMarker = new mapboxgl.Marker({
          draggable: true,
          color: "orange"
        }).setLngLat([Position.coords.longitude,Position.coords.latitude])
        .addTo(map);

    });

    map.on('load', function() {
      geoLocate.trigger();
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

  }

  onClick() {

    var userCoordinate = [this.userCoordinateLat, this.userCoordinateLng];
    var destCoordinate = [this.destCoordinateLat, this.destCoordinateLng];

    console.log(userCoordinate, destCoordinate);
    // this.router.navigateByUrl(`/map-navigation/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);
    this.router.navigateByUrl(`/routing/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);
    // this.router.navigateByUrl(`/map-navigation/[[`+coord1+"]"+","+"["+coord2+"]]");
    // this.router.navigate(['/map-navigation', coord1, coord2]);

  }


}
