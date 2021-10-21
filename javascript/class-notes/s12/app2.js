// parent class
class Person {
  constructor(firstName, lastName, birthYear, employment = "") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.employment = employment;
  }

  selamla() {
    console.log(`Merhaba ${this.firstName} ${this.lastName}`);
  }
}

// child class
class Student extends Person {
  constructor(firstName, lastName, bY) {
    super(firstName, lastName, bY, "Student");
  }

  selamla() {
    console.log("hello im a student");
  }
  dersCalis() {
    super.selamla();
    this.selamla();
    console.log("Studying javascript...");
  }
}

// teacher
class Teacher extends Person {}

let lutfullah = new Student("Lütfullah", "👑", 1995);
// lutfullah.selamla();
lutfullah.dersCalis();
// let hakan = new Student();
// hakan.selamla();
// hakan.dersCalis();
