import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'SpiderMan',
    'Iroman',
    'Hulk',
    'She Hulk',
    'Capitan America',
  ];

  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
