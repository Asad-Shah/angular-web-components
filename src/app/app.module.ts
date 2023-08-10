import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    GreetingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(GreetingComponent);
    const customElement = createCustomElement(GreetingComponent, { injector: this.injector });
    if (!customElements.get('hello-greeting')) {
      customElements.define('hello-greeting', customElement);
      console.log('Custom element bootstrapped')
    }
  }
}
