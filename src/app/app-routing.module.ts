import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "support",
        loadChildren: () =>
            new Promise(() => {
                if (window.location.href.match(/support/))
                    window.location.href = "https://www.buymeacoffee.com/czuar";
            }),
    },
    {
        path: "syedali",
        loadChildren: () =>
            new Promise(() => {
                if (window.location.href.match(/syedali/))
                    window.location.href = "https://syedali.vercel.app";
            }),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
