import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailResolverService } from './email-resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';

// Child Routing concept
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'not-found', component: NotFoundComponent},
      { path: '', component: PlaceholderComponent},
      { path: ':id', component: EmailShowComponent, resolve: {
        email: EmailResolverService
      }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
