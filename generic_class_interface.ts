// in this section, We will make a queue has push, pop function and
// can use by any data type

interface IQueue<T> {
    push(item: T): void;
    pop(): T;
}

class Queue<T> implements IQueue<T> {
    private que: Array<T> = [];

    public push(item: T): void {
        this.que.push(item);
    }

    public pop(): T {
        return this.que.shift();
    }
}

const stringQueue = new Queue<string>();
const numberQueue = new Queue<number>();

stringQueue.push('hello');
// stringQueue.push(1);

numberQueue.push(1);
// numberQueue.push('2');

console.log(stringQueue.pop());
