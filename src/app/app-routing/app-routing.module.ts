import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormContainerComponent } from '../components/form-container/form-container.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { RegisterContainerComponent } from '../components/register-container/register-container.component';

const routes: Routes = [
  {path: '', component: FormContainerComponent},
  {path: 'register', component: RegisterContainerComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }


