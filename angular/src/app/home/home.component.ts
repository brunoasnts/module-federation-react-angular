import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation } from "@angular/core";

import * as React from "react";
import { createRoot } from "react-dom/client";

const containerElementName = "customReactComponentContainer";

@Component({
  standalone: true,
  selector: "app-home",
  template: `
    <div>
      <h2 class="text-3xl">Home (React Microfrontend)</h2>
      <span #${containerElementName}></span>
    </div>
  `,
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
  root!: any;

  async ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);
    const { Systems } = await import("reactAppCra/Systems");
    this.root.render(React.createElement(Systems, { systemType: 'OK' }));
    // const { Button } = await import("reactAppCra/Button");
    // const buttons = [React.createElement(Button), React.createElement(Button)];
    // const parent = React.createElement('div', {}, ...buttons);
    // this.root.render(parent);
  }

  ngOnDestroy() {
    this.root.unmountComponentAtNode(this.containerRef.nativeElement);
  }
}
