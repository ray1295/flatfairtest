import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  // styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  logoPath: string = '/assets/images/flatfair.png';
  
  constructor() { }

  ngOnInit() {
  }

}
