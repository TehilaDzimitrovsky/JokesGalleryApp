import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; 
import { DataserviceService } from './services/dataservice.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatCardModule } from '@angular/material/card';
import { JokeDetailsComponent } from './components/joke-details/joke-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    JokeDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    DataserviceService,
  ],
  exports:[RouterModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }