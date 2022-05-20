db.voos.deleteMany({
    $and: [{ litrosCombustivel: { $lt: 400 } }, { "empresa.nome": "AZUL" }],
  });
// {
//   "acknowledged": true,
//   "deletedCount": 538
// }