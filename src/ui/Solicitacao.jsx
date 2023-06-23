import React from "react";

const Solicitacao = () => {

return (
  
<div className="aberturaChamado">
<div className="card" style={{ width: '18rem' }}>
  <img src="..." className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">Precisa de Ajuda?</h5>
    <p className="card-text">Fale com o nosso time de atendimento</p>
    <a href="#" className="btn btn-primary">Abrir Tarefas</a>
  </div>
</div>


<div className="consultarChamado">
<div className="card" style={{ width: '18rem' }}>
  <img src="..." className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">Tarefas em Desenvolvimento</h5>
    <p className="card-text">Veja o status das tarefas</p>
    <a href="#" className="btn btn-primary">Acompanhar Tarefa</a>
  </div>
</div>
</div>

<div className="chamadosFinalizados">
<div className="card" style={{ width: '18rem' }}>
  <img src="..." className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">Tarefas Finalizadas</h5>
    <p className="card-text">Consulte as tarefas que o time já entregou</p>
    <a href="#" className="btn btn-primary">Ver Tarefas Finalizadas</a>
  </div>
</div>
</div>


</div>

);
};

export default Solicitacao
