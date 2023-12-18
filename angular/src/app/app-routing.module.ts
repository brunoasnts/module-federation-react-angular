import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// In order to have eager component loading, we need to lazy load the components where federation is used.
const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./layout/layout.component").then((m) => m.LayoutComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
