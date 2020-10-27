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

const printGraph = () => {
     let graphline = " ";
     let i, j;
     for (i = 0; i < graphAdj.length; i++) {
        for (j = 0; j < graphAdj[i].length; j++) {
            graphline += graphAdj[i][j];
            graphline += " "
            if (j == graphAdj.length - 1) {
               console.log(graphline);
               graphline = ' ';
            }
        }
      }
}

printGraph();