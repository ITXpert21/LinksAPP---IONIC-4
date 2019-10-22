import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {AuthenticationService} from "../services/authentication/authentication.service"
import { first, map } from 'rxjs/operators';
import { Headers , RequestOptions } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string;
  public password: string;
  loading: boolean = false;
  failed: boolean = false;
  constructor(public  router:  Router, private http: HttpClient, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigateByUrl('signup');    
  }

  inputUsername(){
    this.failed = false;
  }
  
  inutPwd(){
    this.failed = false;
  }  
  Login(){
    this.loading = true;


    if(this.username == "" || this.password == "" || this.password.length < 6){
      this.failed = true;
      this.loading = false;
      return;
    }
    var link = 'http://mobileapp.linksincdb.org/login.php';
    var myData = JSON.stringify({username: this.username, password:this.password});
    // var myData = JSON.stringify({username: 'testmartha', password: '122033'});

    this.http.post(link, myData)
      .subscribe(data =>  {
         if(data == true){   //login success
          var strFirstPwd = this.password.substr(0,1);
          if(strFirstPwd == "0"){
            this.password = this.password.substr(1, this.password.length)
          }
          
          localStorage.setItem("u_id", this.password);
          this.loading = false;
          this.router.navigateByUrl('regist');
         }else{
          this.loading = false;
          this.failed = true;
         }
        }, error => {
          console.log("Oooops!");
         
        });



  //this.router.navigateByUrl('regist');    

  }

}
