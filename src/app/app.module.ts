import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeModule} from './features/home/home.module';
import {HeaderModule} from './shared/modules/header/header.module';
import {HttpModule} from '@angular/http';
import {FooterModule} from './shared/modules/footer/footer.module';
import {ResumeModule} from './shared/modules/resume/resume.module';
import {ContactModule} from './shared/modules/contact/contact.module';
import {SkillModule} from './shared/modules/skill/skill.module';
import {StudyModule} from './shared/modules/study/study.module';
import {AboutModule} from './shared/modules/about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    ResumeModule,
    ContactModule,
    AboutModule,
    SkillModule,
    StudyModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
