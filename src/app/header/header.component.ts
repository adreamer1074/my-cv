import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  name = '';
  title = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCVData().subscribe(data => {
      this.name = data.name;
      this.title = data.title;
    });
  }
}
