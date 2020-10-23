class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
    this.size = 0;
  }


  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    this.size++;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
    } else {
      // to cover the undirected
      //1->2
      //2->1
      // get neighbours
      const adjacencies = this._adjacencyList.get(startVertex);
      // add vertex and weight
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  getNeighbours(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log('vertex does not exist')
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log('V ====> ', vertex);
      console.log('E ====> ', edge);
    }
  }
}

module.exports = { Vertex, Graph }


