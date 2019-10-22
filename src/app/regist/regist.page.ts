import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {

  userProfile: any;

  constructor(public  router: Router, private http: HttpClient, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.myProfile();
  }
  onClick(){
    this.router.navigateByUrl('card');    

  }
    myProfile() {
      let userid = localStorage.getItem("u_id");
      var link = 'http://mobileapp.linksincdb.org/index.php';
      var u_id = localStorage.getItem('u_id');
      var myData = JSON.stringify({u_id: u_id});
      
      this.http.post(link, myData)
        .subscribe(data =>  {
            this.userProfile = data;
           console.log(JSON.stringify(this.userProfile));
            //this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
          }, error => {
            console.log("Oooops!");
          });
    }

    openMemberCard() {

        let navigationExtras: NavigationExtras = {
            state: {
                FIRST_NAME: this.userProfile[0].FIRST_NAME,
                LAST_NAME: this.userProfile[0].LAST_NAME,
                ID: this.userProfile[0].ID,
                D_INDUCTION_YEAR: this.userProfile[0].D_INDUCTION_YEAR

            }
        };
        this.router.navigate(['card'], navigationExtras);
    }

    openMemberSearch() {
      this.router.navigate(['search']);
  }
}
