class _Node {
    constructor(data, next) {
      this.data = data
      this.next = next
    }
  }

class Queue {
    constructor() {
      this.first = null
      this.last = null
      this.length = null
    }
    enqueu(item) {
      const node = new _Node(item)
      if (this.first === null) {
        this.first = node;
      }
      if (this.last) {
        this.last.next = node;
  
      }
      this.last = node;
      this.length = this.length += 1
      
      node.next = null
    }
    dequeu() {
      if (this.first === null) {
        return;
      }
      const node = this.first;
      this.first = this.first.next;
  
      if (node === this.last) {
        this.last = null;
      }
      this.length = this.length -= 1
      return node.data;
    }
  }


  module.exports = Queue;