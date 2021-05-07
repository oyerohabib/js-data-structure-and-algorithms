/*
GRAPHS - VERTICES AND EDGES

DIRECTED GRAPHS - INTERNETS

NODES - WEB PAGES
DIRECTIONS - LINKS

UNDIRECTED GRAPHS - SOCIAL NETWORK

NODES - PEOPLE
DIRECTIONS - RELATIONSHIPS

THREE REPRESENTATIONS FOR GRAPHS
- ADJACENCY MATRIX
  NOTES: ROWS REPRESENTS NODES AND COLUMNS REPRESENTS EDGES

  NODE A: NODE B
  NODE B: NODE A, NODE C
  NODE C: NODE B

  JS REPRESENTATION
  var undirectedG = {
    NODE A: ["NODE B"],
    NODE B: ["NODE A", "NODE C"],
    NODE C: ["NODE B"],
  }
  
  var undirectedGArr = {
    [1], NODE A
    [0, 2], NODE B
    [1], NODE C
  }

  UNDIRECTIONAL TYPE
  var adjMat = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ]

  DIRECTIONAL TYPE
  var adjMat = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
  ]

  INCIDENCE MATRIX - A 2D ARRAY
  NOTE: NOTES: ROWS REPRESENTS NODES AND COLUMNS REPRESENTS NODES

  TRAVERSALS - DISTANCE BETWEEN NODES IN A GRAPH
  TYPES: BREADTH-FIRST SEARCH AND DEPTH-FIRST SEARCH

*/

function bfs(graph, root) {
  var nodesLen = {};

  for (var i = 0; 1 < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  nodesLen[root] = 0;

  var queue = [root];
  var current;

  while (queue.length != 0) {
    current = queue.shift();

    var curConnected = graph[current];
    var neighborIdx = [];
    var idx = curConnected.indexOf(1);
    while (idx != -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (var j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(exBFSGraph, 1));
