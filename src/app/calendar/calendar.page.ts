import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { Router } from  "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
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
    let target = "_self";
    const browser  = this.theInAppBrowser.create('https://calendar.google.com/calendar/embed?src=linkshqcalendar%40gmail.com&ctz=America%2FNew_York%22' ,target, this.options);

    browser.on('exit').subscribe(event => {
      browser.close();
      this.location.back();

    });
  }

}
