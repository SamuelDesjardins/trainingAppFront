import { Component } from '@angular/core';
import { TestFetchService } from './test-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private testFetchService: TestFetchService){}

  stringTest = this.testFetchService.getData()
}
