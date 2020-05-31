import React from 'react';

import './style.css';
  
export default function StateData() {
 
    return (
        <div className = "parallax">
            <div className = "container">
                <div className = "header">
                    <div className = "titulo">
                        Onde há um link, há um caminho
                    </div>
                </div>
                <div className="body">
                    <div className = "info">
                        <div className="row1">
                            <div className="ambientais">
                                Aqui ficarão as variáveis aquisitadas
                            </div>
                            <div className="sociais">
                                Aqui ficarão as variáveis sociais
                            </div>
                            <div className="politicas">
                                Aqui ficarão as variáveis aplicadas
                            </div>
                        </div>
                        <div className="row2">
                            <div className="mapa">
                                Aqui ficará o mapa
                            </div>
                            <div className="graficos">
                                Aqui ficarão os gráficos
                            </div>
                        </div>
                    </div>
                    <div className="cuidados1">
                        <div className="lavar_maos"/>
                        <div className="limpar_superficies"/>
                        <div className="usar_mascara"/>
                    </div>
                    <div className="cuidados2">
                        <div className="manter_distancia"/>
                        <div className="saude_mental"/>
                        <div className="maos_rosto"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

