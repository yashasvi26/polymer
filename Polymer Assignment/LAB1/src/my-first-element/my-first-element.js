import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class MyFirstElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
     
       <form name="myform">
      <table>
      <tr>
      <td>
     ID</td><td><input type= "number" name="id" value={{prop1::input}}></td></tr>
      <tr>
      <td>
      Name</td><td><input type= "text" name="name" value={{prop2::input}}></td></tr>
      <tr>
      <td>
      Salary</td><td><input type= "number" name="salary" value={{prop3::input}}></td></tr>
      <tr>
      <td>
      Department</td><td><input type= "text" name="dept" value={{prop4::input}}></td></tr>
      
    
      </table>
      <input type="button" value="Add Employee" on-click="myfunc">
      </form>
  
      <h2>[[prop1]] [[prop2]] [[prop3]] [[prop4]]</h2>
    `;
  }
  static get properties() {
    return {
     prop1:Number,
      prop2:String,
      prop3:Number,
      prop4:String,
     };
  }
  myfunc(){
    var id=this.prop1;
    var name=this.prop2;
    var sal=this.prop3;
    var dept=this.prop4;
    alert(id+" "+name+" "+sal+" "+dept);

  }
}

window.customElements.define('my-first-element', MyFirstElement);
