import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  bikeLogin() {
    this.router.navigate(['/user-form']);
  }

}
