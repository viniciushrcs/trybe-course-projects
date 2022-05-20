db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });

db.produtos.find({}, { nome: 1, descricao: 1, descricaoSite: 1, _id: 0 });

// Academic Honesty: Sources: https://github.com/tryber/sd-05-mongodb-commerce/pull/19 and https://docs.mongodb.com/manual/core/document/#document-dot-notation-embedded-fields