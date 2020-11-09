import { LightningElement } from 'lwc';
export default class Hello extends LightningElement {
  greeting = 'Jane Doe';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}