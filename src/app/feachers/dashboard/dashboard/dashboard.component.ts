import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormField,MatSelectModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  selectedMonth: any = new Date().getMonth()+1;
  selectedYear:any = new Date().getFullYear();
  monthList: any[] = [
    { id: 1, name: "January", },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" }
  ];
  yearList: number[] = [];
  dashboardModule: any[] = [
    {
      name:'Users',
      count:20,
    },
     {
      name:'Products',
      count:10,
    },
     {
      name:'Orders',
      count:30,
    }
  ]
  ngOnInit(){
    var yearCount = this.selectedYear-2020;
    console.log(this.selectedYear);
    for(let i = 0; i < yearCount ; i++){
      this.yearList.push(this.selectedYear-i);
    }
  }
  onMonthChange(){

  }
  onYearChange(){

  }
}
