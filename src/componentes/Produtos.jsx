//codigo do card do bootstrap

function Produtos() {

    return (

        <div className="containerCards">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://atmosphere.tech/assets/img/pages/programa/razoes2_1.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Consultoria Style</h5>
                <p className="card-text">Quer tornar sua empresa mais digital mas não tem ideia de como começar?</p>
                <a href="#" className="btn btn-primary">Clique aqui</a>
              </div>
            </div>
          </div>
      
          <div className="col-12 col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://atmosphere.tech/assets/img/pages/programa/razoes2_3.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Consultoria Premium</h5>
                <p className="card-text">Quer otimizar os processos da sua empresa ainda mais eficientes usando tecnologia?</p>
                <a href="#" className="btn btn-primary">Clique aqui</a>
              </div>
            </div>
          </div>
      
          <div className="col-12 col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://atmosphere.tech/assets/img/pages/home/razoes1_2.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Consultoria Flex</h5>
                <p className="card-text">Quer customizar as soluções tecnologicas para a toda a empresa ou parte dela?</p>
                <a href="#" className="btn btn-primary">Clique aqui</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
};

export default Produtos