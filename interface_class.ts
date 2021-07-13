// use class with interface? Is it not Java? Yes, it's not...so most rules
// are same compare to Java...

interface IAnimals {
    eat(): void;
    sleep(): void;
}

interface IHuman extends IAnimals {
    speak(): string;
    walk(): void;
}

class Dog implements IAnimals {
    eat(): void {
    }

    sleep(): void {
    }

    bark(): string {
        return "woof!"
    }
}

class Person implements IHuman {
    eat(): void {
    }

    sleep(): void {
    }

    speak(): string {
        return "";
    }

    walk(): void {
    }

}
