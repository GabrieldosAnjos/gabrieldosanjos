<?php

function cors() {

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    echo "You have CORS!";
}

?>


<?xml version="1.0" encoding="ISO-8859-1"?>
<main>
	<obra pasta="menu">
		<item nome="VANISH - Hot site - Cliente: The Group" cod="47" img="47.jpg" />
		<item nome="Guardian - Conceito site - Cliente: The Group" cod="37" img="37.jpg" />
		<item nome="BRASTEMP - Conceito site - Cliente: The Group" cod="36" img="36.jpg" />
		<item nome="VOLKSWAGEN - Conceito site - Cliente: The Group" cod="46" img="46.jpg" />
		<item nome="VOLKSWAGEN - Conceito site - Cliente: The Group" cod="45" img="45.jpg" />
		<item nome="Twitter AVON Fergie - Direção de arte e Criação - Cliente: AVON" cod="02" img="02.jpg" />
		<item nome="VOLKSWAGEN - Conceito site - Cliente: The Group" cod="44" img="44.jpg" />
		<item nome="Netshoes - Conceito site - Cliente: The Group" cod="40" img="40.jpg" />
		<item nome="Santander - Conceito site - Cliente: The Group" cod="42" img="42.jpg" />
		<item nome="Ipiranga - Conceito site - Cliente: The Group" cod="38" img="38.jpg" />
		<item nome="OClock - Conceito site - Cliente: The Group" cod="41" img="41.jpg" />
		<item nome="Santander - Conceito site - Cliente: The Group" cod="43" img="43.jpg" />
		<item nome="Jacquet - Conceito site - Cliente: The Group" cod="39" img="39.jpg" />
		
		<item nome="VolksWagen - Conceito site - Cliente: The Group" cod="35" img="35.jpg" />
		<item nome="Santander - e-mkt Campanha de incentivo - Cliente: The Group" cod="34" img="34.jpg" />
		<item nome="GUARDIAN INGLASS - Conceito novo site - Cliente: The Group" cod="33" img="33.jpg" />
		<item nome="Santander - Campanha de incentivo - Cliente: The Group" cod="32" img="32.jpg" />
		<item nome="Site MTV EMA - Direção de arte, Criação, Adaptação de layout, HTML e CSS - Cliente: MTV BRASIL" cod="01" img="01.jpg" />
		<item nome="Riachuelo - Estudo de Layout/Intranet" cod="31" img="31.jpg" />
		
		<item nome="Série - Entre Teens - Direção de arte, Criação, Adaptação de layout, CSS e XML - Cliente: MTV BRASIL" cod="04" img="04.jpg" />
		<item nome="Calçados Ana Paula - Direção de arte, Criação e Flash - Cliente: ACTIVA DIGITAL" cod="03" img="03.jpg" />
		<item nome="Concurso Stabilo Color Music - Direção de arte, Criação e CSS - Cliente: MTV BRASIL" cod="06" img="06.jpg" />
		<item nome="Wilson Gava - Desenvolvimento de layout/HTML/ASP/FLASH - Cliente: Studio Gava" cod="25" img="25.jpg" />
		<item nome="Chez Bon Goût - Desenvolvimento de layout" cod="27" img="27.jpg" />
		<item nome="Elsève - Direção de arte e Criação - Cliente: MTV BRASIL" cod="05" img="05.jpg" />
		<item nome="Tríade Pub - Desenvolvimento de layout/HTML/ASP/FLASH Cliente: Tríade Pub" cod="28" img="28.jpg" />
		<item nome="Aniversário de 20 anos MTV - Direção de arte, Criação e CSS - Cliente: MTV BRASIL" cod="07" img="07.jpg" />
		<item nome="L'Espai Banqueteria - Direção de arte, Criação e Flash" cod="10" img="10.jpg" />
		<item nome="Brasfrig - Direção de Arte e Criação" cod="11" img="11.jpg" />
		<item nome="Tríade Pub - Flash e ASP" cod="13" img="13.jpg" />
		<item nome="Jobs diversos - Direção de arte e Criação" cod="14" img="14.jpg" />
		<item nome="Cerveja NS2 - Flash Developer - Cliente: Midas Interactive" cod="15" img="15.jpg" />
		<item nome="Luxxor Music - Flash Developer - Cliente: Midas Interactive" cod="16" img="16.jpg" />
		<item nome="House Ship - Flash Developer - Cliente: Midas Interactive" cod="18" img="18.jpg" />
	</obra>
</main>