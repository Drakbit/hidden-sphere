// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { HomeComponent } from './pages/home/home.component';
// import { FelorComponent } from './pages/deities/human-pantheon/felor/felor.component';


// const routes: Routes = [
// { path: 'home', component: HomeComponent},
// { path: '', redirectTo: '/home', pathMatch: 'full'},
// { path: 'felor', component: FelorComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FelorComponent } from './pages/deities/human-pantheon/felor/felor.component';
import { FougeresComponent } from './pages/families/fougeres/fougeres.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'felor', component: FelorComponent },
  { path: 'fougeres', component: FougeresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
