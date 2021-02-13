import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees=[
    {
      code : '00001',
      name:'Ishanka',
      gender: 'Female',
      age:'25',
      dob:'1996/02/11'
    },
    {
      code : '00002',
      name:'Test',
      gender: 'Test',
      age:'20',
      dob:'1993/01/10'
    }
  ]
  // employees:any;

  constructor(private commonService : CommonService, private router : Router) { }

  ngOnInit() {
    this.commonService.getEmployees().subscribe(data=>{
      // this.employees =data;
      console.log('users===>',data);
    });
  }

  addEmployee(){

    this.router.navigate(['/add-employee']);

  }

  edit(){

    this.router.navigate(['/edit-employee']);

  }

  view(){

  }

  delete(code : any){

    this.commonService.deleteEmployee(code);
    alert('Delete employee clicked');
    
  }

}
