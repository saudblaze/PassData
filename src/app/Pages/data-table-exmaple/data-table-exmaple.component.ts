import { Component, OnInit } from '@angular/core';
import { Employee, Manager, ProjectManager } from 'src/app/Model/viewModels';



@Component({
  selector: 'app-data-table-exmaple',
  templateUrl: './data-table-exmaple.component.html',
  styleUrls: ['./data-table-exmaple.component.css']
})

export class DataTableExmapleComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  
  

  ProjectManagerDetailsColumn = ["id", "name"];
  ProjectManagerDetails : ProjectManager[] = [
    {
      id:1,
      name:"Niju"        
    },
    {
      id:2,
      name:"ATIF"        
    },
  ];

  ManagerDetailsColumn = ["id", "name"];
  ManagerDetails : Manager[] = [
    {
      id:1,
      name:"Shakir"        
    },
    {
      id:2,
      name:"Jacob"        
    },
  ];

  EmployeeDetailsColumn = ["id", "name","email"];
  EmployeeDetails : Employee[] = [
    {
      id:1,
      name:"saud" ,
      email:"saud@gmail.com"       
    },
    {
      id:2,
      name:"jalees" ,
      email:"jalees@gmail.com"       
    },
  ];


  constructor() { }

  

  

  ngOnInit(): void {

  }

}

// export class PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
