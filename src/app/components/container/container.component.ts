import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  type1!:string
  getData(e: string){
    this.type1 = e
    // console.log(this.type1);
    
  }

  ngOnInit(): void {
  }

}
