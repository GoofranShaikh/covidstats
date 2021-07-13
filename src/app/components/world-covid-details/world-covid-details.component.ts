import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Schematic } from 'src/app/interfaces/schematic';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-world-covid-details',
  templateUrl: './world-covid-details.component.html',
  styleUrls: ['./world-covid-details.component.scss']
})
export class WorldCovidDetailsComponent implements OnInit {
  cases!: any;
  countryCase: Schematic[]=[];
  countrySub!:Subscription;
  constructor(private _router:ActivatedRoute,private _common:HttpService,private _route:Router) { }

  ngOnInit(): void {
    this.cases={
      category:'total_cases',
      death:'total_deaths'
 

   
    };
    console.log(`selected ${this.cases.category}`)
    this.countrySub = this._router.params.subscribe((params: Params) => {
     // console.log(params);
      if (params['country']) {
        //console.log('params country');
        this.getCovidDetails(params['country']);

        //console.log(params)
      } else {
        this.getCovidDetails();
      }
    
    });
  }
  onSubmit(query: NgForm) {
    this._route.navigate(['search', query.value.search]);
   // console.log(this._route.url);
  }
  getCovidDetails(country?:string): void {
      this._common.statistics(country).subscribe((data: any) => {
        this.countryCase = data.response;
        //console.log(this.countryCase);
        this.countryCase.filter((e: any) => {
          if (e.country == 'India') {
           // console.log(e.country, 'active cases', e.cases.active);
          }
        });
      });
    


  }


}
