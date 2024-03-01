import { LightningElement } from 'lwc';

export default class ConditonalRedderjest extends LightningElement {
    isvisible;
    handlechange(event){
        this.isvisible=event.target.checked;

    }   
}