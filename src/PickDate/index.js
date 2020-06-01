import React from 'react';

import './style.scss';
  
export default function PickDate() {

    return(
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>    
     
    <title>Pagina 8</title>
</head>
<body>
    <header class="cabecalho">
        <div class="logo"><img src="./assets/hackathon_logo.svg" alt=""/></div>
        
  </header>

 <div class="container-simulacao">
      <button class="left btn-fazerOutraSimulacao">Fazer outra simulação</button><div class="clear"></div>
 
     <div class="varSocial  box-range">
        <label>Escolha a data para ver os resultados futuros</label>
        <input class="range" type="range" id="weight" min="0" value="0.5" max="1" step="0.1" onchange="document.getElementById('demo').volume=this.value"/>
     </div>

    <div class="clear"></div>
     <div class="data">
           <h4>12/02/2020</h4>
           
     </div>


     <div class="container-grafico">
         <div class="garfico-linha">
            <div id = "line_top_x" > </div> 
         </div>

         <div class="garfico-coluna">

        </div>

     </div>

     <div class="container-dados-simulacao">
         <h4>Situação pós simulação</h4>
         <div class="dados-simulacao">
             <table>
                 <tr>
                     <td>Casos Confirmados</td>
                     <td>Estimativa de Casos</td>
                     <td>Mortes</td>
                     <td>Recuperados</td>
                 </tr>
                  <tr>
                     <td><h1>14.250</h1></td>
                     <td><h1> 22.460</h1></td>
                     <td><h1>1.010  </h1></td>
                     <td><h1> 1.035 </h1></td>
                 </tr>

             </table>
         </div>

     </div>

     <div class="container-dados-simulacao">
        <h4>Situação pós simulação</h4>
        <div class="dados-simulacao-a">
            <table>
                <tr>
                    <td>Numero de Leitos</td>
                    <td>Leitos</td>
                </tr>
                
                <tr>
                    <td><h1>4.000</h1></td>
                    <td><h1>80%</h1></td>
                </tr>

                <tr>
                    <td>Preenchidos</td>
                    <td>Preenchidos</td>
                </tr>

            </table>
        </div>

    </div>

  </div>

</body>
</html>

    )
}