const uid = Symbol("uid");
console.log(uid);

const person = {
  // id: "p1",
  [uid]: "p1",
  age: 30,
  name: "James",
  [Symbol.toStringTag]: "User Object",
};

person.uid = "p2";

console.log(person);
console.log(Symbol("uid") === Symbol("uid"));
console.log(person.toString());

const company = {
  curEmployee: 0,
  employees: ["James", "John"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
  [Symbol.iterator]: function* employeeGenerator() {
    let curEmployee = 0;
    while (curEmployee < this.employees.length) {
      yield this.employees[curEmployee];
      curEmployee++;
    }
  },
};
//console.log(company.next());
//console.log(company.next());
//console.log(company.next());
let employee = company.next();
while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}

for (const employee of company) {
  console.log(employee);
}

// Using built iterator
const persons = ["James", "John"];
console.log(persons);

for (const person of persons) {
  console.log(person);
}
