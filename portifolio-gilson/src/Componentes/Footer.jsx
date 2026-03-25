import React from 'react';
import '../../public/style/footer.scss';

const Footer = () => {
    // Pega o ano atual automaticamente para os direitos autorais
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <p className="copyright">
                    &copy; {anoAtual} Gilson Dias
                </p>
                <p className="footer-tag">
                    Desenvolvido por mim 🚀
                </p>
            </div>
        </footer>
    );
};

export default Footer;