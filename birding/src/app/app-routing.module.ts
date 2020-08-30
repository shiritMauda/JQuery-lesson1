import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { RegisterComponent } from './register/register.component';
import { AddBirdComponent } from './add-bird/add-bird.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { AddSpotComponent } from './add-spot/add-spot.component';



const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent , children: [

          { path: 'birdList', component: BirdListComponent },
          { path: 'addBird', component: AddBirdComponent },
          { path: 'addArea', component: AddAreaComponent },
          { path: 'addSpot', component: AddSpotComponent },
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
