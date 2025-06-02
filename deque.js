var Deque = /** @class */ (function () {
    function Deque() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    Deque.prototype.pushFront = function (element) {
        this.frontIndex--;
        this.items[this.frontIndex] = element;
    };
    Deque.prototype.pushBack = function (element) {
        this.items[this.backIndex] = element;
        this.backIndex++;
    };
    Deque.prototype.popFront = function () {
        if (this.isEmpty())
            return undefined;
        var element = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return element;
    };
    Deque.prototype.popBack = function () {
        if (this.isEmpty())
            return undefined;
        this.backIndex--;
        var element = this.items[this.backIndex];
        delete this.items[this.backIndex];
        return element;
    };
    Deque.prototype.peekFront = function () {
        return this.items[this.frontIndex];
    };
    Deque.prototype.peekBack = function () {
        return this.items[this.backIndex - 1];
    };
    Deque.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Deque.prototype.size = function () {
        return this.backIndex - this.frontIndex;
    };
    Deque.prototype.clear = function () {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    };
    Deque.prototype.print = function () {
        console.log(this.toArray());
    };
    Deque.prototype.toArray = function () {
        var result = [];
        for (var i = this.frontIndex; i < this.backIndex; i++) {
            result.push(this.items[i]);
        }
        return result;
    };
    return Deque;
}());
// Exemplo de uso:
var deque = new Deque();
deque.pushBack(10);
deque.pushBack(20);
deque.pushFront(5);
deque.pushFront(1);
deque.print(); // [1, 5, 10, 20]
console.log(deque.popFront()); // 1
console.log(deque.popBack()); // 20
deque.print(); // [5, 10]
