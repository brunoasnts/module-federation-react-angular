import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";

import * as React from "react";
import { createRoot } from "react-dom/client";

@Component({
  standalone: true,
  selector: "app-home",
  template: `
    <div style="margin: 4rem;">
      <h2 style="font-size: 2rem; text-align: center; margin-bottom: 5rem;">Home (Consuming from React remote)</h2>
      <div #containerElementName></div>
    </div>
  `,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('containerElementName', { static: true }) containerRef!: ElementRef;
  root!: any;

  async ngAfterViewInit() {
    this.renderSystems();
    // const { Button } = await import("reactAppCra/Button");
    // const buttons = [React.createElement(Button), React.createElement(Button)];
    // const parent = React.createElement('div', {}, ...buttons);
    // this.root.render(parent);
  }

  async renderSystems() {
    this.root = createRoot(this.containerRef.nativeElement);
    const { Systems } = await import("reactAppCra/Systems");
    const systems = [
      React.createElement(Systems, { systemType: 'OK' }),
      React.createElement(Systems, { systemType: 'Warning', onClick: () => console.log('Warning clicked') }),
      React.createElement(Systems, { systemType: 'Error' }),
      React.createElement(Systems, { systemType: 'Critical' }),
      React.createElement(Systems, { systemType: 'Offline' }),
    ];
    const parent = React.createElement('div', { style: { display: 'flex', gap: '2rem', justifyContent: 'center' } }, ...systems);
    // this.root.render(React.createElement(Systems, { systemType: 'OK' }));
    this.root.render(parent);
  }

  ngOnDestroy() {
    this.root.unmountComponentAtNode(this.containerRef.nativeElement);
  }
}
