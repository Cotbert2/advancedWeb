<?php

$url = "http://10.40.20.0:8888/helloWorldService.php";

$options = [
    'uri' => 'http://10.40.20.0:8888/soap-server',
    'location' => $url,
    'trace' => 1,
];

try {
    $client = new SoapClient(null, $options);

    $response = $client->helloWorld("Mateo Garcia");
    echo "Response: " . $response . "\n";
} catch (SoapFault $fault) {
    echo "Exception: " . $e->getMessage() . "\n";
}

?>