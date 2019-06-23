import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatCardModule, MatSlideToggleModule } from  '@angular/material';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { appRoutes } from './routes/routes'
import { AppComponent } from './app.component';
import { TabledataComponent } from './components/tabledata/tabledata.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopicService } from './services/topics/topic.service';
import { TopicInfoComponent } from './containers/topic-info/topic-info.component';
import { PageNotFoundComponent } from './routes/components/page-not-found/page-not-found.component';
import { TopicsComponent } from './containers/topics/topics.component';
import { JsonPipe } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader/loader.service';
import { LoaderInterceptor } from './interceptors/loader/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TabledataComponent,
    TopicsComponent,
    TopicInfoComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatSlideToggleModule,
    RouterModule.forRoot(
      appRoutes, {useHash: true}
    ),
  ],
  providers: [
    JsonPipe,
    TopicService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
