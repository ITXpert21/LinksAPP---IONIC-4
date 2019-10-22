import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { Router } from  "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {
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

  constructor(private theInAppBrowser: InAppBrowser,
            private platform: Platform,
            public  router:  Router, private location: Location) {
             }

  ngOnInit() {
    let target = "_self";
    const browser  = this.theInAppBrowser.create('http://mobileapp.linksincdb.org/locator/locator.php' ,target, this.options);
    browser.on('exit').subscribe(event => {
      browser.close();
     this.location.back();

    });
    
   // browser.close();    
  }




}
