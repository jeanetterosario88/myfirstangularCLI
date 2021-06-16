import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styles: [`
    h1 {
      color: green;
    }
    `]
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}