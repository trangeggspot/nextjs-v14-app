

import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('count-display')
export class CountDisplay extends LitElement {
  @property({type: Number})
  count = 0;
  render() {
    return html`<p>Count: ${this.count}</p>`;
  }
}
