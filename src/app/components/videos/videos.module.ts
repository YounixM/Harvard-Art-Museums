import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import { VideosComponent } from './videos.component';
import { routing } from './videos.routing';

@NgModule({
  imports: [routing, CommonModule],
  declarations: [VideosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VideosModule{
    
}
