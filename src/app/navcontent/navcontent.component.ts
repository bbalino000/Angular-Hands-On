import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navcontent',
  templateUrl: './navcontent.component.html',
  styleUrls: ['./navcontent.component.css']
})
export class NavcontentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navOptions = [
  	"General Info",
  	"Coverage Details",
  	"Quote Option",
  	"Attachment",
  	"Print",
  	"Exit"
  ];
}
