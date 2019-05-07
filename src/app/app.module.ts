import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterContainerComponent } from './components/register-container/register-container.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './match-directive.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormContainerComponent,
    FormListComponent,
    RegisterComponent,
    RegisterContainerComponent,
    NotFoundComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
