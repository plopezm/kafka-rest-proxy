import { Routes } from '@angular/router'

import { TopicInfoComponent } from '../containers/topic-info/topic-info.component';
import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopicsComponent } from '../containers/topics/topics.component';

export const appRoutes: Routes = [
    {
        path: 'topics',
        component: TopicsComponent,
    },
    {   
        path: 'topics/:id',      
        component: TopicInfoComponent 
    },
    { 
        path: '',
        redirectTo: '/topics',
        pathMatch: 'full'
    },
    { 
        path: '**', component: PageNotFoundComponent 
    }
  ];