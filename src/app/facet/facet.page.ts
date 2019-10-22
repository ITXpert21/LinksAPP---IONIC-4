import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from  "@angular/router";

@Component({
  selector: 'app-facet',
  templateUrl: './facet.page.html',
  styleUrls: ['./facet.page.scss'],
})
export class FacetPage implements OnInit {

  constructor(public  router:  Router) { }

  ngOnInit() {
  }

  gotoDetail(facet_name : string){
    switch(facet_name){
      case 'facet':
        this.router.navigate(['detail-facet']);
        break;
      case 'facet1':
        this.router.navigate(['detail-facet1']);
        break;
      case 'facet2':
        this.router.navigate(['detail-facet2']);
        break;
      case 'facet3':
        this.router.navigate(['detail-facet3']);
        break;
      case 'facet4':
        this.router.navigate(['detail-facet4']);
        break;



    }

  }
}
