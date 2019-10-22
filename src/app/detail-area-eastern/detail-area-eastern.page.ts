import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { Location } from "@angular/common";

@Component({
  selector: 'app-detail-area-eastern',
  templateUrl: './detail-area-eastern.page.html',
  styleUrls: ['./detail-area-eastern.page.scss'],
})
export class DetailAreaEasternPage implements OnInit {
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

    title: any;
    imgName: any;
    description: any;
    director: any;
    website: any;
    email: any;
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
    gotoWebsite(url){
        let target = "_self";
        const browser  = this.theInAppBrowser.create(url ,target, this.options);
        browser.on('exit').subscribe(event => {
          browser.close();
          this.location.back();
        });
    }

    ngOnInit() {
    }

}
