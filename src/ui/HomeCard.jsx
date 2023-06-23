import React from "react";

const HomeCard = (props) => {

return (
  <div className="card">
<div className="card" style={{ width: '18rem' }}>
  <img src="https://blog.smartleader.com.br/wp-content/uploads/2018/07/218346-o-que-fazer-com-o-resultado-da-avaliacao-de-desempenho-saiba-aqui.jpg" className="card-img-top"/>
  
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary" onClick={props.action}>ENTRAR</a>

  </div>
</div>
  </div>

);
};

export default HomeCard;