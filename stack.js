// STACKS
// FUCNTIONS
// PUSH, POP, PEEK, LENGTH

var letters = [];

var word = "peep";
var rword = "";

// PUT LETTERS OF WORD INTO STACK
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// POP OFF THE STACK IN REVERSE ORDER
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrone");
} else {
  console.log(word + " is not a palindrone");
}

var Stack = function () {
  this.count = 0;
  this.storage = {};

  // ADDS A VALUE TO THE END OF THE STACK
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // REMOVE AND RETURN THE VALUE AT THE END OF THE STACK
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // RETURN THE LENGTH OF THE STACK
  this.size = function () {
    return this.count;
  };

  // RETURNS THE VALUE AT THE END OF THE STACK
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

myStack.push("oyeroTech");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
