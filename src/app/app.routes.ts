import {Routes} from '@angular/router';
import {AuthComponent} from './authentication/auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {KategorienComponent} from './category/kategorien/kategorien.component';
import {BenutzerlisteComponent} from './users/benutzerliste/benutzerliste.component';
import {AuthGuard} from './Guards/auth.guard';
import {ErstellungProdukteComponent} from './products/erstellung-produkte/erstellung-produkte.component';
import {ErstellungKategorieComponent} from './category/erstellung-kategorie/erstellung-kategorie.component';
import {BearbeitenProduktComponent} from './products/bearbeiten-produkt/bearbeiten-produkt.component';
import {BearbeitenKategorieComponent} from './category/bearbeiten-kategorie/bearbeiten-kategorie.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {AuthGuardAdmin} from './Guards/authadmin.guard';


export const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/edit/:id', component: BearbeitenProduktComponent, canActivate: [AuthGuardAdmin]},
  {path: 'kategorien', component: KategorienComponent},
  {path: 'kategorien/edit/:id', component: BearbeitenKategorieComponent, canActivate: [AuthGuardAdmin]},
  {path: 'benutzerliste', component: BenutzerlisteComponent, canActivate: [AuthGuardAdmin]},
  {path: 'erstellung-produkte', component: ErstellungProdukteComponent, canActivate: [AuthGuardAdmin]},
  {path: 'erstellung-kategorie', component: ErstellungKategorieComponent, canActivate: [AuthGuardAdmin]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'products/details/:id', component: ProductDetailsComponent},
  {path: '**', redirectTo: '/dashboard'},
];
