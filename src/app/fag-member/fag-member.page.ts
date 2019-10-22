import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fag-member',
  templateUrl: './fag-member.page.html',
  styleUrls: ['./fag-member.page.scss'],
})
export class FagMemberPage implements OnInit {
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
