import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalisisComponent } from "./analisis/analisis.component";
import { CatalogosComponent } from "./catalogos/catalogos.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { SuspensionesComponent } from "./suspensiones/suspensiones.component";


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path:'', component: DashboardComponent },
            { path: 'suspensiones', component: SuspensionesComponent},
            { path: 'catalogos', component: CatalogosComponent },
            { path: 'analisis', component: AnalisisComponent },
        ]
    },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class PagesRoutingModule {}