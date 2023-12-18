import { Component } from "@angular/core";
import { HomeComponent } from "../home/home.component";

@Component({
  standalone: true,
  imports: [HomeComponent],
  selector: "app-layout",
  template: `
    <app-home></app-home>
  `,
})
export class LayoutComponent {}
