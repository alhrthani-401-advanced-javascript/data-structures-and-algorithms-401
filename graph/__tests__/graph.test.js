'use strict';

const { Vertex, Graph } = require('../graph.js');


describe('Repeated words module', () => {

  const graph = new Graph();

  const palastain = new Vertex('palastain');
  const syrai = new Vertex('syrai');
  const egypt = new Vertex('egypt');
  const jordan = new Vertex('jordan');
  const libanon = new Vertex('libanon');
  const suadia = new Vertex('suadia');
  const iraq = new Vertex('iraq');

  graph.addVertex(syrai);
  graph.addVertex(egypt);
  graph.addVertex(jordan);
  graph.addVertex(libanon);
  graph.addVertex(suadia);
  graph.addVertex(iraq);


  it('Test Empty string', () => {
    graph.addVertex(palastain);
    // let expected = [];
    expect(graph._adjacencyList.has(palastain)).toBeTruthy();
  });
  it('Test case 1 ', () => {
    graph.addDirectedEdge(palastain, syrai);
    graph.addDirectedEdge(palastain, egypt);
    graph.addDirectedEdge(palastain, jordan);
    graph.addDirectedEdge(palastain, libanon);

    graph.addDirectedEdge(jordan, syrai);
    graph.addDirectedEdge(jordan, egypt);
    graph.addDirectedEdge(jordan, palastain);
    graph.addDirectedEdge(jordan, suadia);
    graph.addDirectedEdge(jordan, iraq);
    expect(graph._adjacencyList.get(palastain).length).toEqual(4);
  });

})
