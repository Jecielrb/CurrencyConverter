import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyRates } from '../classes/currency';
import currencyJson from '../classes/currency.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  Country: CurrencyRates = currencyJson;
  input: number = 0; 
  output: number = 0;
  fromCountry: string = "";
  toCountry: string = "";
  currencyNames: string[] = Array.from(Object.keys(this.Country.currency));
  from: number = this.Country.currency[0];
  to: number = this.Country.currency[0];
  ngOnInit(): void {
  }
  
  convert(){
    this.from = this.Country.currency[this.fromCountry];
    this.to = this.Country.currency[this.toCountry];
    this.output = Math.floor(((this.input / this.from) * this.to)*10000)/10000;
    console.log(this.from);
    console.log(this.to);
    
  }
}
