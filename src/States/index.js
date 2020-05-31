import React from 'react';

import './style.scss';

src = "https://www.gstatic.com/charts/loader.js";

google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  
  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 500],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);
  
    var options = {
            region: '019', // America
            colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
            backgroundColor: 'white',
            datalessRegionColor: 'purple',
            defaultColor: 'green',
          };
  
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  
    chart.draw(data, options);
}

export default function States() {
 
    return (
    
    <div className = "parallax">
    <div className = "container">
        
        <div className="header">
            <div className="logo"/>
        </div>
        <div className="container">
            <div className = "section">
            <input id = "sent"
                    type = "submit"
                    class = "sendButton"
                    value = "States"
                    name = "sendButton"/>            

            <div className = "bar"/>
            </div>

            <div className="container-estados">
                <div className="tabela-estados">
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
                        <div className="map">
                            <div className="map1"  id="regions_div" />
                        </div>
                </div>
            </div>
        </div>

    </div>
        
    )
}
