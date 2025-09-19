import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { DxoChartLoadingIndicatorComponent } from 'devextreme-angular/ui/chart/nested';
import { ClientComponent }from '../app/client/client.component'
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
 { path: 'client', component: ClientComponent },
 { path: 'login', component: LoginComponent },
];