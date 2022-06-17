import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainsectionComponent } from './component/mainsection/mainsection.component';
import { SecondSectionComponent } from './component/second-section/second-section.component';
import { ThirdsectionComponent } from './component/thirdsection/thirdsection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainsectionComponent,
    SecondSectionComponent,
    ThirdsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
