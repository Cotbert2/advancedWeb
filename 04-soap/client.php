<?php

$wsdl = "http://www.dneonline.com/calculator.asmx?WSDL";

try {

    $client = new SoapClient($wsdl);

    echo "Funciones disponibles";
    $functions = $client->__getFunctions();

    foreach ($functions as $function) {
        echo "<br>" . $function;
    }

    echo "Tipos Disponibles";

    $types = $client->__getTypes();
    foreach ($types as $type) {
        echo "<br>" . $type;
    }

    echo "<br><br><br>";

    $params = [
        'intA' => 5,
        'intB' => 3
    ];
    $result = $client->__soapCall('Add', array($params));

    echo "<br>Resultado de la suma: " . $result->AddResult;

} catch(SoapFault $fault) {
    echo "Error: {$fault->faultcode}, String: {$fault->faultstring}";
} catch(Exception $e) {
    echo "Error: {$e->getMessage()}";
}

?>