import { Component, OnInit } from '@angular/core';
import { TestFetchService } from './test-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  constructor(private testFetchService: TestFetchService){}

  data: any;
  
  ngOnInit() {
    this.testFetchService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
