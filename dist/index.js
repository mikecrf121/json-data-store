"use strict";
console.log('Application Starting...');
const fs = require('fs');
// first step read entire data store into memory, so this entire object we use
const inMemoryPeopleDataStore = require('./people-data-store/people.json');
console.log('Before adding person to people array', inMemoryPeopleDataStore);
// next use post request body to create and add new person to people array
// based on the body params from the post request make the following object
const mikePerson = {
    firstName: 'Mike2',
    lastName: 'Cass2',
    age: 29,
};
console.log(inMemoryPeopleDataStore.peoples[0]);
inMemoryPeopleDataStore.peoples.push(mikePerson);
fs.writeFile('./people-data-store/people.json', JSON.stringify(inMemoryPeopleDataStore), (err) => {
    if (err) {
        console.log('error happened', err);
    }
    console.log('Data written to file');
});
const peopleDataStoreAfterWrite = require('./people-data-store/people.json');
console.log('This is after the write call', peopleDataStoreAfterWrite);
/**
 *  Create simple UI with form to add people to the people.json file
 *  1. form will have inputs for first name, last name, age, car
 *  2. create an express server with endpoints (CRUD) for:
 *     + (Create) post to create new person from form
 *     + (Read) getting all people
 *     + (Update) put endpoint for updating a person
 *     + (Delete) delete endpoint for deleting people
 **/
