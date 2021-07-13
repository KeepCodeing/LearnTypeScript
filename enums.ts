// The enum type just like a struct, you can declare a lot of var in enum

enum Positions {
    left = 'left',
    // if the value is a integer, and you have declared the first of
    // var of the enum, then the later var's value can be auto increase
    // just like the key of database...
    right = 0,
    up,
    down = 'down'
}

const pos = 'left';

if (pos === Positions.left) {

}
