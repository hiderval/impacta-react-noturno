//serviços rest
//const Contatos = require('./contatos');
const model = require('./model')

model.methods(['get', 'post']);
model.updateOptions({ new: true, runValidators: true });
module.exports = model;