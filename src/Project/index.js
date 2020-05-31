
import React from 'react';

import './style.scss';
  
export default function Project() {
return(
    <>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Pagina4</title>
</head>
<body>

  <header class="cabecalho">
        <div class="logo"><img src="img/logo.png" alt=""/></div>
  </header>

  <div class="container-projete">
      <h1>
        Design</h1>
      <h3>
        Simulate political decisions and social movements and see how teamwork can change the world</h3>

      <div class="centro-estados">
          <select name="" class="btn-estados" id="state">
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>
      </div>
      <div>
        <div class="card-retangular left"><h4>
            Suppose political decisions for your state</h4>
            <div class="btn-down right">
             <img class="" src="img/btn-down.png" alt=""/>
            </div>
         
        </div>

        <div class="card-retangular  right"> <h4>
            Suppose social actions for your state</h4>  
            <div class="btn-down right">
                <img class="" src="img/btn-down.png" alt=""/>
             </div>
        </div>

        <div class="card-box  left"> <h4>
            Suppose social actions for your state</h4>
            
            <div class="varSocial-checkbox">
                <label >Paralização do comércio</label>
                <input type="checkbox" id="scales" name="scales"/>
                <hr/>
                <div class="clear"></div>
            </div>

            <div class="varSocial-checkbox">
                <label >
                    Shutdown of shops and services (Up to 400 m²)</label>
                <input type="checkbox" id="scales" name="scales"/>
                <hr/>
                <div class="clear"></div>
            </div>

            <div class="varSocial-checkbox">
                <label >
                    Interstate travel paralysis</label>
                <input type="checkbox" id="scales" name="scales"/>
                <hr/>
                <div class="clear"></div>
            </div>

            <div class="varSocial-checkbox">
                <label >
                    Travel paralysis</label>
                <input type="checkbox" id="scales" name="scales"/>
                <hr/>
                <div class="clear"></div>
            </div>

            <div class="varSocial-checkbox">
                <label >
                    Paralysis of public leisure areas</label>
                <input type="checkbox" id="scales" name="scales"/>
                <hr/>
                <div class="clear"></div>
            </div>
           
        </div>
        <div class="card-box  right"> <h4>Suppose social actions for your state</h4> 
            <div class="varSocial">
                <label >
                    Insulation index</label>
                <input class="range " type="range" id="weight" min="0" value="0.5" max="1" step="0.1" onchange="document.getElementById('demo').volume=this.value"/>
            </div>
            <div class="varSocial">
                <label >espect to the minimum distance</label>
                <input class="range" type="range" id="weight" min="0" value="0.5" max="1" step="0.1" onchange="document.getElementById('demo').volume=this.value"/>
            </div>
            <div class="varSocial">
                <label >
                    Use of preventive methods</label>
                <input class="range" type="range" id="weight" min="0" value="0.5" max="1" step="0.1" onchange="document.getElementById('demo').volume=this.value"/>
            </div>
           
        </div>

        <div class="box-fazerSimulacao">
            <button class="btn-fazerSimulacao">
                Make Simulation</button>
        </div>
    </div>  
  </div>
</body>
</html>
</>
)}