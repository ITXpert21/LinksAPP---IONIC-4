import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { Router } from  "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: 'app-president',
  templateUrl: './president.page.html',
  styleUrls: ['./president.page.scss'],
})
export class PresidentPage implements OnInit {
  data: string;
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
  constructor(private menu: MenuController, private theInAppBrowser: InAppBrowser, public  router:  Router, private location: Location) { }

  ngOnInit() {
    if(this.data == 'visitor'){
      this.menu.enable(true, 'visitor');
    }
    if(this.data == 'member'){
      this.menu.enable(true, 'member');
    }

  }
  gotoWebpage(){

    let target = "_system";
    const browser  = this.theInAppBrowser.create('http://www.linksinc.org/' ,target, this.options);

    browser.on('exit').subscribe(event => {
      browser.close();
      this.location.back();

    });
    
  }

}
