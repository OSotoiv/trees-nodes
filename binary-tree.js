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

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
