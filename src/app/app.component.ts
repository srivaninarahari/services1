import { Component ,  OnInit } from '@angular/core';
import { ListService } from 'app/service/list.service';
import {  DataService } from 'app/service/data.service';
import {  Profile } from 'app/list';
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {
  title: string;
  name: string;
  lastName: string;
  arrayList: any[] = [];

  constructor(private _listService: ListService,private _dataService: DataService ) { }



  submit(Name: string, LastName: string) {
    let model = {
      name: Name,
      lastName: LastName
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
     }
     submit1(Class: string) {
      let model1 = {
        class: Class,
    
      }
      this._dataService.addList(model1);
      this.arrayList = this._dataService.getList();
     
       }
       simpleItems: string[] = ['mr', 'mrs'];
       mySimpleModel: string = this.simpleItems[1];  
}
