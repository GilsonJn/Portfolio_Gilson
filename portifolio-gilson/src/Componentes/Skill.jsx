import React from 'react';
import '../../public/style/skill.scss';

const Skill = () => {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container">
                <div className="section-header">
                    <h2>Sobre Mim</h2>
                    <span className="linha-brilho"></span>
                </div>

                <div className="sobre-content">
                    <div className="texto-box">
                        <p>
                            Olá! Sou <strong>Gilson Dias</strong>, estudante de Engenharia de Software apaixonado por criar experiências digitais completas. Meu foco é unir um front-end elegante e intuitivo com uma arquitetura de back-end robusta e escalável.
                        </p>
                        <p>
                            Tenho experiência prática no desenvolvimento web utilizando <strong>React e SCSS</strong> para interfaces, além de <strong>Java com Spring Boot</strong> para construção de APIs. Gosto de transitar por toda a stack e estou sempre explorando novas áreas, como aplicações mobile, Internet das Coisas (IoT) e Visão Computacional.
                        </p>
                        <p>
                            Fora das linhas de código, atuo na coordenação de equipes técnicas e infraestrutura na minha comunidade. Essa vivência prática me ensinou o real valor da <strong>liderança, do trabalho em equipe sob pressão e da comunicação clara</strong> para resolver problemas complexos.
                        </p>
                        <div className="idiomas">
                            <span>🌎 <strong>Idiomas:</strong> Português do Brasil (Fluente) | Espanhol (Básico)</span>
                        </div>
                    </div>

                    <div className="skills-box">
                        <div className="skill-category">
                            <h3>Hard Skills</h3>
                            <div className="tags">
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>SCSS / CSS</span>
                                <span>Java</span>
                                <span>Spring Boot</span>
                                <span>Node.js</span>
                                <span>Git</span>
                                <span>IoT</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Soft Skills</h3>
                            <div className="tags soft">
                                <span>Liderança Técnica</span>
                                <span>Trabalho em Equipe</span>
                                <span>Comunicação</span>
                                <span>Gestão de Tempo</span>
                                <span>Resolução de Problemas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;