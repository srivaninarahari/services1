import { Injectable } from '@angular/core';
import {LogService } from 'app/service/log.service';
@Injectable()
export class ListService {
  constructor(private logService: LogService) { }
  Arraylist: any[] = [];

  /** Add list in the array List. */
  addList(arrayListDetail: any) {
    this.Arraylist.unshift(arrayListDetail);
    let message= this.logService.log();
  }

  /**Get the list list from the array. */
  getList(): any[] {
    let message1= this.logService.retrive();
    return this.Arraylist;
  }

}
