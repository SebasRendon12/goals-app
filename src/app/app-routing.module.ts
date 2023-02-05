import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { InitializerService } from './services/initializer/initializer.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [InitializerService],
      multi: true,
    },
  ],
})
export class AppRoutingModule {}

export function initializeApp(initializer: InitializerService) {
  return (): Promise<void> => {
    return initializer.init();
  };
}
