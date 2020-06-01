import React from 'react';

import './style.scss';

export default function States() {
 
    return (
    
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <title>Pagina2</title>
</head>
<script src="js/main.js"></script>
<script src="https://www.gstatic.com/charts/loader.js"></script>

<body>
    
    
    <header class="cabecalho">
          <div class="logo"><img src="img/logo.png" alt=""/></div>
    </header>
    <div class="container">
           <section>
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
           </section>

           <div class="container-estados">
               <div class="tabela-estados">
                   <table border="1px">
                   <tr>
                        <td><a href="#"></a>Brazil</td>
                        <td><a href="#"></a>Pará(PA)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Alagoas(AL)</td>
                        <td><a href="#"></a>Paraíba(PB)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Amapá(AP)</td>
                        <td><a href="#"></a>Paraná(PR)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Amazonas(AM)</td>
                        <td><a href="#"></a>Pernanbuco(PE)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Bahia(BA)</td>
                        <td><a href="#"></a>Piauí(PI)</td>
                    </tr>
                    <tr>
                        <td><a href="#">Ceará(CE)</a></td>
                        <td><a href="#">Rio de Janeiro(RJ)</a></td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Distrito Federal(DF)</td>
                        <td><a href="#"></a>Rio Grande do Norte(RN)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Espírito Santo(ES)</td>
                        <td><a href="#"></a>Rio Grande so Sul(RS)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Goiás(GO)</td>
                        <td><a href="#"></a>Rondônia(RO)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Maranhão(MA)</td>
                        <td><a href="#"></a>Roraima(RR)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Mato Grosso(MT)</td>
                        <td><a href="#"></a>SantaCatarina(SC)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Mato Grosso do Sul(MS)</td>
                        <td><a href="#"></a>São Paulo(SP)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Minas Gerais(MG)</td>
                        <td><a href="#"></a>Sergipe(SE)</td>
                    </tr>
                    <tr>
                        <td><a href="#"></a>Pará(PA)</td>
                        <td><a href="#"></a>Tocantins(TO)</td>
                    </tr>
                 
                   </table>

               </div>
                    <div class="map">
                        <div class="map1"  id="regions_div" ></div>
                    </div>
               </div>
           </div>
</body>

</html>

    )
}
