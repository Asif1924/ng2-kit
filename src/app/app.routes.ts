import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoggedInGuard } from './app-services/logged-in.guard';

//application components
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { AuthenticationComponent } from './authentication';
import { NoContentComponent } from './404';

const appRoutes: Routes = [
    { path: 'authentication',     component: AuthenticationComponent },
    { path: '',                   component: HomeComponent,             canActivate: [LoggedInGuard] },
    { path: 'about',              component: AboutComponent,            canActivate: [LoggedInGuard] },
    { path: '**',                 component: NoContentComponent,        canActivate: [LoggedInGuard] },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules });