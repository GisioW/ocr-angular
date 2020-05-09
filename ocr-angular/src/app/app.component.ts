import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Post';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consecterur adipsiscing elit, send do eusmod tempor',
      loveIts: 1,
      created_at: new Date(),
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consecterur adipsiscing elit, send do eusmod tempor',
      loveIts: -1,
      created_at: new Date(),
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consecterur adipsiscing elit, send do eusmod tempor',
      loveIts: 0,
      created_at: new Date(),
    }
    ];

  constructor() {
  }

}
