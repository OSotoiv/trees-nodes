/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let accumulator = 0;
    if (!this.root) {
      return accumulator;
    }
    const stack = [this.root];
    while (stack.length) {
      const currNode = stack.pop();
      accumulator += currNode.val;
      for (let child of currNode.children) {
        stack.push(child)
      }
    }
    return accumulator;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    if (!this.root) {
      return count;
    }
    const stack = [this.root];
    while (stack.length) {
      const currNode = stack.pop();
      if ((currNode.val % 2) === 0) {
        count++;
      }
      for (let child of currNode.children) {
        stack.push(child)
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    if (!this.root) {
      return count;
    }
    const stack = [this.root];
    while (stack.length) {
      const currNode = stack.pop();
      if (currNode.val > lowerBound) {
        count++;
      }
      for (let child of currNode.children) {
        stack.push(child)
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
