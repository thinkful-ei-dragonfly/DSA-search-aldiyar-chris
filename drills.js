/* eslint-disable strict */

// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. Identify the sequence of numbers that each recursive call will search to find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm. Identify the sequence of numbers that each recursive call will search to find 16?
const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log(array[i])
    }
    // console.log(array[i]);
  }
  return -1;
}

// console.log(indexOf(arr, 8));


//3. Find a book 
//Imagine you are looking for a book in a library with a Dewey Decimal index. 
//How would you go about it? Can you express this process as a search algorithm? 
//Implement your algorithm to find a book whose Dewey and book title is provided.

//Dewey Decimal Index divides books by type from 000 too 900. Sub-sections are represented
//by numbers within a given type number e.g. (450 or 270)
//sub-sub-sections further specify origin or type within a subsection e.g. (451 or 277)
//decimal values wihtin a given sub-sub-section represent the bottom of the 'tree of sections'. e.g. (451.2 or 277.9)

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

function deweyDecimal(array, dewey, start, end, title) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    console.log('Book not found')
    return -1
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];
  if (item == dewey) {
    if (item.title = title) {
      return index;
    }
  } else if (item < dewey) {
    return deweyDecimal(array, dewey, index + 1, end, title);
  } else if (item > dewey) {
    return deweyDecimal(array, dewey, start, index - 1, title);
  }
}

//         35
//     25      90
//   15  27   89  91
// 14  19    79

//4. Searching in BST 
//Part One
//14 15 19 25 27 35 79 89 90 91 in order
//35 25 15 14 19 27 89 79 91 90 pre order
//14 19 15 27 25 79 89 90 91 35 post order

//Part Two 
//5 7 6 9 11 10 8 pre order
// 5
//   7
// 6   9
//   8   11
//     10

//6 8 10 11 9 7 5

//5. 

const BinarySearchTree = require('./BinarySearchTree');

//25 15 50 10 24 35 70 4 12 18 31 44 66 90 22
function findBSTHeight(t) {
  let height = 0;
  if (t.left) {
    let leftHeight = 1 + findBSTHeight(t.left);
    if (leftHeight > height) {
      height = leftHeight;
    }
  }
  if (t.right) {
    let rightHeight = 1 + findBSTHeight(t.right);
    if (rightHeight > height) {
      height = rightHeight;
    }
  }
  if (!t.left && !t.right) {
    height = 1;
  }
  return height;
}

function dsfPreOrder(tree) {
  // Pre-order
  console.log(tree.key);
  if (tree.left) {
    dsfPreOrder(tree.left);
  }
  if (tree.right) {
    dsfPreOrder(tree.right);
  }
}

function dsfPostOrder(tree) {
  if (tree.left) {
    dsfPostOrder(tree.left);
  }
  if (tree.right) {
    dsfPostOrder(tree.right);
  }
  console.log(tree.key);
}

function dsfInOrder(tree) {
  if (tree.left) {
    dsfInOrder(tree.left);
  }
  console.log(tree.key);
  if (tree.right) {
    dsfInOrder(tree.right);
  }
}

//Question Six


const Queue = require('./Queue');

function enterpriseSort(tree, values = []) {
  const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
  const node = tree;
  queue.enqueu(node);
  while (queue.length) {
    const node = queue.dequeu(); //remove from the queue
    values.push(node.value); // add that value from the queue to an array

    console.log(node.left)
    if (node.left) {
      queue.enqueu(node.left); //add left child to the queue
    }

    if (node.right) {
      queue.enqueu(node.right); // add right child to the queue
    }
  }

  return values;
}


// Question 7
let tradingStats = [128, 122, 121, 123, 98, 97, 105];

function findBestDay(array) {
  let max = 0;
  let current;
  let day;
  for (let i = 0; i < array.length; i++) {
    current = array[i + 1] - array[i];
    if (current > max) {
      max = current;
      day = i+1;
    }
  }

  return `Day ${day} was the best, profit was ${max}`;
}

console.log(findBestDay(tradingStats));


function main() {
  let questionFive = new BinarySearchTree();
  questionFive.insert(25);
  questionFive.insert(15);
  questionFive.insert(50);
  questionFive.insert(10);
  questionFive.insert(24);
  questionFive.insert(35);
  questionFive.insert(70);
  questionFive.insert(4);
  questionFive.insert(12);
  questionFive.insert(18);
  questionFive.insert(31);
  questionFive.insert(44);
  questionFive.insert(66);
  questionFive.insert(90);
  questionFive.insert(22);
  // console.log(questionFive);
  // console.log(findBSTHeight(questionFive))
  // dsfPostOrder(questionFive)
  // dsfInOrder(questionFive)
  // dsfPreOrder(questionFive)
  let enterprise = new BinarySearchTree();
  enterprise.insert(5, 'Picard');
  enterprise.insert(3, 'Riker');
  enterprise.insert(6, 'Data');
  enterprise.insert(2, 'Worf');
  enterprise.insert(4, 'Laforge');
  enterprise.insert(8, 'Crusher');
  enterprise.insert(1, 'Lieutenant security');
  enterprise.insert(7, 'Selar');
  console.log(enterpriseSort(enterprise))
}

// main();