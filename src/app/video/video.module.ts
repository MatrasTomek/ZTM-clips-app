import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { MenageComponent } from './menage/menage.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    MenageComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
