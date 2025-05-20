import { LitElement, html, css, property } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../styles/tailwind.css';
import '../styles/theme.scss';

@customElement('v-button')
export class Button extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: Boolean }) disabled = false;

  static styles = [
    css`
      :host {
        display: inline-block;
      }
      button {
        @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
        border: none;
        cursor: pointer;
      }
      button:disabled {
        @apply bg-gray-400 cursor-not-allowed;
      }
    `
  ];

  render() {
    return html`
      <button ?disabled=${this.disabled} aria-label=${this.label}>
        <slot></slot>
      </button>
    `;
  }
}
