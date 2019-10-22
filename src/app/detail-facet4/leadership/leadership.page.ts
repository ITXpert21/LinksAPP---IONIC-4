import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.page.html',
  styleUrls: ['./leadership.page.scss'],
})
export class LeadershipPage implements OnInit {
  data: string;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    if(this.data == 'visitor'){
      this.menu.enable(true, 'visitor');
    }
    if(this.data == 'member'){
      this.menu.enable(true, 'member');
    }

  }

}
