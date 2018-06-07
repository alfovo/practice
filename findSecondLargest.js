var Jasmine = require('jasmine');

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function findLargest(treeRoot) {

  if (!treeRoot.right) {
    return findLargest(treeRoot.right);
  }
  
  return treeRoot.value;
}

function findSecondLargest(treeRoot) {

  // Find the second largest item in the binary search tree
  // go right to the bottom and then up and then left
  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
    throw new Error("tree must have at least two nodes!");
  }
  
  // case 1: we are at the largest with a left subtree, second largest is largest in left sub-tree
  if (treeRoot.left && !treeRoot.right) {
    secondLargest = findLargest(treeRoot.left);
  }
  
  // case 2: we are at the largest with no left subtree, second largest is parent of largest
  if (treeRoot.right 
    && !treeRoot.right.right
    && !treeRoot.right.left){
    secondLargest = treeRoot.value;
  }

  else {
    secondLargest = treeRoot;
    findSecondLargest(treeRoot.right)
  }

  return secondLargest;
}



// Tests

describe("finds second largest", function() {
  let treeRoot;
  let leftNode;
  let rightNode;
  
  it("in a full tree", function() {
    treeRoot = new BinaryTreeNode(50);
    leftNode = treeRoot.insertLeft(30);
    leftNode.insertLeft(10);
    leftNode.insertRight(40);
    rightNode = treeRoot.insertRight(70);
    rightNode.insertLeft(60);
    rightNode.insertRight(80);
    expect(findSecondLargest(treeRoot)).toEqual(60);
  });

  it("when largest has a left child", function() {
    treeRoot = new BinaryTreeNode(50);
    leftNode = treeRoot.insertLeft(30);
    leftNode.insertLeft(10);
    leftNode.insertRight(40);
    rightNode = treeRoot.insertRight(70);
    rightNode.insertLeft(60);
    expect(findSecondLargest(treeRoot)).toEqual(60);
  });

});

// let desc = 'full tree';
// let treeRoot = new BinaryTreeNode(50);
// let leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(10);
// leftNode.insertRight(40);
// let rightNode = treeRoot.insertRight(70);
// rightNode.insertLeft(60);
// rightNode.insertRight(80);
// assertEquals(findSecondLargest(treeRoot), 70, desc);

// desc = 'largest has a left child';
// treeRoot = new BinaryTreeNode(50);
// leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(10);
// leftNode.insertRight(40);
// rightNode = treeRoot.insertRight(70);
// rightNode.insertLeft(60);
// assertEquals(findSecondLargest(treeRoot), 60, desc);

// desc = 'largest has a left subtree';
// treeRoot = new BinaryTreeNode(50);
// leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(10);
// leftNode.insertRight(40);
// rightNode = treeRoot.insertRight(70);
// leftNode = rightNode.insertLeft(60);
// leftNode.insertRight(65);
// leftNode = leftNode.insertLeft(55);
// leftNode.insertRight(58);
// assertEquals(findSecondLargest(treeRoot), 65, desc);

// desc = 'second largest is root node';
// treeRoot = new BinaryTreeNode(50);
// leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(10);
// leftNode.insertRight(40);
// rightNode = treeRoot.insertRight(70);
// assertEquals(findSecondLargest(treeRoot), 50, desc);

// desc = 'descending linked list';
// treeRoot = new BinaryTreeNode(50);
// leftNode = treeRoot.insertLeft(40);
// leftNode = leftNode.insertLeft(30);
// leftNode = leftNode.insertLeft(20);
// leftNode = leftNode.insertLeft(10);
// assertEquals(findSecondLargest(treeRoot), 40, desc);

// desc = 'ascending linked list';
// treeRoot = new BinaryTreeNode(50);
// rightNode = treeRoot.insertRight(60);
// rightNode = rightNode.insertRight(70);
// rightNode = rightNode.insertRight(80);
// assertEquals(findSecondLargest(treeRoot), 70, desc);

// desc = 'one node tree';
// treeRoot = new BinaryTreeNode(50);
// assertThrowsError(() => findSecondLargest(treeRoot), desc);

// desc = 'when tree is empty';
// treeRoot = null;
// assertThrowsError(() => findSecondLargest(treeRoot), desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
