import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { Location } from "@angular/common";

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  url: string;
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
  constructor(private theInAppBrowser: InAppBrowser, private location: Location) { }

  ngOnInit() {
  }
  gotoSocial(data){
    switch(data){
      case 'facebook':
        this.url = "https://www.facebook.com/thelinksinc/";
        break;
      case 'twitter':
        this.url = "https://twitter.com/linksinc ";
        break;
      case 'instagram':
        this.url = "https://www.instagram.com/thelinksinc";
        break;
      case 'linkedin':
        this.url = "https://www.linkedin.com/company/the-links-incorporated/about";
        break;
    }
    let target = "_self";
    const browser  = this.theInAppBrowser.create(this.url, target, this.options);

    browser.on('exit').subscribe(event => {
      browser.close();
      //this.location.back();

    });    

  }
}
