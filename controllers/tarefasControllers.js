const conexao = require ('../db/conexao');

exports.criartarefas = (req, res) => {
    const {titulo,descricao} = req.body;
        conexao.query(
            'INSERT INTO tarefas (titulo,descricao) VALUES(?,?)',
            [titulo,descricao],
            (err)=> {
                if (err) return res.status (500).send('Erro ao cadastrar tarefa');
                res.status(201).send('tarefa cadastrada com sucesso!');
            });
        };


        exports.listarTarefas = (req, res) => {
            conexao.query ('SELECT*FROM tarefas', (err, results) => {
                if (err) return res.status(500).send('Erro ao buscar tarefas');
                res.status(200).send(results);
            });
        };


        exports.atualizarTarefa = (req,res) => {
            const {id} = req.params;
            const {titulo,descricao,status} = req.body;


        let data_conclusao = null;
        if (status=== 'concluida') {
            data_conclusao = new Date (); //cria data/hora atual
        }







            const query = 'UPDATE tarefas SET titulo = ?, descricao = ?, status = ?, data_conclusao = ? WHERE id =?';
        
            conexao.query(query,[titulo,descricao,status,data_conclusao,id],(err,results) => {
                if (err) return res.status(500).send ('Erro ao atualizar');
                if (results.affectedRows === 0) return res.status(404).send ('tarefa não encontrada');
                res.status(200).send('tarefa atualizada com sucesso');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            });
            
        };


        exports.deletarTarefa = (req,res) => {
            const {id} =req.params;
        
            conexao.query ('DELETE FROM tarefas WHERE id = ?', [id],(err, results) => {
                if (err) return res.status(500).send ('Erro ao deletar');
                if (results.affectedRows === 0) return res.status(404).send ('tarefa não encontrada');
                res.status(200).send ('tarefa deletada com sucesso');
            });
        };