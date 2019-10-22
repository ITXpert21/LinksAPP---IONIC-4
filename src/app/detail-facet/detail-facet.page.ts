import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from  "@angular/router";

@Component({
  selector: 'app-detail-facet',
  templateUrl: './detail-facet.page.html',
  styleUrls: ['./detail-facet.page.scss'],
})
export class DetailFacetPage implements OnInit {
  img_facet: any;
  title_facet: any;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.img_facet = this.router.getCurrentNavigation().extras.state.img_facet;
        this.title_facet = this.router.getCurrentNavigation().extras.state.title_facet;

      }
      
    });


  }

  ngOnInit() {
    
  }

}
