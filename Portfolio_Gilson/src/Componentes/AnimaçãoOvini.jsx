import React from 'react';
import '../../public/style/animacaoOvini.scss';

const AnimaçãoOvini = () => {
    return (
        <div className="ovni-wrapper">
            <img
                src="/img/ovini.svg"
                alt="OVNI iluminando"
                className="ovni-img"
                width="250"
                height="250"
            />
        </div>
    );
};

export default AnimaçãoOvini;