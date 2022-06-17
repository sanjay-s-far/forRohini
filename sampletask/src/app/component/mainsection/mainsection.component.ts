import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css']
})
export class MainsectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter(i: number) {
    return new Array(i + 1);
}

}
