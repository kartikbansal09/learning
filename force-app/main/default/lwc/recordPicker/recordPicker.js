import { LightningElement } from 'lwc';

export default class RecordPicker extends LightningElement {
    id;
    id2;
    email;
    handleAccountChange(event){
this.id=event.detail.recordId;
this.email=event.detail.Email;
console.log('Email: ' ,event.detail.RecordEmail );

    }
    matchingInfo ={
        primaryField:{fieldPath:'Name'},
        additionalFields:[{fieldPath:'Phone'}]
    }

    displayField={
        additionalFields:['Phone']
    }
    filter={
            criteria:[{
                fieldPath: 'Account.Name',
                operator: 'like',
                value: '%kartik%',
            }]
    }

    handleChange(event){
        this.id2=event.detail.recordId;
        
            }
        
}