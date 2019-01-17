interface Person {
  name: string;
}

function makePerson(name: string) {
  return {
    name: name
  };
}

function printPerson(person: Person) {
  console.log(person.name);
}

printPerson({ name: "Dave" });
