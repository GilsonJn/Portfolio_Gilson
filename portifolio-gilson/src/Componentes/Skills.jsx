import React from 'react';
import '../../public/style/skills.scss';
import { useLanguage } from '../context/LanguageContext'; // IMPORTAR O CONTEXTO

const Skills = () => {
    const { t } = useLanguage(); // EXTRAIR A FUNÇÃO DE TRADUÇÃO

    return (
        <section id="habilidades" className="skills-section">
            <div className="skills-content">
                <div className="skills-header">
                    {/* TRADUZIDO: Título e Subtítulo */}
                    <h2 className="space-title">{t('skills.title')}</h2>
                    <div className="cyber-subtitle-wrapper">
                        <p className="cyber-subtitle">{t('skills.subtitle')}</p>
                    </div>
                </div>

                <div className="skills-grid">
                    
                    {/* CARTÃO 1: Linguagens de Programação */}
                    <div className="skill-wrapper">
                        <div className="skill-card">
                            <div className="card-inner">
                                {/* TRADUZIDO */}
                                <h3 className="skill-title">{t('skills.card1')}</h3>
                                <div className="skill-icons">
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                                        <span className="tooltip">Java</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                                        <span className="tooltip">Python</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
                                        <span className="tooltip">C#</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                        <span className="tooltip">JavaScript</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
                                        <span className="tooltip">TypeScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARTÃO 2: Desenvolvimento Web & Mobile */}
                    <div className="skill-wrapper">
                        <div className="skill-card">
                            <div className="card-inner">
                                {/* TRADUZIDO */}
                                <h3 className="skill-title">{t('skills.card2')}</h3>
                                <div className="skill-icons">
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
                                        <span className="tooltip">HTML5</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                                        <span className="tooltip">CSS3</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                                        <span className="tooltip">React</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Sass" />
                                        <span className="tooltip">Sass</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="icon-largo"/>
                                        <span className="tooltip">Node.js</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARTÃO 3: Frameworks & Ferramentas */}
                    <div className="skill-wrapper">
                        <div className="skill-card">
                            <div className="card-inner">
                                {/* TRADUZIDO */}
                                <h3 className="skill-title">{t('skills.card3')}</h3>
                                <div className="skill-icons">
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" />
                                        <span className="tooltip">Spring Boot</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" alt="OpenCV" />
                                        <span className="tooltip">OpenCV</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
                                        <span className="tooltip">Git</span>
                                    </div>
                                    <div className="skill-item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" className="icon-largo"/>
                                        <span className="tooltip">MySQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARTÃO 4: Outras */}
                    <div className="skill-wrapper">
                        <div className="skill-card">
                            <div className="card-inner">
                                {/* TRADUZIDO */}
                                <h3 className="skill-title">{t('skills.card4')}</h3>
                                <div className="skill-icons text-icons">
                                    <span>Scrum</span>
                                    <span>Kanban</span>
                                    <span>Power BI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARTÃO 5: Habilidades Sociais */}
                    <div className="skill-wrapper full-width">
                        <div className="skill-card">
                            <div className="card-inner">
                                {/* TRADUZIDO */}
                                <h3 className="skill-title">{t('skills.card5')}</h3>
                                <div className="social-skills-grid">
                                    {/* TRADUZIDO: Soft Skills */}
                                    <span>{t('skills.soft.s1')}</span>
                                    <span>{t('skills.soft.s2')}</span>
                                    <span>{t('skills.soft.s3')}</span>
                                    <span>{t('skills.soft.s4')}</span>
                                    <span>{t('skills.soft.s5')}</span>
                                    <span>{t('skills.soft.s6')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;