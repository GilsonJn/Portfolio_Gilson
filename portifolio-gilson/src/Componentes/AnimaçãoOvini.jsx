import React from 'react';
import '../../public/style/animacaoOvini.scss'; 

const AnimaçãoOvini = () => {
    return (
        <div className="ovni-wrapper">
            <img 
                src="/img/ovini.svg" 
                alt="OVNI iluminando" 
                className="ovni-img" 
            />
        </div>
    );
};

export default AnimaçãoOvini;