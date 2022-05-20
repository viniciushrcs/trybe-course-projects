db.voos.findOne(
    {
      $and: [
        { litrosCombustivel: { $exists: true } },
        { litrosCombustivel: { $lte: 600 } }, { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    ],
  },
  {
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
    _id: 0,
  },
);