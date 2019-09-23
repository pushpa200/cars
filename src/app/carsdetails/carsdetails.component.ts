import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carsdetails',
  templateUrl: './carsdetails.component.html',
  styleUrls: ['./carsdetails.component.css']
})
export class CarsdetailsComponent implements OnInit {
  @Input()  carDetails : any = '';
  constructor() { }

  ngOnInit() {
  }

}
