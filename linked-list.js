/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let additionalNode = new Node(val);

    if (!this.head) {
      this.head = additionalNode;
      this.tail = additionalNode;
    } else {
      this.tail.next = additionalNode;
      this.tail = additionalNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let additionalNode = new Node(val);

    additionalNode.next = this.head;
    this.head = additionalNode;
    if (this.length === 0) this.tail = additionalNode;

    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (!this.head) return null;

    if (this.length === 1) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }

    let val = this.tail.val;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return null;

    let val = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) return false;

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
    return true;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let newNode = new Node(val);
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return null;

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }

    let val = current.next.val;
    current.next = current.next.next;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
