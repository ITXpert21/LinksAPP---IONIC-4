import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VendorServiceService} from "../services/vendor/vendor-service.service"
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { Location } from "@angular/common";

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {
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
  vendors: any;
  constructor(private http: HttpClient, private vendorService: VendorServiceService,
              private theInAppBrowser: InAppBrowser, private location: Location) { }

  ngOnInit() {
    this.getVendors();
  }

  getVendors() {
    this.http.get('http://mobileapp.linksincdb.org/vendors.php').subscribe(data => {
      this.vendors = data;
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
}
