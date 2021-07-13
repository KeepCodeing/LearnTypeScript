// if you are well knew the standard named ES6, you may not feel strongly
// in this TS program.so what have TS done? is's create three class protect
// key words, public, private, protected just like Java, is it?

// my poor example...
class Person {
    private readonly id: number = 0;
    private name: string;

    constructor() {

    }

    static run() {
        console.log('I have ran');
    }

    public getId(): number {
        return this.id;
    }

    public changeName() {
        this.name = '111';
    }

    protected getName(): string {
        return this.name;
    }
}

const per = new Person();
Person.run();
per.changeName();
per.getId();
