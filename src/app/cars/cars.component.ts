import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carData : any=''; 
  cars = [
    
    {
      brand : 'Jaguar',
      img : 'https://cdn.pixabay.com/photo/2016/05/02/10/37/jaguar-1366978__340.jpg',
      description : 'Jaguar Cars is a brand of cars made by Jaguar Land Rover. This is a British car builder, owned by the Indian builder Cans Tata Motors since the beginning of 2008. It was established in 1922 by William Lyons. It was renamed Jaguar in 1935.'
    },
   
    {
      brand : 'Ferari',
      img :'https://cdn.pixabay.com/photo/2015/04/14/09/13/ferrari-721858__340.jpg',
      description : 'Ferrari is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1939 out of Alfa Romeos race division as Auto Avio Costruzioni, the company built its first car in 1940.In 2014 Ferrari was rated the worlds most powerful brand by Brand Finance.'
    },
    {
      brand : 'Benz',
      img :'https://cdn.pixabay.com/photo/2016/05/03/23/46/mercedes-benz-1370536__340.jpg',
      description : 'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg.'
    },
    {
      brand : 'RangeRover ',
      img :'https://cdn.pixabay.com/photo/2016/11/07/21/19/range-rover-1806931_1280.jpg',
      description : 'The Land Rover Range Rover (generally known simply as a Range Rover) is a full-sized luxury sport utility vehicle (SUV) from Land Rover, a marque of Jaguar Land Rover. The Range Rover was launched in 1970 by British Leyland. This flagship model is now in its fourth generation.'
    },
    {
      brand : 'RollsRoyce ',
      img :'https://cdn.pixabay.com/photo/2016/04/07/18/34/rolls-royce-1314401_1280.jpg',
      description : 'Rolls-Royce was a British luxury car and later an aero-engine manufacturing business established in 1904 by the partnership of Charles Rolls and Henry Royce.'
    },
    {
      brand : 'Bugatti',
      img :'https://cdn.pixabay.com/photo/2018/03/04/16/27/car-3198456_1280.jpg',
      description : 'The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Volkswagen Group and manufactured in Molsheim, France, by French automobile manufacturer Bugatti. It was named after the racing driver Pierre Veyron. The original version has a top speed of 407 km/h'
    },
    {
      brand : 'Jeep',
      img :'https://cdn.pixabay.com/photo/2016/11/18/15/11/car-1835246_1280.jpg',
      description : 'Jeep advertising has always emphasized the brands vehicles off-road capabilities. Today, the Wrangler is one of the few remaining four-wheel-drive vehicles with solid front and rear axles. These axles are known for their durability, strength, and articulation.'
    },
    {
      brand : 'BMW',
      img :'https://cdn.pixabay.com/photo/2016/11/18/12/51/automobile-1834274__340.jpg',
      description :'BMW is a German multinational company which produces automobiles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad.'
    },
    {
      brand : 'Fiat ',
      img :'https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_1280.jpg',
      description : 'Fiat Automobiles is the largest automobile manufacturer in Italy. During its more than century-long history, it remained the largest automobile manufacturer in Europe and the third in the world after General Motors and Ford for over twenty years, until the car industry crisis in the late 1980s'
    },

    {
      brand : 'Audi',
      img :'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
      description : 'Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany.The four rings of the Audi logo each represent one of four car companies that banded together to create Audi Auto Union. Audis slogan is Vorsprung durch Technik  meaning Being Ahead through Technology'
    },

  ]
  constructor() { }
  sendCar(car){
    this.carData = car;
 }

  ngOnInit() {
  }

}
