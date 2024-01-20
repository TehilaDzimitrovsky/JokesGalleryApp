import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] }
  ];