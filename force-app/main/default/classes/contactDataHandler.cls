public with sharing class contactDataHandler {
 
    @AuraEnabled(cacheable=true)
 
        public static List<Contact> contacts(){
            return [SELECT ID, Name From Contact];
            // System.debug('sdkjd');
        }

    
}