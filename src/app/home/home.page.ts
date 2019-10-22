import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from  "@angular/router";
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit{
  public unsubscribeBackEvent: any;
  data: any;
  showCalendar: boolean = false;
  backButtonSubscription; 
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private platform: Platform, 
              private menu: MenuController,
              private location: Location) { 
    //this.initializeBackButtonCustomHandler();
    this.menu.enable(true, 'visitor');

    /*
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        localStorage.setItem("userlevel", this.data);

        if(this.data == 'visitor'){
          this.menu.enable(true, 'visitor');
        }
        if(this.data == 'member'){
          this.menu.enable(true, 'member');
          this.showCalendar = true;
        }

        console.log(this.data);
      }
      
    });*/
  }
  ngOnInit() { }

  ngAfterViewInit() { 
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  goBack(){
    this.router.navigateByUrl('first');    
  }

  initializeBackButtonCustomHandler(): void {
    this.unsubscribeBackEvent = this.platform.backButton.subscribeWithPriority(999999,  () => {
      //this.router.navigateByUrl('first');    
      this.location.back();

    });
    /* here priority 101 will be greater then 100 
    if we have registerBackButtonAction in app.component.ts */
  }
}
