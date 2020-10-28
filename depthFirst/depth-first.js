const Stack=require('../stacksAndQueues/stack');
const Queue=require('../stacksAndQueues/queue');

let graphAdj;
let visited;
let stack;
const initGraph = (maxVertice) => {
  visited = new Array(maxVertice);
  stack = new Stack();
  queue = new Queue();
  for (let i = 0; i < visited.length; i++) {
    visited[i] = false;
  }
  graphAdj = new Array(maxVertice);
  for (let i = 0; i < graphAdj.length; i++) {
    graphAdj[i] = new Array(maxVert);
  }
  for (let i = 0; i < graphAdj.length; i++) {
    for (let j = 0; j < graphAdj[i].length; j++) {
      graphAdj[i][j] = 0;
    }
  }
}

const dfs = (node) => {
  stack.push(node);
  while (!stack.isEmpty()) {
    node = stack.pop();
    if (visited[node] == false) {
      visited[node] = true;
      console.log(`we visited ${node}`)
      for (let j = 0; j < graphAdj[node].length; j++) {
        if (graphAdj[node][j] === 1) {
          stack.push(j);
        }
      }
    }
  }
}


module.exports=dfs
