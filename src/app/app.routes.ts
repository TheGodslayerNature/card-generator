import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: "", component: AppComponent},
    {path: "form", loadComponent: () =>  import("./components/form/form.component").then(m => m.FormComponent)},
    {path: "card", loadComponent: () =>  import("./components/card/card.component").then(m => m.CardComponent)},
    {path: "create", loadComponent: () => import("./components/card-creator/card-creator.component").then(m => m.CardCreatorComponent)}
];
