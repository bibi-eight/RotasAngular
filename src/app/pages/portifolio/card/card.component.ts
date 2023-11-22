import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //http://localhost:4200/portfolio/{1}
  constructor(private activeRoute: ActivatedRoute)
  {
    this.activeRoute.params.subscribe(res => console.log(res))
  

  //http:localhost:4200/portfolio/1?{name=brenda&token=123}
    this.activeRoute.queryParams.subscribe(res => console.log(res))

  }
  ngOnInit(): void {
  }

}
