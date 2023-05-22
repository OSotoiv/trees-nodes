/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      return 1;
    }
    let leftMin = Infinity;
    let rightMin = Infinity;
    if (node.left) {
      leftMin = this.minDepth(node.left);
    }
    if (node.right) {
      rightMin = this.minDepth(node.right);
    }
    return Math.min(leftMin, rightMin) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      return 1;
    }
    let leftMax = 0;
    let rightMax = 0;
    if (node.left) {
      leftMax = this.maxDepth(node.left);
    }
    if (node.right) {
      rightMax = this.maxDepth(node.right);
    }
    return Math.max(leftMax, rightMax) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(node = this.root) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      return node.val;
    }
    let leftMax = 0;
    let rightMax = 0;
    if (node.left) {
      leftMax = this.maxSum(node.left);
    }
    if (node.right) {
      rightMax = this.maxSum(node.right);
    }
    return Math.max(leftMax, rightMax) + node.val;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {
    if (!node) return null;
    if (!node.left && !node.right) {
      console.log('node Val', node.val)
      return node.val > lowerBound ? node.val : null;
    }
    let leftMin = 0;
    let rightMin = 0;
    if (node.left) {
      const isLeftLarger = this.nextLarger(lowerBound, node.left);
      console.log("left", isLeftLarger)
      leftMin = isLeftLarger ? isLeftLarger : Infinity;
      // leftMin = this.nextLarger(lowerBound, node.left);
    }
    if (node.right) {
      const isRightLarger = this.nextLarger(lowerBound, node.right);
      console.log("right", isRightLarger)
      rightMin = isRightLarger ? isRightLarger : Infinity;
      // rightMin = this.nextLarger(lowerBound, node.right);
    }
    const min = Math.min(leftMin, rightMin, node.val);
    console.log("min!", min);
    return min > lowerBound ? min : null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    // Queue to perform level order traversal
    const queue = [];
    queue.push({ node: this.root, parent: null, level: 0 });

    // Variables to store parent and level of node1 and node2
    let parent1 = null;
    let parent2 = null;
    let level1 = -1;
    let level2 = -1;

    while (queue.length > 0) {
      const { node, parent, level } = queue.shift();

      // Check if node1 or node2 is found
      if (node === node1) {
        parent1 = parent;
        level1 = level;
      }
      if (node === node2) {
        parent2 = parent;
        level2 = level;
      }

      // Add left and right children to the queue
      if (node.left) {
        queue.push({ node: node.left, parent: node, level: level + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, parent: node, level: level + 1 });
      }
    }

    // Check if both nodes are found and have the same level but different parents
    return level1 === level2 && parent1 !== parent2;

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const serializedTree = [];

    function preorderSerialize(node) {
      if (node === null) {
        serializedTree.push('null');
        return;
      }

      serializedTree.push(node.val.toString());
      preorderSerialize(node.left);
      preorderSerialize(node.right);
    }

    preorderSerialize(tree.root);
    return '[' + serializedTree.join(',') + ']';
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    if (!stringTree || stringTree === '[]') {
      return null;
    }

    const arr = JSON.parse(stringTree);
    let index = 0;

    function buildTree() {
      if (index >= arr.length || arr[index] === 'null') {
        index++;
        return null;
      }

      const node = new BinaryTreeNode(parseInt(arr[index]));
      index++;
      node.left = buildTree();
      node.right = buildTree();

      return node;
    }

    return new BinaryTree(buildTree());
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
