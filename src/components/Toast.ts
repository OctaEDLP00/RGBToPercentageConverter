import rawStyles from './Toast.css?raw'
import copy from '../assets/copy.svg?raw'

type Position =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'

type Attributes = 'position' | 'message'

export class HTMLToastElement extends HTMLElement {
  message: string | '' = ''
  position: Position | '' = ''

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  /**
   * @return {Array<Attributes>}
   */
  static get observedAttributes(): Array<Attributes> {
    return ['position', 'message']
  }

  static get styles() {
    return rawStyles
  }

  connectedCallback() {
    this.message = this.getAttribute('message') || ''
    this.position = this.getAttribute('position') as Position
    this.render()
    this.setPosition()
  }

  /**
   * @param name
   * @param oldValue
   * @param newValue
   * @return {void}
   */
  attributeChangedCallback(name: Attributes, oldValue: string, newValue: string): void {
    if (oldValue === newValue) return

    switch (name) {
      case 'position':
        this.position = newValue as Position
        this.setPosition()
        break
      case 'message':
        this.message = newValue
        this.render()
        this.setPosition()
        break
    }
  }

  setPosition() {
    const host = this.shadowRoot!.host as HTMLElement

    const positions = {
      'top-left': { top: '1rem', left: '1rem' },
      'top-center': { top: '1rem', left: '50%', transform: 'translateX(-50%)' },
      'top-right': { top: '1rem', right: '1rem' },
      'bottom-left': { bottom: '0.75rem', left: '0.50rem' },
      'bottom-center': { bottom: '1rem', left: '50%', transform: 'translateX(-50%)' },
      'bottom-right': { bottom: '0.75rem', right: '2.5rem' },
    } as const

    // Limpiar estilos anteriores
    host.style.top = ''
    host.style.bottom = ''
    host.style.left = ''
    host.style.right = ''
    host.style.transform = ''

    const pos = positions[this.position as Position]
    if (!pos) return

    Object.entries(pos).forEach(([key, value]) => {
      host.style[key as any] = value
    })
  }

  render() {
    this.shadowRoot!.innerHTML = /* html */ `
    <style>${HTMLToastElement.styles}</style>
    <div id="toast-default" class="toast" role="alert">
      <div class="toast-icon">
        ${copy}
        <span class="sr-only">Copy icon</span>
      </div>
      <div class="toast-message">${this.message}</div>
    </div>
    `
  }
}

customElements.define('toast-wc', HTMLToastElement)

declare global {
  interface HTMLElementTagNameMap {
    'toast-wc': HTMLToastElement
  }

  namespace JSX {
    interface IntrinsicElements {
      /**
       * Web component para mostrar atajos de teclado según el sistema operativo.
       *
       * @example <os-key-shortcut keys="ctrl+shift+t" />
       */
      'toast-wc': {
        position: Position
        message: string
      }
    }
  }
}
