import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from  "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

    FIRST_NAME: any;
    LAST_NAME: any;
    ID: any;
    D_INDUCTION_YEAR: any;

  constructor(private route: ActivatedRoute, private router: Router) {
      this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
              this.FIRST_NAME = this.router.getCurrentNavigation().extras.state.FIRST_NAME;
              this.LAST_NAME = this.router.getCurrentNavigation().extras.state.LAST_NAME;
              this.ID = this.router.getCurrentNavigation().extras.state.ID;
              this.D_INDUCTION_YEAR = this.router.getCurrentNavigation().extras.state.D_INDUCTION_YEAR;
          }
      });
  }

  ngOnInit() {
  }

}
