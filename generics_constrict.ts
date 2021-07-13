// generic just like a "intensity union type", for example, I wrote a piece program to
// get a argument's length, so how can I know this argument has the property length?
// should I write a lot of typeof to solve this problem?
// in TS, this question can be solve by interface, use interface, you can make sure
// the generic has the type which define in the interface

interface IType {
    length: number,
}

const getLength = function<T extends IType>(arg: T): T {
    console.log(arg.length);
    return arg;
};

getLength({ length: 1 });
getLength('hello world');
getLength([1, 2, 3, 4]);
