import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";

import * as React from "react";
import { createRoot } from "react-dom/client";

@Component({
  standalone: true,
  selector: "app-home",
  template: `
    <div style="display: flex; flex-direction: column; gap: 5rem; margin: 4rem;">
      <h2 style="font-size: 2rem; text-align: center; margin-bottom: 5rem;">Home (Consuming from React remote)</h2>
      <div #systemsContainer></div>
      <div style="display: flex; justify-content: center" #buttonContainer></div>
    </div>
  `,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('systemsContainer', { static: true }) systemsContainerRef!: ElementRef;
  @ViewChild('buttonContainer', { static: true }) buttonContainerRef!: ElementRef;
  rootSystems!: any;
  rootButton!: any;

  async ngAfterViewInit() {
    this.renderSystems();
    this.renderButton();
  }

  async renderSystems() {
    this.rootSystems = createRoot(this.systemsContainerRef.nativeElement);
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
    this.rootSystems.render(parent);
  }

  async renderButton() {
    this.rootButton = createRoot(this.buttonContainerRef.nativeElement);
    const { Button } = await import("reactAppCra/Button");
    this.rootButton.render(React.createElement(Button, { systemType: 'OK' }));
  }

  ngOnDestroy() {
    this.rootSystems.unmountComponentAtNode(this.systemsContainerRef.nativeElement);
    this.rootButton.unmountComponentAtNode(this.buttonContainerRef.nativeElement);
  }
}
