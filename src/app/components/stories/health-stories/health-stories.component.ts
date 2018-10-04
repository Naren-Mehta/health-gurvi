import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-stories',
  templateUrl: './health-stories.component.html',
  styleUrls: ['./health-stories.component.css']
})
export class HealthStoriesComponent implements OnInit {

  fitnessBlogs=[
    {
      id:1,
      title:"How a Rock Climbing Trip Taught Me How to Trust",
      category:"fitness",
      summary:"So there I was—about three-quarters of the way up a 100-foot rock formation in California’s Joshua Tree National Park. I was tired. But more than that, I was pissed off that this one section, which I dubbed “the Crack,” was giving me so much trouble. Below, my crew of strong women was cheering me on. Above me, Savannah Cummins, an adventure photographer and expert climber, was balancing on a rope like a ninja. She was offering me tips while capturing my every move, but with fatigue and frustration setting in, it sounded more like Charlie Brown’s teacher—“whaa-whaa-whaa.”"
    },

    {
      id:2,
      title:"Relex your mind",
      category:"yoga",
      summary:"California’s Joshua Tree National Park. I was tired. But more than that, I was pissed off that this one section, which I dubbed “the Crack,” was giving me so much trouble. Below, my crew of strong women was cheering me on. Above me, Savannah Cummins, an adventure photographer and expert climber, was balancing on a rope like a ninja. She was offering me tips while capturing my every move, but with fatigue and frustration setting in, it sounded more like Charlie Brown’s teacher—“whaa-whaa-whaa.”"
    },

    {
      id:3,
      title:"Build your musculs",
      category:"gym",
      summary:"But more than that, I was pissed off that this one section, which I dubbed “the Crack,” was giving me so much trouble. Below, my crew of strong women was cheering me on. Above me, Savannah Cummins, an adventure photographer and expert climber, was balancing on a rope like a ninja. She was offering me tips while capturing my every move, but with fatigue and frustration setting in, it sounded more like Charlie Brown’s teacher—“whaa-whaa-whaa.”"
    }


  ]

  constructor() { }

  ngOnInit() {
  }

}
