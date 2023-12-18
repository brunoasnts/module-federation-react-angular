import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loadRemoteModule } from './utils/federation-utils';

export function initializeApp(): () => void {
  return () => {
    loadRemoteModule({
      remoteEntry: "http://localhost:3000/remoteEntry.js",
      remoteName: "reactAppCra",
      exposedModule: "./Button",
    });
    loadRemoteModule({
      remoteEntry: "http://localhost:3000/remoteEntry.js",
      remoteName: "reactAppCra",
      exposedModule: "./Systems",
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
   providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, // Added for custom elements support
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
