import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestFetchService {

  private data: string = "is a test :-)";
  
  constructor() { }

  getData(): string {
    return this.data;
  }
}
