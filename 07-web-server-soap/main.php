<?php
class HelloWorldService {
    public function helloWorld($name) {
        return "Hello, $name, jijija!";
    }
}

$options = [
    'uri' => 'http://10.40.26.232:8000/soap-server',
];

$server = new SoapServer(null, $options);

$server->setClass('HelloWorldService');
$server->handle();

echo "SOAP server is running. You can access it at http://10.40.26.232:8000/soap-server\n";
?>
