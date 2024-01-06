// Interface for describing the structure of a person
interface PersonData {
    firstName: string;
    lastName: string;
    age:number;
    email?: string; // Optional field
 }
 
 // Class representing a person
 class Person {
    private _firstName: string;
    private _lastName: string;
    private_age: number;
    private _email?: string;
 
    constructor(data: PersonData) {
      this._firstName = data.firstName;
      this._lastName = data.lastName;
      this._age = data.age;
      this._email = data.email;
    }
 
    // Getters and setters for fields
    get firstName(): string {
      return this._firstName;
    }
 
    set firstName(value: string) {
      this._firstName = value;
    }
 
    get lastName(): string {
      return this._lastName;
    }
 
    set lastName(value: string) {
      this._lastName = value;
    }
 
    get age(): number {
      return this._age;
    }
 
    set age(value: number) {
      if (value >= 0) {
        this._age = value;
      } else {
        console.error("Age cannot be negative.");
      }
    }
 
    get email(): string | undefined {
      return this._email;
    }
 
    set email(value: string | undefined) {
      this._email = value;
    }
 
    // Method for displaying information about a person
    displayInfo(): void {
      console.log(
        `${this._firstName} ${this._lastName}, age: ${this._age}, email: ${
          this._email || "no data"
        }`
      );
    }
 }
 
 // Usage example
 const personData: PersonData = {
    firstName: "M1lean",
    lastName: "McM1lean",
    age: 20,
    email: "m1lean@example.com",
 };
 
 const person = new Person(personData);
 person.displayInfo();
 
 // Change age
 person.age = 20;
 person.displayInfo();