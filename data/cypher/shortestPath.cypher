MATCH (a {name:"Maynard Thomas Chaffee"}) MATCH (b {name:"Susan Stockham"}) MATCH path = shortestPath((a)-[*..10]-(b)) RETURN path,a,b