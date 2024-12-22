function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John Smith"];
console.log(greeterArray(user)); // Correct usage with array handling

//Alternative solution (handling each individually)
for (const person of user) {
  console.log(greeter(person));
}