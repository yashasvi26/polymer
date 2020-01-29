import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-first-application`
 * my-first-element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyFirstApplication extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <form name="myform">
      <input type="text" name="txt">

      <input type="button" value="press" onclick="far()">
      </form>
      <script>
      function far()
      {
       alert(document.myform.elements["txt"].value);
      }
       </script>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-first-application',
      },
    };
  }
}

window.customElements.define('my-first-application', MyFirstApplication);
