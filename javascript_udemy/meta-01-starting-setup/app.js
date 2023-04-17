const uid = Symbol("uid");
console.log(uid);

const person = {
  // id: "p1",
  [uid]: "p1",
  age: 30,
  name: "James",
  [Symbol.toStringTag]: "User Objectss",
};

person.uid = "p2";
// Symbol
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
  // Iterator
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

// reflect api

const course = {
  title: "JavaScript - The Complete Guide",
  rating: 5,
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});
Reflect.defineProperty(course, "price", {
  value: 100,
  writable: true,
  enumerable: true,
  configurable: true,
});
// Object vs Reflect API - Reflect is newer, also have delete property method
Reflect.deleteProperty(course, "rating");
console.log(course.toString());
console.log(course);

// proxy api

const courseHandler = {
  get(obj, propertyName) {
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, newValue) {
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
pCourse.numbero = 5;
console.log(pCourse.pog);
console.log(pCourse.title);
console.log(pCourse.numbero);
console.log(pCourse);
