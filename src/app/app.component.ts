import { Component } from '@angular/core';

import { Platform  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages_visitor = [

    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Presidents Message',
      url: '/president',
      icon: 'microphone'
    },
    {
      title: 'Our Founders',
      url: '/founders',
      icon: 'contacts'
    },
    {
      title: 'Leadership ',
      url: '/leadership',
      icon: 'contact'
    },
    {
      title: 'Facets',
      url: '/facet',
      icon: 'pricetags'
    },
    {
      title: 'Areas',
      url: '/area',
      icon: 'globe'
    },
    {
      title: 'Chapter Locator',
      url: '/chapters',
      icon: 'pin'
    },
    {
      title: 'Calendar ',
      url: '/calendar',
      icon: 'calendar'
    },            
    {
      title: 'Social Media',
      url: '/social',
      icon: 'cloud'
    },
    {
      title: 'Donations',
      url: '/donation',
      icon: 'heart'
    },     
    {
      title: 'Vendors',
      url: '/vendor',
      icon: 'card'
    },       
    {
      title: 'FAQ ',
      url: '/fag-visitor',
      icon: 'help-circle-outline'
    }, 
    {
      title: 'Contact',
      url: '/contact',
      icon: 'call'
    },
    {
      title: 'Member Login',
      url: '/login',
      icon: 'person'
    }    
  ];
  public appPages_member = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'President’s Message',
      url: '/president',
      icon: 'microphone'
    },
    {
      title: 'Leadership',
      url: '/leadership',
      icon: 'contact'
    },
    {
      title: 'Areas',
      url: '/area',
      icon: 'globe'
    },
    {
      title: 'Chapter Locator ',
      url: '/chapters',
      icon: 'pin'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'calendar'
    },
    {
      title: 'Social Media',
      url: '/social',
      icon: 'cloud'
    },
    {
      title: 'Donations',
      url: '/donation',
      icon: 'gift'
    },
    {
      title: 'FAQs ',
      url: '/fag-member',
      icon: 'help-circle-outline'
    },            
    {
      title: 'Contacts',
      url: '/contact',
      icon: 'call'
    },
    {
      title: 'My Profile',
      url: '/login',
      icon: 'gift'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.menu.enable(false, 'visitor');
    this.menu.enable(false, 'member');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
        this.splashScreen.hide();
    //  this.splashScreen.hide();
    });
  }
}
