import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  template: `
    <h2 class="text-2xl font-bold">スキル</h2>
    <ul>
      <li *ngFor="let skill of skills" class="mb-2">
        {{ skill.name }} - {{ skill.level }}
      </li>
    </ul>
  `
})
export class SkillsComponent implements OnInit {
  skills: { name: string; level: string }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCVData().subscribe(data => {
      this.skills = data.skills;
    });
  }
}
