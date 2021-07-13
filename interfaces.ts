// the interface of TypeScript:
// it's like a constrict, if you implemented a interface, you have to
// declare all the property of the interface otherwise the property is not
// necessary

interface IPerson {
    readonly id: number,
    name: string,
    age: number,
    // you can ignore this property if you added the symbol "?" after it's name
    gender?: string
}

// TypeScript's interface is different when you compare it with others,
// , in this language you can declare a interface just like a variable
// property or you can implement it like Java, it's interesting, is it?
const Person : IPerson = {
    id: 1,
    name: 'hwz',
    age: 20
};

// can't change the readonly property
// Person.id = 2;

