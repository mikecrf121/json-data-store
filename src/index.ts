console.log('Application Starting...');
const fs = require('fs');
type PersonDataStore = {
  peoples: [{ firstName: string; lastName: string; age: number }];
};
// first step read entire data store into memory, so this entire object we use
const inMemoryPeopleDataStore: PersonDataStore = require('./people-data-store/people.json');

console.log('Before adding person to people array', inMemoryPeopleDataStore);

// next use post request body to create and add new person to people array
// based on the body params from the post request make the following object
const mikePerson = {
  firstName: 'Mike2', // <--in the real app your gonna do req.body.firstName
  lastName: 'Cass2',
  age: 29,
};

console.log(inMemoryPeopleDataStore.peoples[0]);

inMemoryPeopleDataStore.peoples.push(mikePerson);

fs.writeFile('./people-data-store/people.json');

const peopleDataStoreAfterWrite: PersonDataStore = require('./people-data-store/people.json');
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
