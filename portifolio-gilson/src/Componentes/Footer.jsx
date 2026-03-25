import React from 'react';
import '../../public/style/footer.scss';
import { useLanguage } from '../context/LanguageContext'; // IMPORTAR O CONTEXTO

const Footer = () => {
    const { t } = useLanguage(); // EXTRAIR A FUNÇÃO DE TRADUÇÃO
    
    // Pega o ano atual automaticamente para os direitos autorais
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <p className="copyright">
                    &copy; {anoAtual} Gilson Dias
                </p>
                <p className="footer-tag">
                    {/* TRADUZIDO */}
                    {t('footer.developedBy')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;