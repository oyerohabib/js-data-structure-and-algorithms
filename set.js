// SETS

function mySet() {
  // THE COLLECTION WILL HOLD THE SET
  var collection = [];

  // THIS METHOD WILL CHECK FOR THE PRESENCE OF AN ELEMENT AND RETURN TRUE OR FALSE
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // THIS METHOD RETURNS ALL VALUES IN THE SET
  this.values = function () {
    return collection;
  };

  // THIS ADDS AN ELEMENT TO THE SET
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // THIS REMOVES AN ELEMENT FROM THE LIST
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // RETURNS LENGTH OF THE COLLECTION
  this.size = function () {
    return collection.length;
  };

  // THIS RETUNS THE UNION OF TWO SETS AS A NEW SET
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });

    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet;
  };

  // THIS RETURNS INTERSECTION OF TWO SETS AS A NEW SET
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // THIS RETURNS THE DIFFERENT OF TWO SETS AS A NEW SET
  this.difference = function (otherSet) {
    var differentSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differentSet.add(e);
      }
    });
    return differentSet;
  };

  // THIS CHECKS IF A SET IS A SUBSET OF ANOTHER SET
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();

setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");

console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
