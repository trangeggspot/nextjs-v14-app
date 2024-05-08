import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './count-display';

@customElement('simple-greeter')
export class SimpleGreeter extends LitElement {
  static styles = css`
    div {
      border: 1px solid black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (prefers-color-scheme: dark) {
      div {
        border-color: white;
      }
    }

    span {
      color: rebeccapurple;
    }

    p {
      font-family: sans-serif;
    }
  `;

  @property()
  name = 'Somebody';

  @property({type: Number})
  count = 0;

  increaseCount() {
    this.count++;
    console.log("-------------increaseCount------------");
  }

  constructor() {
    super();
    console.log("------------constructor-------------");
  }

  render() {
    return html`
      <div>
        <h1>Hello, <span>${this.name}</span>!</h1>
        <count-display .count=${this.count}></count-display>
        <button @click=${this.increaseCount}>++</button>
      </div>
    `;
  }
}


