import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DevExtremeModule, DxButtonModule, DxTemplateHost } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DevExtremeModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projectAndroid';
}
