import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }

  employees=[
    {
      name:'Ishanka',
      age:''
    }
  ]

  getEmployees(){

   return this.http.get('http://dev.cosmos.codelabs.lk:8081/cosmos/inventory/activecustomer');

  }

  createEmployee(employee : any){

    console.log('create Employee',employee);
  }

  updateEmployee(employee : any){
    console.log('update Employee',employee);
  }

  deleteEmployee(employeeCode : any){

  }
}
