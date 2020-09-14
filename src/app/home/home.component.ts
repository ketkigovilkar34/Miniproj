import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  imgpath:string="../../assets/CLGN.jpg";
  imgpath1:string="../../assets/Gymbag.jpeg";
  imgpath2:string="../../assets/LaptopBag2.jpeg";
  imgpath3:string="../../assets/TKB1.jpg";
  imgpath4:string="../../assets/Multipurposebag.jpeg";
  imgpath5:string="../../assets/TrvlB1.jpg";
 



  constructor( ) { 
    
    
  }

  ngOnInit(): void {
    
  }

}
