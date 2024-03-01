import { LightningElement ,wire} from 'lwc';
import getCon from '@salesforce/apex/contactDataHandler.contacts'

export default class WireJest extends LightningElement {
   @wire(getCon)
   contact

   renderedCallback(){
    if(this.contact && this.contact.data){
        console.log(JSON.stringify(this.contact.data));
    }

   }
}