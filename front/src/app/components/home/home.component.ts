import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){}



takeHome():void{
  if(Number(localStorage.getItem('privilage'))==1){
    this.router.navigate(['client']);
  }
  else if(Number(localStorage.getItem('privilage'))==2){
    this.router.navigate(['atelier']);
  }
  else if(Number(localStorage.getItem('privilage'))==3){
    this.router.navigate(['financier']);
  }
  else if(Number(localStorage.getItem('privilage'))==4){
    this.router.navigate(['admin']);
  }
}
}

