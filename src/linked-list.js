const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.previous = this.tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        };

        this.length++;
        return node;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      let current = this._head;
      let count = 0;

      while (count < this.length) {
        if (count == index) {
          return current.data;
        } else {
          current = current.next;
          count++;
        };
      };
    }

    insertAt(index, data) {}

    isEmpty() {
      return this.length == 0;
    }

    clear() {
      var node = new Node();
      this.length = 0;
      this._head = node;
      this._tail = node;

      return this;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
