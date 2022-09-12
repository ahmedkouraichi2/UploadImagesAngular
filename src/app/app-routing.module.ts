import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';
const routes: Routes = [
 {path :'', redirectTo:'ajout',pathMatch:'full'},
 {path:"ajout",component:AjoutComponent},
 {path:"list",component:ListComponent},
  {path:"**",component:PageNotFoundComponent},
  {path:"update/:id",component:UpdateHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
