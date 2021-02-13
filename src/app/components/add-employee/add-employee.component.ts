import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  employee={
    code:'',
    name:'',
    gender:'',
    age:'',
    dob:''
  }

  addEmployee(){
    this.commonService.createEmployee(this.employee);
  }

}
