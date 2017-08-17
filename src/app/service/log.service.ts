import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  /** Add list in the array List. */
  log(){
    console.log("adding");
  }
   
  
  /**Get the list list from the array. */
  retrive(){
    console.log("retrive");
  }
}
