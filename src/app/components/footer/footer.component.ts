import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  edmund: string = "Sunguk (Edmund) Ham, A00979841";
  nirajan: string = "Nirajan Manandhar, A0";

  constructor() { }

  ngOnInit() {
  }

}
