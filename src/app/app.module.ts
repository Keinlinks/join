import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { TriggerButtonModule } from './extras/trigger-button/trigger-button.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    TriggerButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
