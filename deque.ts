class Deque<T> {
  private items: { [index: number]: T } = {};
  private frontIndex: number = 0;
  private backIndex: number = 0;

  pushFront(element: T): void {
    this.frontIndex--;
    this.items[this.frontIndex] = element;
  }

  pushBack(element: T): void {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  popFront(): T | undefined {
    if (this.isEmpty()) return undefined;

    const element = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return element;
  }

  popBack(): T | undefined {
    if (this.isEmpty()) return undefined;

    this.backIndex--;
    const element = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return element;
  }

  peekFront(): T | undefined {
    return this.items[this.frontIndex];
  }

  peekBack(): T | undefined {
    return this.items[this.backIndex - 1];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.backIndex - this.frontIndex;
  }

  clear(): void {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  print(): void {
    console.log(this.toArray());
  }

  toArray(): T[] {
    const result: T[] = [];
    for (let i = this.frontIndex; i < this.backIndex; i++) {
      result.push(this.items[i]);
    }
    return result;
  }
}

// Exemplo de uso:
const deque = new Deque<number>();

deque.pushBack(10);
deque.pushBack(20);
deque.pushFront(5);
deque.pushFront(1);

deque.print(); // [1, 5, 10, 20]

console.log(deque.popFront()); // 1
console.log(deque.popBack());  // 20

deque.print(); // [5, 10]
