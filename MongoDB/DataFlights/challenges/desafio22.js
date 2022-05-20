db.voos.findOne(
    {
      $and: [
        {
          $or: [
            { "empresa.nome": "DELTA AIRLINES" },
            { "empresa.nome": "AMERICAN AIRLINES" },
          ],
        },
        { "aeroportoOrigem.sigla": "SBGR" },
        { "aeroportoDestino.sigla": "KJFK" },
  ],
    },
    { vooId: 1, _id: 0 },
);
