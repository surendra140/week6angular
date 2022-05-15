import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { CompletebookComponent } from './completebook/completebook.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomenavComponent } from './homenav/homenav.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: 'Home',component:HomeComponent},
  {path: 'Login',component:LoginComponent},
  {path: 'Header',component:HeaderComponent},
  {path: 'Dashboard',component:DashboardComponent},
  {path: 'Homenav',component:HomenavComponent},
  {path: 'Allbook',component:AllbooksComponent},
  {path: 'Wishlist',component:WishlistComponent},
  {path: 'Completebook',component:CompletebookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent,HeaderComponent,DashboardComponent,HomenavComponent,AllbooksComponent,WishlistComponent,CompletebookComponent]