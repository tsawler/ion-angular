import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'servers', pathMatch: 'full'},
    {
        path: 'servers',
        children: [
            {
                path: '',
                loadChildren: () => import('./servers/servers.module').then(m => m.ServersPageModule),
            },
            {
                path: ':hostID',
                loadChildren: () => import('./servers/host/host.module').then(m => m.HostPageModule)
            }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
