import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from  "@angular/router";
import * as $ from 'jquery';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { Location } from "@angular/common";

@Component({
  selector: 'app-detail-area',
  templateUrl: './detail-area.page.html',
  styleUrls: ['./detail-area.page.scss'],
})
export class DetailAreaPage implements OnInit {
  title: any;
  imgName: any;
  description: any;
  director: any;
  website: any;
  email: any;

  options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Back', //iOS only
    closebuttoncolor  : '#4CAF50',
    lefttoright : 'yes',
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    footer: 'yes',
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
  };  
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private theInAppBrowser: InAppBrowser,
              private location: Location) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.title = this.router.getCurrentNavigation().extras.state.title;
        this.imgName = this.router.getCurrentNavigation().extras.state.imgName;
        this.description = this.router.getCurrentNavigation().extras.state.description;
        this.director = this.router.getCurrentNavigation().extras.state.director;
        this.website = this.router.getCurrentNavigation().extras.state.website;
        this.email = this.router.getCurrentNavigation().extras.state.email;

      }
      
    });
   }

  ngOnInit() {
      this.setScroll();
  }

  gotoWebsite(url){
    let target = "_self";
    const browser  = this.theInAppBrowser.create(url ,target, this.options);
    browser.on('exit').subscribe(event => {
      browser.close();
      this.location.back();
    });
  }
  setScroll() {
      $(document).ready(function() {
        setTimeout(function () {
            const outerContent = $('#outerbox');
            const innerContent = $('#innerbox');
            // console.log(innerContent);
            outerContent.scrollLeft( (innerContent.width() - outerContent.width()) / 2);
        }, 250);
      });
  }

}
