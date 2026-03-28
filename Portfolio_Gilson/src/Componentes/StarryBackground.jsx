import React from 'react';
import '../../public/style/starryBackground.scss';

const StarryBackground = () => {
  return (
    <div className="espaco-fundo">

      <div className="estrela-camada-1"></div>
      <div className="estrela-camada-2"></div>
      <div className="estrela-camada-3"></div>
      
      <div className="camada-cadentes">
        <div className="cadente"></div>
        <div className="cadente"></div>
        <div className="cadente"></div>
        <div className="cadente"></div>
        <div className="cadente"></div>
      </div>

    </div>
  );
};

export default StarryBackground;