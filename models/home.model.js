const conexao = require('../database/connection.database');




async function buscaTodosHome(){
    //estrutura de tentativa try..catch para capturar erros
    try{
        let [linhas] = await conexao.query(`
           select
   
   sum(if(m.tipo=2,mi.quantidade,0)) - sum(if(m.tipo=3,mi.quantidade,0)) as quantidade,
   p.id,
    p.descricao as p_descricao
 from tb_movimentacao m
	inner join tb_mov_item mi on mi.movimentacao= m.id
    inner join tb_produto p on p.id  = mi.produto
    inner join tb_tipo t on t.id = m.tipo
where 1=1
and m.tipo in (2,3)
group by p.id

            `)
            //retorna valores buscados no banco
            return linhas;
    }catch(e){
        //retorna o erro que aconteceu
        return e;
    }
}


module.exports = {
     buscaTodosHome
    
};