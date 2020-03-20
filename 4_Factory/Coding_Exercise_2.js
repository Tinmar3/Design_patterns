{
  /* 
You are given a class called Person. The person has two fields: id, and name<.</p>
Please implement a PersonFactory that has a non-static createPerson() method that takes a person's name and returns a person initialized with this name and an id.
The id of the person should be set as a 0-based index of the object any instance of PersonFactory has created. So, the first person any factory makes should have Id=0, second Id=1 and so on.
*/
}

class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// class PersonFactory {
//   createPerson(name) {
//     PersonFactory.lastId =
//       PersonFactory.lastId >= 0 ? PersonFactory.lastId + 1 : 0;
//     return new Person(PersonFactory.lastId, name);
//   }
// }

class PersonFactory {
  createPerson(name) {
    return new Person(PersonFactory.id++, name);
  }
}
PersonFactory.id = 0;

let pf1 = new PersonFactory();
console.log(pf1.createPerson("ivan"));
console.log(pf1.createPerson("pero"));
console.log(pf1.createPerson("jovo"));
console.log(pf1.createPerson("krsto"));

let pf2 = new PersonFactory();
console.log(pf2.createPerson("šemso"));
console.log(pf2.createPerson("mustafa"));
