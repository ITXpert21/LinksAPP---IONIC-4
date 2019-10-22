import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { Router } from  "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {
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
              public  router:  Router, private location: Location) { }

  ngOnInit() {
    let target = "_self";
    let url = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DWNYP7FCQFTQG&source=url";
    const browser = this.theInAppBrowser.create(url ,target, this.options);

    browser.on('exit').subscribe(event => {
      browser.close();
      this.location.back();

    });

  }

}
