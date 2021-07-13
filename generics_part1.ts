// generic type like magic, by use it you can only crate one price of program,
// but run it in different status. so the hardest part of generic is how to design
// the arguments and how to declare the returns...

const swap = function<T, U>(arg1: T, arg2: U): [U, T] {
    return [arg2, arg1];
};

console.log(swap(1, '2'));
