import { Injectable,OnInit } from '@angular/core';
import { Profile } from 'app/list';
@Injectable()
export class DataService  {

  constructor() { }
  Arraylist: any[] = [];
  /** Add list in the array List. */
  addList(arrayListDetail: any) {
    this.Arraylist.unshift(arrayListDetail);
  }
  /**Get the list list from the array. */
  getList(): any[] {
    return this.Arraylist;
  }
 
  
 
}
