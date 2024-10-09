// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{ title }}</h1>',  
  standalone : true,
})
export class AppComponent {
  title = 'SCORE';
}
