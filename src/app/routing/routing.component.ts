import { RoutingapiserviceService } from './../routingapiservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  displayedColumnsDummy: string[] = ['id', 'travelDistance', 'travelDuration'];

  public dummyResults = [
    {id: 0, travelDistance: 10, travelDuration: 20.5},
    {id: 1, travelDistance: 15, travelDuration: 24.5},
  ];

  displayedColumns: string[] = ['name', 'travelDistance', 'travelDuration' ];

  public coordinates = [];
  public results = [];
  public check = false;
  public dataSource = [];

  constructor(private routingservice: RoutingapiserviceService, private route: ActivatedRoute, 
      private router: Router) { }

  ngOnInit() {

    console.log("Routing Coord1: " + this.route.snapshot.paramMap.get('coordinate1') + "\n");
    console.log("Routing Coord2: " + this.route.snapshot.paramMap.get('coordinate2') + "\n");

    this.coordinates[0] = JSON.parse(this.route.snapshot.paramMap.get('coordinate1'));
    this.coordinates[1] = JSON.parse(this.route.snapshot.paramMap.get('coordinate2'));

    this.routingservice.getDistanceMatrix(this.coordinates[1]).subscribe(data => {
      console.log("POST Request is successful ", data);
      console.log(data);
      console.log(typeof(data["resourceSets"]));
      this.results = data["resourceSets"][0]["resources"][0]["results"];
      // console.log(data["resourceSets"][0]["resources"][0]["results"][0]["travelDistance"]);
      // console.log("Inside: " + this.results);

      console.log("Inside subscribe!");
      console.log(this.results);
      findNearestStations(this.results);  
    });

    //console.log("Results: " + this.results); This won't work outside subscribe unless data is
    // passed to some method
    let that = this; 
    function findNearestStations(results){

      
      console.log("Inside nearest stations!");  
      console.log(sort_by_key(results, 'travelDistance'));
      // console.log(typeof that.dataSource)
      // that.dataSource = results.map(e => e);
      let arr = []
      results.map(e => {
            that.routingservice.stations.map(i => {
                if(e["destinationIndex"] == i["id"]) {
                    let obj = {...e, ...i};
                    console.log(obj);
                    arr.push(obj);
                }
            });
      });
      that.dataSource = arr;
      console.log("Data source!");
      // that.check = true;
      // console.log(JSON.stringify(that.dataSource, 1, 1));
      console.log(that.dataSource);
  
    }

    function sort_by_key(array, key) {
      return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
  
  } //ngOnInit ends here

  navigate(destLatitude, destLongitude) {
    // console.log("navigate!");
    // console.log(destLatitude + " : " + destLongitude);

    var userCoordinate = this.coordinates[0];
    var destCoordinate = [destLatitude, destLongitude];

    console.log(userCoordinate, destCoordinate);
    this.router.navigateByUrl(`/map-navigation/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);

  }

}
