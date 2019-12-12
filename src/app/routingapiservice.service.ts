import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RoutingapiserviceService {
  API_KEY='Am645nTS2rVqgDNr8UDKqZPdOL-X2_Z94sS5-GqjNBcoMfSOi_dVC6KTDGxL_jDb';
  responses=[];
  public stations = [
    {"id": 0, "name": "Forum Mall", "latitude": 12.934603, "longitude": 77.611312},
    {"id": 1, "name": "Christ University", "latitude": 12.9345805, "longitude": 77.605785},
    {"id": 2, "name": "St. Johns Medical College", "latitude": 12.99369, "longitude": 77.618436},
    {"id": 3, "name": "Phoenix Marketcity", "latitude": 12.997058, "longitude": 77.696404},
    {"id": 4, "name": "Cubbon Park", "latitude": 12.980437, "longitude": 77.597878},
    {"id": 5, "name": "Bangalore Palace", "latitude": 12.9983585, "longitude": 77.5920115},
    {"id": 6, "name": "Lalbagh Botanical Garden", "latitude": 12.948948, "longitude": 77.586951},
    {"id": 7, "name": "Visvesvaraya Industrial and Technological Museum", "latitude": 12.974992, "longitude": 77.596463},
    {"id": 8, "name": "ISKCON Bangalore", "latitude": 13.01089, "longitude": 77.55149},
  ];

  constructor(private httpclient:HttpClient) { }

  public getGeoJsonLatLOng(coordinates) {
      return this.httpclient.get('http://dev.virtualearth.net/REST/V1/Routes?wp.0='+coordinates[0][0]+', '+coordinates[0][1]+'&wp.1='+coordinates[1][0]+','+ coordinates[1][1]+'&optmz=distance&routeAttributes=routePath&key=Am645nTS2rVqgDNr8UDKqZPdOL-X2_Z94sS5-GqjNBcoMfSOi_dVC6KTDGxL_jDb') 
  }
  
  public getDistanceMatrix(userDestination) {

    // console.log("Stations: " + this.stations);

    // for(var j = 0;j < 9;j++) {
    //   console.log(this.stations[j]);
    //   console.log(this.stations[j]["latitude"]);
    // }

    var JSONrequest = { origins: [{
        latitude: userDestination[0],
        longitude: userDestination[1]
      }], 
      destinations: [], 
      travelMode: "driving"  
    };

    for(var i = 0;i < 9;i++) {
      JSONrequest.destinations.push({
        latitude: this.stations[i]["latitude"],
        longitude: this.stations[i]["longitude"]
      });
    }

    console.log(JSON.stringify(JSONrequest));    

    return this.httpclient.post('https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?key=Am645nTS2rVqgDNr8UDKqZPdOL-X2_Z94sS5-GqjNBcoMfSOi_dVC6KTDGxL_jDb', JSON.stringify(JSONrequest));

  }

}
