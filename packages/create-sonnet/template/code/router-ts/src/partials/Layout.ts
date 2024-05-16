import { $component, SonnetComponent } from '@sonnetjs/core';

class RootComponent extends SonnetComponent {
  public get() {
    return /*html*/ `
    <div>
      ${this.children()}
      this is new thing
    </div>
    `;
  }
}

export default $component(RootComponent);