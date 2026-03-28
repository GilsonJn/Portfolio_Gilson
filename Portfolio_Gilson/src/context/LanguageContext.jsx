// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations';

// Cria o contexto
const LanguageContext = createContext();

// Cria o provedor que vai envolver o nosso App
export const LanguageProvider = ({ children }) => {
    // Começa sempre em português
    const [language, setLanguage] = useState('pt');

    // Função que inverte o idioma
    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
    };

    // Função "t" (translate) mágica que busca o texto certo no dicionário
    const t = (key) => {
        const keys = key.split('.'); // Permite procurar "nav.about"
        let value = translations[language];
        
        for (let k of keys) {
            if (value[k] === undefined) return key; // Se não achar, devolve a própria chave
            value = value[k];
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado para usarmos nos componentes
export const useLanguage = () => useContext(LanguageContext);