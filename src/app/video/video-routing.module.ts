import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenageComponent } from './menage/menage.component';

const routes: Routes = [
  {
    path: 'manage',
    component: MenageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
