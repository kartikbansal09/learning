import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
   @track name='kartik'
    nameval(event){
        this.name=event.target.value;
    }
}