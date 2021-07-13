import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldCovidDetailsComponent } from './components/world-covid-details/world-covid-details.component';

const routes: Routes = [
  {path:'',
component:WorldCovidDetailsComponent
},
{path:'search/:country',
component:WorldCovidDetailsComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
