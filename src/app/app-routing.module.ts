import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'first', 
    loadChildren: './first/first.module#FirstPageModule' 
  },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'regist', loadChildren: './regist/regist.module#RegistPageModule' },
  { path: 'chapters', loadChildren: './chapters/chapters.module#ChaptersPageModule' },
  { path: 'donation', loadChildren: './donation/donation.module#DonationPageModule' },
  { path: 'area', loadChildren: './area/area.module#AreaPageModule' },
  { path: 'president', loadChildren: './president/president.module#PresidentPageModule' },
  { path: 'leadership', loadChildren: './leadership/leadership.module#LeadershipPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'social', loadChildren: './social/social.module#SocialPageModule' },
  { path: 'fag-member', loadChildren: './fag-member/fag-member.module#FagMemberPageModule' },
  { path: 'fag-visitor', loadChildren: './fag-visitor/fag-visitor.module#FagVisitorPageModule' },
  { path: 'facet', loadChildren: './facet/facet.module#FacetPageModule' },
  { path: 'detail-facet', loadChildren: './detail-facet/detail-facet.module#DetailFacetPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'staff-directory', loadChildren: './staff-directory/staff-directory.module#StaffDirectoryPageModule' },
  { path: 'founders', loadChildren: './founders/founders.module#FoundersPageModule' },
  { path: 'detail-area', loadChildren: './detail-area/detail-area.module#DetailAreaPageModule' },
  { path: 'detail-facet1', loadChildren: './detail-facet1/detail-facet1.module#DetailFacet1PageModule' },
  { path: 'detail-facet2', loadChildren: './detail-facet2/detail-facet2.module#DetailFacet2PageModule' },
  { path: 'detail-facet3', loadChildren: './detail-facet3/detail-facet3.module#DetailFacet3PageModule' },
  { path: 'detail-facet4', loadChildren: './detail-facet4/detail-facet4.module#DetailFacet4PageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
  { path: 'detail-area-eastern', loadChildren: './detail-area-eastern/detail-area-eastern.module#DetailAreaEasternPageModule' },
  { path: 'vendor', loadChildren: './vendor/vendor.module#VendorPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
