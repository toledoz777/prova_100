const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasControllers');

router.post('/', tarefasController.criartarefas);
router.get('/', tarefasController.listarTarefas);
router.get('/status', tarefasController.filtrarTarefas);
router.put('/:id', tarefasController.atualizarTarefa);
router.delete('/:id', tarefasController.deletarTarefa);

module.exports = router;