import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  //template : "<p>Aqui va un proyecto</p>",
  //styles  : ["p{background-color:red;}"]
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit{

  nombre="Primer Proyecto";

  //url="https://www.google.com";

  fecha="01-01-2023";

  empresa="Freelancer";


  // getUrl(){
  //   return this.url;
  // }


  llamaUrl(value : String){
   // return "";
  }
  constructor(){}

  ngOnInit() : void{

  }
}
