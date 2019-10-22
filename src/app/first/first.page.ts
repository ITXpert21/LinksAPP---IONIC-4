import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from  "@angular/router";

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(public  router:  Router) { }

  ngOnInit() {

    let TIME_IN_MS = 5000;
    let hideFooterTimeout = setTimeout( () => {
      this.router.navigate(['home']); 
    }, TIME_IN_MS);


  }


}
