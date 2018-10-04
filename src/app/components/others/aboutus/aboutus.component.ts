import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  employList=[
    {
      id:1,
      name:"Narendra Mehta",
      designation : "CEO & Founder",
      summary:"Always look forword to learn new technologies"
    },
    {
      id:2,
      name:"Deepak Kasgar",
      designation : "Project Manager",
      summary:"Love to solve technical chanlenges"
    },
    {
      id:3,
      name:"Prema",
      designation : "UI Lead",
      summary:"You just imagin, I will make it visible"
    },
    {
      id:4,
      name:"Narendra Mehta",
      designation : "CEO & Founder",
      summary:"Always look forword to learn new technologies"
    },
    {
      id:5,
      name:"Deepak Kasgar",
      designation : "Project Manager",
      summary:"Love to solve technical chanlenges"
    },
    {
      id:6,
      name:"Prema",
      designation : "UI Lead",
      summary:"You just imagin, I will make it visible"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
