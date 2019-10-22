import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Port {
    public ChapterName: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  memebers: any;

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.http.get('http://mobileapp.linksincdb.org/search.php').subscribe(data => {
     // this.ports = data;
     this.memebers = data;
      console.log("chapters", this.memebers);
    });
  } 
}
