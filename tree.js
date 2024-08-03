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
    if (!this.root) return 0;
    let sum = this.root.val;

    function adder(node) {
      // loop through all the children for a Node
      for (let child of node.children) {
        sum += child.val;
        if (child.children.length > 0) {
          // recurse with the child as the root
          adder(child);
        }
      }
    }

    adder(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    if (!this.root) return 0;
    let count = this.root.val % 2 === 0 ? 1 : 0;

    function evenCounter(node) {
      // loop through all the children for a Node
      for (let child of node.children) {
        count += child.val % 2 === 0 ? 1 : 0;
        if (child.children.length > 0) {
          // recurse with the child as the root
          evenCounter(child);
        }
      }
    }

    evenCounter(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;

    function numGreaterCounter(node) {
      // loop through all the children for a Node
      for (let child of node.children) {
        count += child.val > lowerBound ? 1 : 0;
        if (child.children.length > 0) {
          // recurse with the child as the root
          numGreaterCounter(child);
        }
      }
    }

    numGreaterCounter(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
