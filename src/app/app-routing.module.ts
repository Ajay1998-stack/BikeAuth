import { InvoiceComponent } from './invoice/invoice.component';
import { RoutingComponent } from './routing/routing.component';
import { BikeFormComponent } from './bike-form/bike-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MapStationsComponent } from './map-stations/map-stations.component';
import { MapNavigationComponent } from './map-navigation/map-navigation.component';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './auth-service/auth-gaurd.service';


const routes: Routes = [
  { path: '', redirectTo: '/user-form', pathMatch: 'full' },
  // { path: 'map', component: MapComponent,canActivate:[AuthGaurdService]},
  // { path: 'map-navigation/:coordinate1/:coordinate2', component: MapNavigationComponent,canActivate:[AuthGaurdService]},
  // { path: 'routing/:coordinate1/:coordinate2', component: RoutingComponent,canActivate:[AuthGaurdService]},
  // { path: 'invoice/:invoiceObj', component: InvoiceComponent, canActivate:[AuthGaurdService]},
  { path: 'map', component: MapComponent},
  { path: 'map-navigation/:coordinate1/:coordinate2', component: MapNavigationComponent},
  { path: 'routing/:coordinate1/:coordinate2', component: RoutingComponent},
  { path: 'invoice/:invoiceObj', component: InvoiceComponent },
  { path: 'map-stations', component: MapStationsComponent},
  { path: 'user-form', component: UserFormComponent},
  { path: 'bike-form', component: BikeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MapComponent, MapNavigationComponent, MapStationsComponent, 
  UserFormComponent, BikeFormComponent, RoutingComponent, InvoiceComponent]
