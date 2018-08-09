import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KneePrescriptionComponent } from './components/knee-prescription/knee-prescription.component';
import { ShoulderPrescriptionComponent } from './components/shoulder-prescription/shoulder-prescription.component';

const routes: Routes = [
  { path : '', component : KneePrescriptionComponent},
  { path : 'shoulder', component : ShoulderPrescriptionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    KneePrescriptionComponent,
    ShoulderPrescriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
