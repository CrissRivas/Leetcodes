var findCircleNum = function (isConnected) {
  const nodes = isConnected.length;
  const graph = {};
  const visited = new Set();

  // Crear el grafo
  for (let i = 0; i < nodes; i++) {
    graph[i] = [];
    for (let j = 0; j < nodes; j++) {
      if (isConnected[i][j]) {
        graph[i].push(j);
      }
    }
  }

  // Función DFS recursiva
  const dfs = (startNode) => {
    visited.add(startNode);
    for (let neighbor of graph[startNode]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  };

  let ans = 0;

  // Ejecutar DFS desde cada nodo no visitado
  for (let i = 0; i < nodes; i++) {
    if (!visited.has(i)) {
      ans++;
      dfs(i);
    }
  }
  return ans;
};
